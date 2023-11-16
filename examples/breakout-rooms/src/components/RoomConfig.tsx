"use client";

import * as React from "react";
import classnames from "classnames";
import { DropdownMenu, IconUser } from "@mirohq/design-system";

import type { Participant, Room } from "../types";
import { OnlineUserInfo } from "@mirohq/websdk-types";

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
  isSelected,
  unassignedUsers,
  onSelect,
  onRemove,
  onAddParticipant,
  onRemoveParticipant,
}) => {
  return (
    <div key={room.id} className="room-container">
      <h3 title={room.name}>{room.name}</h3>
      <button
        className={classnames("button button-medium button-tertiary", {
          "button-selected": isSelected,
          "button-active": room.targetId,
        })}
        type="button"
        title="Link target"
        disabled={!isEditable}
        onClick={() => onSelect(room)}
      >
        <span className="icon-link"></span>
      </button>

      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <button
            className="button button-medium button-tertiary"
            type="button"
            title="Add participant"
          >
            <span className="icon-shared-with"></span>
            Add ({room.participants.length})
          </button>
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

      <button
        className="button button-small button-danger"
        type="button"
        title="Remove room"
        disabled={!isEditable}
        onClick={() => onRemove(room)}
      >
        <span className="icon-close"></span>
      </button>
    </div>
  );
};
