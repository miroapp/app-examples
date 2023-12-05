import * as React from "react";
import { OnlineUserInfo } from "@mirohq/websdk-types";
import { convertTime } from "../../utils";
import { RoomConfig, Props as RoomConfigProps } from "../RoomConfig";
import {
  DropdownMenu,
  IconButton,
  IconDotsThreeVertical,
  IconHandFilled,
  IconPlus,
} from "@mirohq/design-system";

import { Timer } from "../Timer";
import { Room } from "../../types";

import "./RoomsManager.css";

export type Props = {
  rooms: Room[];
  selectedRoom?: Room;
  isEditable: boolean;
  isFacilitator: boolean;
  canUseTimer: boolean;
  unassignedUsers: OnlineUserInfo[];
  onAddParticipant: RoomConfigProps["onAddParticipant"];
  onSelectTarget: RoomConfigProps["onSelectTarget"];
  onRemove: RoomConfigProps["onRemove"];
  onRemoveParticipant: RoomConfigProps["onRemoveParticipant"];
  onAddGroup: () => void;
  onReleaseFacilitator: () => void;
  onSetTime: (time: number) => void;
};

export const RoomsManager: React.FC<Props> = ({
  rooms,
  isEditable,
  isFacilitator,
  canUseTimer,
  selectedRoom,
  unassignedUsers,
  onAddParticipant,
  onSelectTarget,
  onRemove,
  onRemoveParticipant,
  onAddGroup,
  onSetTime,
  onReleaseFacilitator,
}) => {
  return (
    <div className="container">
      <section className="rooms-container">
        {rooms.map((room) => (
          <RoomConfig
            key={room.id}
            room={room}
            isEditable={isEditable}
            isSelected={room.id === selectedRoom?.id}
            unassignedUsers={unassignedUsers}
            onAddParticipant={onAddParticipant}
            onSelectTarget={onSelectTarget}
            onRemove={onRemove}
            onRemoveParticipant={onRemoveParticipant}
          />
        ))}
      </section>
      <div className="breakout-controls">
        <IconButton
          label="Add a room"
          variant="solid-prominent"
          css={{ borderRadius: "100%" }}
          onClick={onAddGroup}
        >
          <IconPlus />
        </IconButton>

        {canUseTimer && (
          <Timer
            onSet={onSetTime}
            step={convertTime(1, "milliseconds", "minutes")}
          />
        )}

        {isFacilitator && (
          <div className="facilitator-controls">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton
                  label="Facilitator controls"
                  variant="outline"
                  css={{ borderRadius: "100%" }}
                >
                  <IconDotsThreeVertical />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => onReleaseFacilitator()}>
                  <DropdownMenu.IconSlot>
                    <IconHandFilled />
                  </DropdownMenu.IconSlot>
                  Release facilitator role
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};
