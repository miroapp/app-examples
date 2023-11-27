import { IconButton, IconPlus } from "@mirohq/design-system";
import React from "react";

import "./BreakoutStarter.css";
import { WaitingIcon } from "../WaitingIcon";

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

      <WaitingIcon />
    </section>
  );
};
