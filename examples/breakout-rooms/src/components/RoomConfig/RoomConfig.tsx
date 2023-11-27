"use client";

import * as React from "react";
import {
  DropdownMenu,
  IconButton,
  IconFrame,
  IconTrash,
  IconUser,
  IconUserAdd,
} from "@mirohq/design-system";
import { OnlineUserInfo } from "@mirohq/websdk-types";

import type { Participant, Room } from "../../types";

import "./RoomConfig.css";
import { initials } from "../../utils";

export type Props = {
  room: Room;
  isEditable: boolean;
  isSelected: boolean;
  unassignedUsers: OnlineUserInfo[];
  onSelect: (room: Room) => void;
  onRemove: (room: Room) => void;
  onAddParticipant: (room: Room, user: OnlineUserInfo) => void;
  onRemoveParticipant: (room: Room, participant: Participant) => void;
};

export const RoomConfig: React.FunctionComponent<Props> = ({
  room,
  isEditable,
  unassignedUsers,
  onSelect,
  onRemove,
  onAddParticipant,
  onRemoveParticipant,
}) => {
  return (
    <div key={room.id} className="room-container">
      <div className="room-controls">
        <h3 title={room.name}>{room.name}</h3>
        <IconButton
          label="Select frame"
          variant="ghost"
          disabled={!isEditable}
          onClick={() => onSelect(room)}
        >
          <IconFrame />
        </IconButton>

        <IconButton
          label="Remove frame"
          variant="ghost"
          disabled={!isEditable}
          onClick={() => onRemove(room)}
        >
          <IconTrash />
        </IconButton>
      </div>

      <div className="users">
        {room.participants.map((participant) => (
          <div className="user-avatar" key={participant.id}>
            {initials(participant.name)}
          </div>
        ))}
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <IconButton label="Assign participant" variant="outline">
              <IconUserAdd />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {room.participants.length ? (
              <React.Fragment>
                {room.participants.map((user) => (
                  <DropdownMenu.Item
                    key={user.id}
                    disabled={!isEditable}
                    onSelect={() => onRemoveParticipant(room, user)}
                  >
                    <DropdownMenu.IconSlot>
                      <IconUser />
                    </DropdownMenu.IconSlot>
                    {user.name}
                    <DropdownMenu.ItemDescription>
                      {user.state}
                    </DropdownMenu.ItemDescription>
                  </DropdownMenu.Item>
                ))}
                <DropdownMenu.Separator />
              </React.Fragment>
            ) : null}
            {isEditable && unassignedUsers.length ? (
              <React.Fragment>
                <div>
                  {unassignedUsers.map((user) => (
                    <DropdownMenu.Item
                      key={user.id}
                      disabled={!isEditable}
                      onSelect={() => onAddParticipant(room, user)}
                    >
                      <DropdownMenu.IconSlot>
                        <IconUser />
                      </DropdownMenu.IconSlot>
                      {user.name}
                    </DropdownMenu.Item>
                  ))}
                </div>
              </React.Fragment>
            ) : (
              <p>No unassigned users left</p>
            )}
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </div>
  );
};
