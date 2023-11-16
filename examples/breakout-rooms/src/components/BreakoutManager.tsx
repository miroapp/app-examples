"use client";

import * as React from "react";

import { Participant, Room } from "../types";
import {
  Frame,
  Json,
  OnlineUserInfo,
  SelectionUpdateEvent,
} from "@mirohq/websdk-types";
import { useBreakout, useOnlineUsers } from "../hooks";
import { isUser } from "../utils";
import { RoomConfig } from "./RoomConfig";
import { Timer } from "./Timer";

export const BreakoutManager: React.FC = () => {
  const { breakout, rooms, isFacilitator, ...service } = useBreakout();
  const onlineUsers = useOnlineUsers();
  const [selectedRoom, setSelectedRoom] = React.useState<Room>();
  const [time, setTime] = React.useState<number>();

  const participantIds = rooms
    .map((room) => room.participants.map((p) => p.id))
    .flat()
    .sort()
    .join("-");

  const unassignedUsers = React.useMemo(() => {
    return onlineUsers.filter((user) =>
      rooms.every((room) =>
        room.participants.every((participant) => participant.id !== user.id),
      ),
    );
  }, [onlineUsers, participantIds]);

  React.useEffect(() => {
    const handleSelectionUpdate = async (event: SelectionUpdateEvent) => {
      console.log("handleSelectionUpdate", { event, selectedRoom });
      if (!event.items.length || !selectedRoom) {
        return;
      }

      const frame = event.items.find((item) => item.type === "frame") as Frame;

      if (frame) {
        await service.setRoomTarget(selectedRoom, frame.id);
        await miro.board.notifications.showInfo(
          `Frame "${frame.title}" has been selected as starting point.`,
        );
        await miro.board.deselect({ id: frame.id });
        setSelectedRoom(undefined);
      } else {
        await miro.board.notifications.showError(
          "We only support frames as starting point for now",
        );
      }
    };

    const subscribe = () => {
      miro.board.ui.on("selection:update", handleSelectionUpdate);

      return () => {
        miro.board.ui.off("selection:update", handleSelectionUpdate);
      };
    };

    return subscribe();
  }, [selectedRoom]);

  React.useEffect(() => {
    const boostrap = () => {
      const handleNudge = async (currentUser?: Json) => {
        if (isUser(currentUser)) {
          await miro.board.notifications.showInfo(
            `The user "${currentUser?.name}" is waiting for the breakout to start.`,
          );
        }
      };

      miro.board.experimental.events.on("nudge-facilitator", handleNudge);

      return () => {
        miro.board.experimental.events.off("nudge-facilitator", handleNudge);
      };
    };

    return boostrap();
  }, []);

  const handleAddGroup = async () => {
    await service.addRoom();
  };

  const handleStartSelectTarget = async (selected: Room) => {
    await miro.board.deselect();
    setSelectedRoom(selected);

    await miro.board.notifications.showInfo(
      `Select the frame in the board for ${selected.name}`,
    );
  };

  const handleAddParticipant = async (
    selected: Room,
    participant: OnlineUserInfo,
  ) => {
    await service.addParticipant(selected, participant);
  };

  const handleRemoveParticipant = async (
    selected: Room,
    participant: Participant,
  ) => {
    await service.removeParticipant(selected, participant);
  };

  const handleRemoveRoom = async (selected: Room) => {
    await service.removeRoom(selected);
  };

  const handleStartSession = async () => {
    await service.startSession();
  };

  const handleReleaseFacilitator = async () => {
    await service.releaseSession();
  };

  const handleStopSession = async () => {
    await service.endSession();
  };

  const validations: string[] = [];
  if (!breakout?.rooms.length) {
    validations.push("Add rooms to your breakout");
  }

  const allRoomsWithParticipants = breakout?.rooms.every(
    (room) => room.participants.length > 0,
  );

  if (!allRoomsWithParticipants) {
    validations.push("Add participants to all of your rooms");
  }

  const allRoomsWithTargets = breakout?.rooms.every((room) =>
    Boolean(room.targetId),
  );

  if (!allRoomsWithTargets) {
    validations.push("Set a starting point to all of your rooms");
  }

  const canStartSession = validations.length < 1;
  const isEditabled = breakout?.state !== "started";

  return (
    <main>
      <Timer onSet={setTime} />

      <div className="container">
        <section className="rooms-container">
          {rooms.length < 1 ? <p>Please create rooms</p> : null}

          {rooms.map((room) => (
            <RoomConfig
              key={room.id}
              room={room}
              isEditable={isEditabled}
              isSelected={room.id === selectedRoom?.id}
              unassignedUsers={unassignedUsers}
              onAddParticipant={handleAddParticipant}
              onSelect={handleStartSelectTarget}
              onRemove={handleRemoveRoom}
              onRemoveParticipant={handleRemoveParticipant}
            />
          ))}
        </section>

        <button
          className="button button-medium button-primary button-add"
          type="button"
          title="Add room"
          onClick={handleAddGroup}
        >
          <span className="icon-plus"></span>
        </button>
      </div>

      {unassignedUsers.length ? (
        <section>
          <h5>Unassigned users</h5>
          <ul>
            {unassignedUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {isEditabled && validations.length > 0 ? (
        <div>
          <h5>Before starting the session:</h5>
          <ul>
            {validations.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <hr />

      <div className="toolbar">
        {breakout?.state === "started" ? (
          <button
            className="button button-danger"
            type="button"
            onClick={() => handleStopSession()}
          >
            Stop session
          </button>
        ) : (
          <React.Fragment>
            <button
              className="button button-primary"
              type="button"
              disabled={!canStartSession}
              onClick={() => handleStartSession()}
            >
              Start session
            </button>
            {isFacilitator && (
              <button
                className="button button-secondary"
                type="button"
                onClick={() => handleReleaseFacilitator()}
              >
                Release facilitator role
              </button>
            )}
          </React.Fragment>
        )}
      </div>
    </main>
  );
};
