import React, { useState, useEffect } from "react";
import PromptInput from "../components/PromptInput";
import Button from "../components/Button";

export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const showSpinner = () => {
    setLoading(true);
  };

  const hideSpinner = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Opens the panel for our app UI when we click on icon in the left sidebar
    if (new URLSearchParams(window.location.search).has("panel")) return;
    window.miro.board.ui.on("icon:click", async () => {
      window.miro.board.ui.openPanel({
        url: `/?panel=1`,
      });
    });
  }, []);

  // Register the drop event handler once.
  useEffect(() => {
    window.miro.board.ui.on("drop", drop);
  }, []);

  //drag and drop logic
  const drop = async ({ x, y, target }) => {
    showSpinner();

    if (target instanceof HTMLImageElement) {
      const image = await window.miro.board.createImage({
        x,
        y,
        url: target.src,
      });
      await window.miro.board.viewport.zoomTo(image);
    }
    hideSpinner();
  };

  //handles the prompt input being typed in
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleButtonClick = async () => {
    //setting the image source to be a transparent color, otherwise we have a border which looks bad
    setImage("");
    showSpinner();

    // post our prompt to our backend
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputValue }),
      });

      //get the response back from backend, which has the URL which we are looking for
      const { data: imageUrl } = await response.json();

      //set the image src to the URL which is returned by OpenAI call
      setImage(imageUrl);
    } catch (err) {
      console.log(err);
    }
    hideSpinner();
  };

  return (
    <div className="grid">
      {/* React component which takes the user input and uses that as a prompt for OpenAI image generation */}
      <PromptInput
        placeholder={"Van Gogh inspired portrait of a dog"}
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Button which calls the OpenAI backend (pages/api/openai.js) with the prompt */}
      <Button onClick={handleButtonClick}>Generate Image</Button>

      {/* Spinner needs to be hidden by default, otherwise will spin when opening app first time */}

      <div className="image-container cs1 ce12">
        {Boolean(loading) && <div className="spinner" />}
        {/* Img which needs to be draggable */}
        {Boolean(image) && <img className="miro-draggable" src={image} />}
      </div>
    </div>
  );
}
