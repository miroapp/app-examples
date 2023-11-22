"use client";

import * as React from "react";

import { Participant, Room } from "../types";
import { Frame, Json, OnlineUserInfo } from "@mirohq/websdk-types";
import {
  useBreakout,
  useOnlineUsers,
  useSelectedItems,
  useTimer,
} from "../hooks";
import { convertTime, formatDisplayTime, isUser } from "../utils";
import { RoomConfig } from "./RoomConfig";
import { DEFAULT_TIME, Timer } from "./Timer";

export const BreakoutManager: React.FC = () => {
  const { breakout, rooms, isFacilitator, ...service } = useBreakout();
  const onlineUsers = useOnlineUsers();
  const selectedItems = useSelectedItems<Frame>({
    predicate: (item) => item.type === "frame",
  });
  const [selectedRoom, setSelectedRoom] = React.useState<Room>();
  const [duration, setTimerDuration] = React.useState<number>();
  const [currentTime, setCurrentTime] = React.useState<number>(0);

  const onTimerStop = React.useCallback(() => {
    service.endSession();
  }, [breakout?.id]);

  const timer = useTimer({
    duration: duration ?? DEFAULT_TIME,
    onStop: onTimerStop,
    onTick: (timestamp) => setCurrentTime(timestamp),
  });

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
    const handleSelectionUpdate = async () => {
      if (!selectedItems.length || !selectedRoom) {
        return;
      }

      const [frame] = selectedItems;

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

    handleSelectionUpdate();
  }, [selectedRoom, selectedItems]);

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
    if (duration && timer.state !== "started") {
      await timer.start();
    }
  };

  const handleReleaseFacilitator = async () => {
    await service.releaseSession();
  };

  const handleStopSession = async () => {
    await service.endSession();
    if (timer.state === "started") {
      await timer.stop();
    }
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
      <Timer
        onSet={setTimerDuration}
        step={convertTime(1, "milliseconds", "minutes")}
      />

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

        {breakout?.state !== "started" ? (
          <button
            className="button button-medium button-primary button-add"
            type="button"
            title="Add room"
            onClick={handleAddGroup}
          >
            <span className="icon-plus"></span>
          </button>
        ) : null}
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
            Stop session{" "}
            {timer.state === "started"
              ? `(${formatDisplayTime(currentTime)})`
              : null}
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
