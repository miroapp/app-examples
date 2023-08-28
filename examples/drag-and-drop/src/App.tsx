import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

const { board } = miro;

function App() {
  const images = [
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-projects.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-account.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-product.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-ux-research.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-learn.svg",
  ];

  const drop = async (e: DropEvent) => {
    const { x, y, target } = e;

    if (target instanceof HTMLImageElement) {
      const image = await board.createImage({ x, y, url: target.src });
      await board.viewport.zoomTo(image);
    }
  };

  // Register the drop event handler once.
  useEffect(() => {
    board.ui.on("drop", drop);
  });

  return (
    <div className="main">
      {images.map((image, index) => {
        return (
          <img
            src={image}
            draggable={false}
            className="miro-draggable draggable-item"
            key={index}
          />
        );
      })}
    </div>
  );
}

// Render App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
