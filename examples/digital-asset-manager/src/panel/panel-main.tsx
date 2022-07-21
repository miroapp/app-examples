import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Panel from "./Panel";

const { board } = window.miro;

async function init() {
  await board.ui.on("icon:click", async () => {
    await board.ui.openPanel({ url: "index.html", height: 708 });
  });

  await board.ui.on("drop", async ({ x, y, target }) => {
    // Paste Image on drop
    if (target.matches("img")) {
      await board.createImage({
        x,
        y,
        url: target.dataset.image as string,
      });
    }
  });
}

// Render App
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Panel />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("panel-root")
);

// Initialize board
init();
