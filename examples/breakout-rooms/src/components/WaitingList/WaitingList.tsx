import { Button, IconUserAdd } from "@mirohq/design-system";
import { OnlineUserInfo } from "@mirohq/websdk-types";
import React from "react";

import "./WaitingList.css";

type Props = {
  unassignedUsers: OnlineUserInfo[];
};

export const WaitingList: React.FC<Props> = ({ unassignedUsers }) => {
  return (
    <section className="waiting-list">
      <h5>{unassignedUsers.length} user(s) not in rooms</h5>
      <Button variant="solid-subtle" size="large">
        <Button.IconSlot>
          <IconUserAdd />
        </Button.IconSlot>
        <Button.Label>Split all users between rooms</Button.Label>
      </Button>
    </section>
  );
};
