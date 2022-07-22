import * as React from "react";
import selection from "../../assets/selection.png";

const NoSelection = () => {
  return (
    <>
      <h3>Select from Miro board</h3>
      <p>
        From the board, select at least a sticky note or a card to convert it to
        a GitHub card.
      </p>

      <img src={selection} draggable={false} />
    </>
  );
};

export default NoSelection;
