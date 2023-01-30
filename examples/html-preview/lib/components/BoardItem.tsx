import React, { FC, PropsWithChildren } from "react";
import { Item } from "../item";

function color(hexColor?: string, opacity?: string) {
  if (!hexColor) return undefined;
  if (!opacity) return hexColor;
  let hexOpacity = Math.floor(parseFloat(opacity) * 255).toString(16);
  if (hexOpacity.length < 2) hexOpacity = "0" + hexOpacity;
  return hexColor + hexOpacity;
}

function align(value?: string) {
  if (value === "bottom") return "flex-end";
  if (value === "right") return "flex-end";
  if (value === "middle") return "center";
  if (value === "center") return "center";
  return "flex-start";
}

function toAlignment(s?: string) {
  if (s === "center") return "center";
  if (s === "right") return "right";
  return "left";
}

export const BoardItem: FC<PropsWithChildren<{ item: Item }>> = ({
  item,
  children,
}) => {
  const transform: string[] = [];
  transform.push(`translate(-50%, -50%)`);
  let border = "";
  if (item.geometry?.rotation) {
    transform.push(`rotate(${item.geometry?.rotation}deg)`);
  }
  if (item.style) {
    border = `${item.style.borderWidth}px solid ${item.style.borderColor}`;
  }

  return (
    <div
      className={"type-" + item.type}
      style={{
        display: "flex",
        alignItems:
          item.type === "sticky_note"
            ? "center"
            : align(item.style?.textAlignVertical),
        justifyContent:
          item.type === "sticky_note" ? "center" : align(item.style?.textAlign),
        position: "absolute",
        left: item.position?.x,
        top: item.position?.y,
        width: item.geometry?.width,
        height: item.geometry?.height,
        transform: transform.join(" "),
        padding: "8px 6px",
        border,
        fontSize: item.style?.fontSize
          ? item.style?.fontSize + "px"
          : undefined,
        fontFamily: item.style?.fontFamily
          ? item.style.fontFamily.replace("_", " ")
          : "sans-serif",
        background: color(item.style?.fillColor, item.style?.fillOpacity),
        textAlign:
          toAlignment(item.style?.textAlign) ||
          (item.type === "sticky_note" ? "center" : "left"),
      }}
    >
      {children}
    </div>
  );
};
