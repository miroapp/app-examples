import { IconPlus } from "@mirohq/design-system";
import React from "react";

import { WaitingIcon } from "../WaitingIcon";

import "./BreakoutStarter.css";

type Props = {
  onAddGroup: () => void;
};

export const BreakoutStarter: React.FC<Props> = ({ onAddGroup }) => {
  return (
    <section className="breakout-starter">
      <button onClick={onAddGroup} className="starter-action">
        <div className="rounded-plus">
          <IconPlus />
        </div>
        <h5 className="starter-action-title">Create a room to get started</h5>
      </button>

      <WaitingIcon />
    </section>
  );
};
