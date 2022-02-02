import React from "react";
import ReactDOM from "react-dom";

function App() {
  const images = [
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-projects.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-account.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-product.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-ux-research.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-learn.svg",
  ];

  const { board } = window.miro;

  async function init() {
    board.ui.on("drop", async ({ x, y, target }) => {
      if (target instanceof HTMLImageElement) {
        const image = await board.createImage({ x, y, url: target.src });
        await board.viewport.zoomTo(image);
      }
    });
  }

  // Initialize board
  init();

  return (
    <div className="main">
      {images.map((image, index) => {
        return (
          <img
            src={image}
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
