import * as React from "react";
import importGithub from "../../assets/import-github.png";

const GitHub = () => {
  const handleChooseGithubClick = async () => {
    miro.board.ui.openModal({
      url: "modal.html",
      fullscreen: false,
    });
  };

  return (
    <div className="github-container">
      <h3>Synced changes</h3>
      <p>
        Any changes you apply, either in Miro or in GitHub, are synced between
        both tools.
      </p>

      <img
        src={importGithub}
        className="import-github-image"
        draggable={false}
      />

      <button
        className="button button-primary"
        type="button"
        onClick={handleChooseGithubClick}
      >
        Choose from GitHub
      </button>
    </div>
  );
};

export default GitHub;
