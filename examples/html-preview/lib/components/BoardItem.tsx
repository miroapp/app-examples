import React, { FC, PropsWithChildren } from "react";
import { Item } from "../item";

function color(hexColor?: string, opacity?: string) {
  if (!hexColor) return undefined;
  if (!opacity) return hexColor;
  let hexOpacity = Math.floor(parseFloat(opacity) * 255).toString(16);
  if (hexOpacity.length < 2) hexOpacity = "0" + hexOpacity;
  return hexColor + hexOpacity;
}

function align(position?: string) {
  if (position === "bottom") return "flex-end";
  if (position === "right") return "flex-end";
  if (position === "middle") return "center";
  if (position === "center") return "center";
  return "flex-start";
}

function toAlignment(stringAlignment?: string) {
  if (stringAlignment === "center") return "center";
  if (stringAlignment === "right") return "right";
  return "left";
}

export const BoardItem: FC<PropsWithChildren<{ item: Item }>> = ({
  item,
  children,
}) => {
  const rotation = item.geometry?.rotation
    ? `rotate(${item.geometry?.rotation}deg)`
    : "";

  const border = item.style
    ? `${item.style.borderWidth}px solid ${item.style.borderColor}`
    : "";

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
        transform: `translate(-50%, -50%) ${rotation}`,
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
