const { board } = window.miro;

async function init() {
  board.ui.on("icon:click", async () => {
    await board.ui.openPanel({ url: "app.html" });
  });
}

// Initialize board
init();

export {};
