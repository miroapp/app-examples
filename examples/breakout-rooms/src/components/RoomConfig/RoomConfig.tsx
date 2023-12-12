"use client";

import * as React from "react";
import {
  DropdownMenu,
  IconButton,
  IconFrame,
  IconTrash,
  IconUserAdd,
} from "@mirohq/design-system";
import { Frame, OnlineUserInfo } from "@mirohq/websdk-types";

import type { Participant, Room } from "../../types";
import { Avatar } from "../Avatar";

import "./RoomConfig.css";

export type Props = {
  room: Room;
  isEditable: boolean;
  isSelected: boolean;
  unassignedUsers: OnlineUserInfo[];
  onSelectTarget: (room: Room) => void;
  onRemove: (room: Room) => void;
  onAddParticipant: (room: Room, user: OnlineUserInfo) => void;
  onRemoveParticipant: (room: Room, participant: Participant) => void;
};

export const RoomConfig: React.FunctionComponent<Props> = ({
  room,
  isEditable,
  unassignedUsers,
  onSelectTarget,
  onRemove,
  onAddParticipant,
  onRemoveParticipant,
}) => {
  const [title, setName] = React.useState("");
  React.useEffect(() => {
    async function FetchFrame(): Promise<void> {
      if (!room.targetId) {
        return;
      }
      const frame = await miro.board.getById(room.targetId) as Frame;
      setName(frame?.title);
    }
    FetchFrame();
  }, [room.targetId]);
  return (
    <div key={room.id} className="room">
      <div className="room-controls">
        <h3 className="room-controls-title" title={room.name}>
          {room.name}
        </h3>
        <IconButton
          label={room.targetId ? `Room is set to ${title}` : "Set frame to room"}
          variant={room.targetId ? "outline" : "ghost"}
          disabled={!isEditable}
          onClick={() => onSelectTarget(room)}
        >
          <IconFrame />
        </IconButton>

        <IconButton
          label="Remove room"
          variant="ghost"
          disabled={!isEditable}
          onClick={() => onRemove(room)}
        >
          <IconTrash />
        </IconButton>
      </div>

      <div className="users">
        {room.participants.length ? (
          <div className="avatars">
            {room.participants.map((participant) => (
              <Avatar key={participant.id} user={participant} />
            ))}
          </div>
        ) : null}

        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <IconButton
              label="Add user"
              variant="outline"
              css={{ borderRadius: "100%" }}
            >
              <IconUserAdd />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {unassignedUsers.length < 1 && room.participants.length < 1 && (
              <DropdownMenu.Item disabled>
                No more users left to assign
              </DropdownMenu.Item>
            )}
            {unassignedUsers.length ? (
              <div className="list">
                <DropdownMenu.Item disabled>
                  Users not in rooms
                </DropdownMenu.Item>
                {unassignedUsers.map((user) => (
                  <DropdownMenu.Item
                    key={user.id}
                    disabled={!isEditable}
                    onSelect={() => onAddParticipant(room, user)}
                  >
                    <div className="item">
                      <Avatar user={user} />
                      {user.name}
                    </div>
                  </DropdownMenu.Item>
                ))}
              </div>
            ) : null}

            {room.participants.length ? (
              <div className="list">
                {unassignedUsers.length ? <DropdownMenu.Separator /> : null}
                {room.participants.map((user) => (
                  <DropdownMenu.Item
                    key={user.id}
                    disabled={!isEditable}
                    onSelect={() => onRemoveParticipant(room, user)}
                  >
                    <div className="item">
                      <Avatar user={user} />
                      {user.name}
                    </div>
                    <DropdownMenu.ItemDescription>
                      {user.state}
                    </DropdownMenu.ItemDescription>
                  </DropdownMenu.Item>
                ))}
              </div>
            ) : null}
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </div>
  );
};
