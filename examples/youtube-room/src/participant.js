/* globals io, miro */

const { board } = window.miro;
const socket = io();

miro.board.getInfo().then((info) => {
  socket.emit("joinRoom", info.id);
  console.log(`Joining room ${info.id}`);
});

/**
 * Opens modal on command from facilitator app
 */
socket.on("execute", function (msg) {
  console.log(msg);
  if (msg == "open") {
    board.ui.openModal({ url: "participant-modal" });
  }
});

/**
 * Listens for icon click on the miro board.
 */
async function init() {
  await board.ui.on("icon:click", async () => {
    await board.ui.openModal({ url: "participant-modal" });
  });
}

init();
