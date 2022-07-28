import * as React from "react";
import { CirclePicker } from "react-color";

const ColorPicker = ({
  color,
  setColor,
}: {
  color: string;
  setColor: (color: { background: string }) => void;
}) => {
  const colors = [
    "#1A1A1A",
    "#414BB2",
    "#2D9BF0",
    "#0CA789",
    "#8FD14F",
    "#CEE741",
    "#FAC710",
    "#F24726",
    "#DA0063",
    "#9510AC",
  ];

  const handleChangeColor = (color: any) => {
    setColor({ background: color.hex });
  };

  return (
    <CirclePicker
      color={color}
      onChangeComplete={(color) => handleChangeColor(color)}
      colors={colors}
    />
  );
};

export default ColorPicker;
