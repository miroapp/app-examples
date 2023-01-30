import { GetServerSideProps } from "next";
import initMiro from "../../initMiro";

import { Board } from "@mirohq/miro-api";

import { BoardItem } from "../../lib/components/BoardItem";
import { Link } from "../../lib/components/Link";
import { type Item } from "../../lib/item";

import { getFrames, findFrame, getItems, getLinks } from "../../lib/data";

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

  const frames = await getFrames(board);
  const frame = findFrame(frames, (query.path || "index").toString());
  const items = await getItems(api, board, frame);
  const links = await getLinks(board, items, frames);

  return {
    props: {
      items: serialize(items),
      links,
      boardId: board.id,
      width: frame.geometry?.width || 1000,
    },
  };
};

function serialize<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

interface Props {
  links: Record<string, string>;
  width: number;
  items: Item[];
  boardId: string;
}

export default function BoardPage({ items, links, width, boardId }: Props) {
  return (
    <div
      className="wrapper"
      style={{ left: "50%", transform: `translateX(${-width / 2}px)` }}
    >
      {items.map((item) => {
        const link = links[item.id.toString()];
        return (
          <Link key={item.id} link={link} boardId={boardId}>
            <BoardItem item={item}>
              {item.image ? (
                <img src={item.image} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              )}
            </BoardItem>
          </Link>
        );
      })}
    </div>
  );
}
