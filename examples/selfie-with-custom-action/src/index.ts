import { registerAction } from "./register-miro-custom-actions";

export async function init() {
  miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openModal({ url: "capture.html" });
  });

  registerAction();
}

init();
