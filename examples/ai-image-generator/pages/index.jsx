import React, { useState, useEffect } from "react";
import initMiro from "../initMiro";
import PromptInput from "../components/PromptInput";
import Button from "../components/Button";

export const getServerSideProps = async function getServerSideProps({ req }) {
  const { miro } = initMiro(req);
  // redirect to auth url if user has not authorized the app
  if (!(await miro.isAuthorized(""))) {
    return {
      props: {
        authUrl: miro.getAuthUrl(),
      },
    };
  }
  return {
    props: {},
  };
};

export default function Main({ authUrl }) {
  // Shows spinner while API calls are in progress / image is being dragged & dropped
  const showSpinner = () => {
    setLoading(true);
  };

  // Removes spinner when API calls are finished and data is returned / image has been dropped
  const removeSpinner = () => {
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
  const drop = async (e) => {
    showSpinner();
    const { x, y, target } = e;
    if (target instanceof HTMLImageElement) {
      const image = await window.miro.board.createImage({
        x,
        y,
        url: target.src,
      });
      await window.miro.board.viewport.zoomTo(image);
    }
    removeSpinner();
  };

  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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
      const data = await response.json();
      let imageUrl = data.data;

      //set the image src to the URL which is returned by OpenAI call
      setImage(imageUrl);
      removeSpinner();
    } catch (err) {
      console.log(err);
    }
  };

  if (authUrl) {
    return (
      <div className="grid wrapper">
        <div className="cs1 ce12">
          <a className="button button-primary" href={authUrl}>
            Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid">
      <div className="cs1 ce12">
        {/* React component which takes the user input and uses that as a prompt for OpenAI image generation */}
        <PromptInput
          placeholder={"Van Gogh inspired portrait of a dog"}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      {/* Button which calls the OpenAI backend (pages/api/openai.js) with the prompt */}
      <Button onClick={handleButtonClick}>Generate Image</Button>

      {/* Spinner needs to be hidden by default, otherwise will spin when opening app first time */}
      {Boolean(loading) && <div className="spinner" />}
      <div className="image-container cs1 ce12">
        {/* Img which needs to be draggable */}
        {Boolean(image) && <img className="miro-draggable" src={image} />}
      </div>
    </div>
  );
}
