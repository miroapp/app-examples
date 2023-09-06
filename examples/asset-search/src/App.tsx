import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import type { DropEvent } from "@mirohq/websdk-types";

import Input from "./components/Input";

const { board } = miro;

function App() {
  const [inputValue, setInputValue] = useState("");

  const images = [
    {
      url: "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-projects.svg",
      name: "projects",
      tags: ["folders", "collaboration"],
    },
    {
      url: "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-account.svg",
      name: "account",
      tags: ["user", "profile"],
    },
    {
      url: "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-product.svg",
      name: "product",
      tags: ["tool", "collaboration"],
    },
    {
      url: "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-ux-research.svg",
      name: "ux research",
      tags: ["design", "information"],
    },
    {
      url: "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-learn.svg",
      name: "learn",
      tags: ["education", "tutorials"],
    },
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
  }, []);

  return (
    <div className="main">
      <Input handleInputChange={(value) => setInputValue(value)} />
      {images
        .filter((o) => {
          return (
            o["name"].toLowerCase().includes(inputValue.toLowerCase()) ||
            o["tags"].some((value) => {
              return value.includes(inputValue.toLowerCase());
            })
          );
        })
        .map((image, index) => {
          return (
            <img
              src={image.url}
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
  document.getElementById("root"),
);
