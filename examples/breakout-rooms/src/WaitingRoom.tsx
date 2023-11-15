"use client";

import * as React from "react";
import { useCurrentUser } from "./hooks";

export const WaitingRoom: React.FC = () => {
  const currentUser = useCurrentUser();

  const handleNudge = () => {
    if (!currentUser) {
      return;
    }

    miro.board.experimental.events.broadcast("nudge-facilitator", currentUser);
  };
  return (
    <h1>
      The facilitator is preparing the breakout rooms.{" "}
      <a
        className="link link-primary"
        href="javascript:;"
        onClick={() => handleNudge()}
      >
        Nudge them
      </a>
      .
    </h1>
  );
};
