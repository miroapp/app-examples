export const PaidFeature = () => {
  const handleClick = () => {
    const placeSticky = async () => {
      await window.miro?.board?.createStickyNote({
        content: `This is a sticky note. It looks just like the actual paper one.\n Added to the board at ${new Date()}`,
        style: {
          textAlign: "left",
          fillColor: "cyan",
        },
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
        Add styled sticky
      </button>
    </div>
  );
};
