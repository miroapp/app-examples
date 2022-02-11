/* global miro */

/** initialising icon click listener */
async function init() {
  miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openPanel({ url: "app.html" });
  });
}

init();
