import * as React from "react";
import { OnlineUserInfo } from "@mirohq/websdk-types";
import { initials } from "../../utils";

export type Props = {
  user: OnlineUserInfo;
  color?: string;
};

import "./Avatar.css";

const colors = [
  "var(--colors-blue-600)",
  "var(--colors-green-600)",
  "var(--colors-red-600)",
  "var(--colors-yellow-600)",
];
function* colorGenerator(colors: string[]) {
  let index = 0;
  const totalColors = colors.length;

  while (true) {
    yield colors[index];
    index = (index + 1) % totalColors;
  }
}

const getNextColor = colorGenerator(colors);

const userColors = new Map<OnlineUserInfo["id"], string>();
const getUserColor = (user: OnlineUserInfo): string => {
  let color = userColors.get(user.id);
  if (!color) {
    color = getNextColor.next().value ?? colors[0];
    userColors.set(user.id, color);
  }

  return color;
};

export const Avatar: React.FC<Props> = ({ user }) => {
  return (
    <div
      className="avatar"
      key={user.id}
      style={{ "--color": getUserColor(user) }}
    >
      {initials(user.name)}
    </div>
  );
};
