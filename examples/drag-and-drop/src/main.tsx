import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const { board } = window.miro;

async function init() {
  await board.ui.on("icon:click", async () => {
    await board.ui.openPanel({ pageUrl: "app.html" });
  });

  await board.ui.on("drop", async ({ x, y, target }) => {
    if (target instanceof HTMLImageElement) {
      const image = await board.createImage({ x, y, url: target.src });
      await board.viewport.zoomTo(image);
    }
  });
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Initialize board
init();
