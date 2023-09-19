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

  const api = miro.as("");

  const boards = [];

  for await (const board of api.getAllBoards()) {
    boards.push(board.name || "");
  }

  return {
    props: {
      boards,
    },
  };
};

export default function Main({ boards, authUrl }) {
  useEffect(() => {
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
    console.log("drop event is running");
  }, []);

  //drag and drop logic
  const drop = async (e) => {
    const { x, y, target } = e;

    if (target instanceof HTMLImageElement) {
      console.log("about to create image");
      const image = await window.miro.board.createImage({
        x,
        y,
        url: target.src,
      });
      await window.miro.board.viewport.zoomTo(image);
    }
  };

  const [inputValue, setInputValue] = useState("");

  //handles the response being returned from backend (URL of image)
  const [response, setResponse] = useState("");

  //handles the prompt input being typed in
  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  // Shows spinner while API calls are in progress
  function showSpinner() {
    document.querySelector(".spinner").classList.add("show");
  }

  // Removes spinner when API calls are finished and data is returned
  function removeSpinner() {
    document.querySelector(".spinner").classList.remove("show");
  }

  const handleButtonClick = async () => {
    //spinner should start once the API call is made
    showSpinner();
    setResponse("");

    // post our prompt to our backend
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: inputValue }),
    });

    const data = await response.json();
    let imageUrl = data.data;

    console.log(imageUrl);
    setResponse(imageUrl);
    document.querySelector("#image").src = imageUrl;
    removeSpinner();
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
      <div id="promptInput">
        <PromptInput
          placeholder={"Van Gogh inspired portrait of a dog"}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <Button
        label="Generate Image"
        onClick={handleButtonClick}
        id="generateImgBtn"
      />

      <div className="spinner"></div>
      <div className="image-container">
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
