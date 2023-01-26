import { GetServerSideProps } from "next";
import initMiro from "../../initMiro";

import { WidgetItem } from "@mirohq/miro-api/dist/highlevel/Item";
import { Board, FrameItem, ShapeItem } from "@mirohq/miro-api";
import { FC, PropsWithChildren } from "react";

interface Item {
  id: number;
  type: string;
  content: string;
  image: string;
  style: ShapeItem["style"];
  geometry: WidgetItem["geometry"];
  position: WidgetItem["position"];
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const { miro } = initMiro(req);

  // cache for 10 min
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=59"
  );

  // redirect to auth url if user has not authorized the app
  if (!(await miro.isAuthorized(""))) {
    return {
      redirect: {
        destination: miro.getAuthUrl(),
        permanent: false,
      },
    };
  }

  const api = miro.as("");

  const items: Item[] = [];

  if (!query.boardId) {
    return {
      notFound: true,
    };
  }

  let board: Board;
  try {
    board = await api.getBoard(query.boardId.toString());
  } catch (err) {
    return { notFound: true };
  }

  const frames: FrameItem[] = [];
  for await (const frame of board.getAllItems({ type: "frame" })) {
    if (frame instanceof FrameItem) frames.push(frame);
  }

  const path = query.path || "index";

  const frame =
    frames.filter((frame) => frame.data?.title == path)[0] ||
    frames[0] ||
    board;

  for await (let item of frame.getAllItems()) {
    const id = item.id.toString();

    if (item.type === "shape") {
      const item = await board.getShapeItem(id);
      items.push({
        id: item.id,
        type: item.type,
        style: item.style,
        content: item.data?.content || "",
        image: "",
        geometry: item.geometry,
        position: item.position,
      });
      continue;
    } else if (item.type === "text") {
      item = await board.getTextItem(id);
    } else if (item.type === "sticky_note") {
      item = await board.getStickyNoteItem(id);
    }

    const data = item.data;
    let image = "";

    if (data && "imageUrl" in data && data.imageUrl) {
      try {
        const body = (
          await api._api.call(
            "get",
            data.imageUrl.replace("preview", "original")
          )
        ).body as { url: string };
        image = body.url;
      } catch (err) {
        console.error(err);
      }
    }

    items.push({
      id: item.id,
      type: item.type,
      style: "style" in item ? (item.style as any) || {} : {},
      content:
        (item.data && "content" in item.data && item.data?.content) || "",
      image: image,
      geometry: item.geometry,
      position: item.position,
    });
  }

  const links: Record<string, string> = {};
  for await (const connector of board.getAllConnectors()) {
    const matchingItem = items.find(
      (item) => item.id.toString() === connector.startItem?.id?.toString()
    );
    if (!matchingItem) continue;
    const endItem = connector.endItem;
    if (!endItem) continue;
    const endItemData = await board.getItem(endItem.id || "");

    const matchingFrame = frames.find(
      (frame) => "parent" in endItemData && frame.id == endItemData.parent?.id
    );

    if (!matchingFrame) continue;

    links[connector.startItem?.id || ""] = matchingFrame.data?.title || "";
  }

  const props: Props = {
    items: serialize(items),
    links,
    boardId: board.id,
    width: frame.geometry?.width || 1000,
  };

  return {
    props,
  };
};

function serialize<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

function color(hexColor?: string, opacity?: string) {
  if (!hexColor) return undefined;
  if (!opacity) return hexColor;
  let hexOpacity = Math.floor(parseFloat(opacity) * 255).toString(16);
  if (hexOpacity.length < 2) hexOpacity = "0" + hexOpacity;
  return hexColor + hexOpacity;
}

function align(value?: string) {
  if (value === "bottom") return "flex-end";
  if (value === "right") return "flex-end";
  if (value === "middle") return "center";
  if (value === "center") return "center";
  return "flex-start";
}

function toAlignment(s?: string) {
  if (s === "center") return "center";
  if (s === "right") return "right";
  return "left";
}

interface Props {
  links: Record<string, string>;
  width: number;
  items: Item[];
  boardId: string;
}

const Link: FC<PropsWithChildren<{ link: string; boardId: string }>> = ({
  link,
  boardId,
  children,
}) => {
  if (link) {
    return (
      <a style={{ color: "inherit" }} href={"/" + boardId + "/" + link}>
        {children}
      </a>
    );
  }
  return <>{children}</>;
};

export default function BoardPage({ items, links, width, boardId }: Props) {
  return (
    <div
      className="wrapper"
      style={{ left: "50%", transform: `translateX(${-width / 2}px)` }}
    >
      {items.map((item) => {
        const transform: string[] = [];
        transform.push(`translate(-50%, -50%)`);
        let border = "";
        if (item.geometry?.rotation) {
          transform.push(`rotate(${item.geometry?.rotation}deg)`);
        }
        if (item.style) {
          border = `${item.style.borderWidth}px solid ${item.style.borderColor}`;
        }

        const link = links[item.id.toString()];
        return (
          <Link key={item.id} link={link} boardId={boardId}>
            <div
              className={"type-" + item.type}
              style={{
                display: "flex",
                alignItems:
                  item.type === "sticky_note"
                    ? "center"
                    : align(item.style?.textAlignVertical),
                justifyContent:
                  item.type === "sticky_note"
                    ? "center"
                    : align(item.style?.textAlign),
                position: "absolute",
                left: item.position?.x,
                top: item.position?.y,
                width: item.geometry?.width,
                height: item.geometry?.height,
                transform: transform.join(" "),
                padding: "8px 6px",
                border,
                fontSize: item.style?.fontSize
                  ? item.style?.fontSize + "px"
                  : undefined,
                fontFamily: item.style?.fontFamily
                  ? item.style.fontFamily.replace("_", " ")
                  : "sans-serif",
                background: color(
                  item.style?.fillColor,
                  item.style?.fillOpacity
                ),
                textAlign:
                  toAlignment(item.style?.textAlign) ||
                  (item.type === "sticky_note" ? "center" : "left"),
              }}
            >
              {item.image ? (
                <img src={item.image} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
