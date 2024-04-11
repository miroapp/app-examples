import { IGif } from "@giphy/js-types";

export async function createImage(gif: IGif) {
  const viewport = await miro.board.viewport.get();

  await miro.board.createImage({
    url: gif.images.original.url,
    x: viewport.x + viewport.width / 2,
    y: viewport.y + viewport.height / 2,
  });
}
