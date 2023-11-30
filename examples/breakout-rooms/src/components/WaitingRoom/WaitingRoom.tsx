"use client";

import * as React from "react";
import { Button, IconHandPointing } from "@mirohq/design-system";

import { useCurrentUser } from "../../hooks";
import { WaitingIcon } from "../WaitingIcon";
import "./WaitingRoom.css";

export const WaitingRoom: React.FC = () => {
  const currentUser = useCurrentUser();

  const handleNudge = () => {
    if (!currentUser) {
      return;
    }

    miro.board.events.broadcast("nudge-facilitator", currentUser);
  };
  return (
    <main className="waiting-room-container">
      <div className="waiting-room-message">
        <h1>You facilitator is preparing the session</h1>
        <Button variant="ghost-prominent" size="small" onClick={handleNudge}>
          <Button.IconSlot>
            <IconHandPointing />
          </Button.IconSlot>
          <Button.Label>Nudge them</Button.Label>
        </Button>
      </div>
      <WaitingIcon />
    </main>
  );
};
