import { WidgetItem } from "@mirohq/miro-api/dist/highlevel/Item";
import {
  AppCardItem,
  Board,
  CardItem,
  DocumentItem,
  EmbedItem,
  FrameItem,
  ImageItem,
  MiroApi,
} from "@mirohq/miro-api";

import { type Item } from "./item";

export async function getAllFrames(board: Board): Promise<FrameItem[]> {
  const frames: FrameItem[] = [];
  for await (const frame of board.getAllItems({ type: "frame" })) {
    if (frame instanceof FrameItem) frames.push(frame);
  }
  return frames;
}

export function findFrameByTitle(frames: FrameItem[], path: string): FrameItem {
  return frames.filter((frame) => frame.data?.title == path)[0] || frames[0];
}

async function getImage(api: MiroApi, url: string | undefined) {
  if (!url) return "";

  try {
    const body = (
      await api._api.call("get", url.replace("preview", "original"))
    ).body as { url: string };
    return body.url;
  } catch (err) {
    console.error(err);
  }

  return "";
}

export async function enrichItem(
  api: MiroApi,
  board: Board,
  item: WidgetItem
): Promise<Item | undefined> {
  const id = item.id.toString();
  if (
    item instanceof AppCardItem ||
    item instanceof CardItem ||
    item instanceof DocumentItem ||
    item instanceof EmbedItem
  ) {
    return;
  }

  if (item.type === "shape") {
    item = await board.getShapeItem(id);
  } else if (item.type === "text") {
    item = await board.getTextItem(id);
  } else if (item.type === "sticky_note") {
    item = await board.getStickyNoteItem(id);
  }

  const data = item.data;
  const image =
    item instanceof ImageItem ? await getImage(api, item?.data?.imageUrl) : "";

  return {
    ...item,
    style: "style" in item ? item.style : {},
    content: (data && "content" in data && data?.content) || "",
    image: image,
    geometry: item.geometry,
    position: item.position,
  };
}

function isSet(i: Item | undefined): i is Item {
  return !!i;
}

export async function getItems(
  api: MiroApi,
  board: Board,
  frame: FrameItem
): Promise<Item[]> {
  const items: Array<Promise<Item | undefined>> = [];
  for await (const item of (frame || parent).getAllItems()) {
    items.push(enrichItem(api, board, item));
  }
  return (await Promise.all(items)).filter(isSet);
}

export async function getLinks(
  board: Board,
  items: Item[],
  frames: FrameItem[]
) {
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
  return links;
}
