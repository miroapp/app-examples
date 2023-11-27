import { IconButton, IconPlus } from "@mirohq/design-system";
import React from "react";

import "./BreakoutStarter.css";

type Props = {
  onAddGroup: () => void;
};

export const BreakoutStarter: React.FC<Props> = ({ onAddGroup }) => {
  return (
    <section className="breakout-starter">
      <div className="starter-action rounded-button">
        <IconButton
          label="Add a room"
          variant="solid-prominent"
          onClick={onAddGroup}
        >
          <IconPlus />
        </IconButton>
        <h5>Create a room to get started</h5>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 41"
        className="starter-icon"
      >
        <path
          fill="#AFB1BB"
          fill-rule="evenodd"
          d="M5.264 4.167a2.5 2.5 0 0 0-2.5 2.5v11.666a2.5 2.5 0 0 0 2.5 2.5H16.93a2.5 2.5 0 0 0 2.5-2.5V6.667a2.5 2.5 0 0 0-2.5-2.5H5.264ZM6.097 17.5v-10h10v10h-10ZM24.764 9.334a2.5 2.5 0 0 0-2.5 2.5v8.333a2.5 2.5 0 0 0 2.5 2.5h8.333a2.5 2.5 0 0 0 2.5-2.5v-8.334a2.5 2.5 0 0 0-2.5-2.5h-8.333Zm.669 10.166v-7h7v7h-7ZM11.098 23.333a2.5 2.5 0 0 0-2.5 2.5v7.346a2.5 2.5 0 0 0 2.5 2.5h9.138a2.5 2.5 0 0 0 2.5-2.5v-7.346a2.5 2.5 0 0 0-2.5-2.5h-9.138Zm.585 9.267v-6.183h7.967V32.6h-7.967ZM28.068 25.167a2.5 2.5 0 0 0-2.5 2.5v6.666a2.5 2.5 0 0 0 2.5 2.5h6.667a2.5 2.5 0 0 0 2.5-2.5v-6.666a2.5 2.5 0 0 0-2.5-2.5h-6.667Zm.415 8.75v-5.834h5.766v5.834h-5.766Z"
          clip-rule="evenodd"
        />
      </svg>
    </section>
  );
};
