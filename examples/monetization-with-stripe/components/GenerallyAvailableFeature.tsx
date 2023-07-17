export const GenerallyAvailableFeature = () => {
  const handleClick = () => {
    const placeSticky = async () => {
      await window.miro?.board?.createStickyNote({
        content: `This is sticky note. \n Added to the board at ${new Date()}`,
      });
    };

    placeSticky();
  };

  return (
    <div>
      <button
        className={"button button-primary"}
        type={"button"}
        onClick={handleClick}
      >
        Add a plain sticky
      </button>
    </div>
  );
};
