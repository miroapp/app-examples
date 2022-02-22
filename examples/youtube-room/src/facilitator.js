const { board } = window.miro;

init();

/**
 * Listens for icon click on the miro board.
 */
async function init() {
  await board.ui.on("icon:click", async () => {
    await board.ui.openModal({ url: "facilitator-modal" });
  });
}
