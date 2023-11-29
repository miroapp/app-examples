import { IconButton, IconPlus } from "@mirohq/design-system";
import React from "react";

import { WaitingIcon } from "../WaitingIcon";

import "./BreakoutStarter.css";

type Props = {
  onAddGroup: () => void;
};

export const BreakoutStarter: React.FC<Props> = ({ onAddGroup }) => {
  return (
    <section className="breakout-starter">
      <div className="starter-action">
        <IconButton
          label="Add a room"
          variant="solid-prominent"
          css={{ borderRadius: "100%" }}
          onClick={onAddGroup}
        >
          <IconPlus />
        </IconButton>
        <h5 className="starter-action-title">Create a room to get started</h5>
      </div>

      <WaitingIcon />
    </section>
  );
};
