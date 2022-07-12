import * as React from "react";
import selection from "../../assets/selection.png";

const NoSelection = () => {
  return (
    <>
      <h3>Select from Miro Board</h3>
      <p>
        Select at least one sticky note or Miro card from the board to convert
        to a GitHub card.
      </p>

      <img src={selection} draggable={false} />
    </>
  );
};

export default NoSelection;
