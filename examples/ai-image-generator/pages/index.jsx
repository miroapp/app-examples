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
        boards: [],
        authUrl: miro.getAuthUrl(),
      },
    };
  }
  return {
    props: {},
  };
};

export default function Main({ boards, authUrl }) {
  useEffect(() => {
    removeSpinner();
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
    const { initialX, initialY, target } = e;

    if (target instanceof HTMLImageElement) {
      let position = await window.miro.board.experimental.findEmptySpace({
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      });
      console.log(position);
      let x = position.x;
      let y = position.y;

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

  //handles the prompt input being typed in
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  // Shows spinner while API calls are in progress
  async function showSpinner() {
    let spinner = await document.getElementById("spinner");
    spinner.style.visibility = "visible";
  }

  // Removes spinner when API calls are finished and data is returned
  async function removeSpinner() {
    let spinner = await document.getElementById("spinner");
    spinner.style.visibility = "hidden";
  }

  const handleButtonClick = async () => {
    //setting the image source to be a transparent color, otherwise we have a border which looks bad
    document.querySelector("#image").src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA";
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

      document.querySelector("#image").src = imageUrl;
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
    <div className="grid wrapper">
      {/* Text input which defines the prompt to the API call to OpenAI */}
      <div id="promptInput">
        <PromptInput
          placeholder={"Van Gogh inspired portrait of a dog"}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      {/* Button which starts the API call to OpenAI */}
      <Button
        label="Generate Image"
        onClick={handleButtonClick}
        id="generateImgBtn"
      />

      <div className="spinner" id="spinner"></div>
      <div className="image-container">
        {/* This image must be draggable. Draggable={false} is syntax needed for Miro image to be
        draggble. Src is being set to a gif with transparent background to eliminate ugly border */}
        <img
          className="miro-draggable"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA"
          id="image"
          draggable={false}
        />
      </div>
    </div>
  );
}
