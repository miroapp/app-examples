const { board } = window.miro;

async function init() {
  board.ui.on("icon:click", async () => {
    await board.ui.openPanel({ url: "app.html" });
  });

  await board.ui.on("drop", async ({ x, y, target }) => {
    if (target instanceof HTMLImageElement) {
      const image = await board.createImage({ x, y, url: target.src });
      await board.viewport.zoomTo(image);
    }
  });
}

// Initialize board
init();
