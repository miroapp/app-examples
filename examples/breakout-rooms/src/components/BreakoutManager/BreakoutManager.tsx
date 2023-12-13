"use client";

import * as React from "react";

import { Participant, Room } from "../../types";
import { Frame, Json, OnlineUserInfo } from "@mirohq/websdk-types";
import { useSelectedItems, useOnlineUsers } from "@mirohq/websdk-react-hooks";
import { useBreakout, useFeatureCheck, useTimer } from "../../hooks";
import { formatDisplayTime, isUser } from "../../utils";
import { DEFAULT_TIME } from "../Timer/Timer";
import { Button } from "@mirohq/design-system";

import { BreakoutStarter } from "../BreakoutStarter";
import { WaitingList } from "../WaitingList";
import { RoomsManager } from "../RoomsManager";

import "./BreakoutManager.css";

export const BreakoutManager: React.FC = () => {
  const { breakout, rooms, isFacilitator, ...service } = useBreakout();
  const onlineUsers = useOnlineUsers();
  const selectedItems = useSelectedItems<Frame>({
    predicate: (item) => item.type === "frame",
  });
  const [selectedRoom, setSelectedRoom] = React.useState<Room>();
  const [duration, setTimerDuration] = React.useState<number>();
  const canUseTimer = useFeatureCheck("timer");

  const onTimerStop = React.useCallback(() => {
    service.endSession();
  }, [breakout?.id]);

  const timer = useTimer({
    duration: duration ?? DEFAULT_TIME,
    onStop: onTimerStop,
  });

  const participantIds = rooms
    .map((room) => room.participants.map((p) => p.id))
    .flat()
    .sort()
    .join("-");

  const unassignedUsers = React.useMemo(() => {
    if (onlineUsers.status !== "success") {
      return [];
    }

    return onlineUsers.result.filter((user) =>
      rooms.every((room) =>
        room.participants.every((participant) => participant.id !== user.id),
      ),
    );
  }, [onlineUsers, participantIds]);

  React.useEffect(() => {
    const handleSelectionUpdate = async () => {
      if (
        selectedItems.status !== "success" ||
        !selectedItems.result.length ||
        !selectedRoom
      ) {
        return;
      }

      const [frame] = selectedItems.result;

      if (frame) {
        await service.setRoomTarget(selectedRoom, frame.id);
        await miro.board.notifications.showInfo(
          `${frame.title} has been set as starting point for the room.`,
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
            `<strong>${currentUser?.name}</strong> is waiting to start the session`,
          );
        }
      };

      miro.board.events.on("nudge-facilitator", handleNudge);

      return () => {
        miro.board.events.off("nudge-facilitator", handleNudge);
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
      `Set a frame to the room by clicking on the frame title`,
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

  const handleSplitUsers = async () => {
    const count = rooms.length;

    // This needs to be only new users
    const users = unassignedUsers;
    const roomSize = Math.max(Math.floor(users.length / count), 1);

    const usersInRooms: OnlineUserInfo[][] = [];

    for (let i = 0; i < users.length; i += roomSize) {
      usersInRooms.push(users.slice(i, i + roomSize));
    }

    for (let i = 0; i < count; ++i) {
      const room = rooms[i];
      const participants = usersInRooms[i];
      for (const participant of participants) {
        await service.addParticipant(room, participant);
      }
    }
  };

  const handleRemoveRoom = async (selected: Room) => {
    await service.removeRoom(selected);
  };

  const safeTimerHandler = (cb: () => void) => {
    if (canUseTimer) {
      cb();
    }
  };

  const handleStartSession = async () => {
    await service.startSession();
    safeTimerHandler(async () => {
      if (duration && timer.state !== "started") {
        await timer.start();
      }
    });
  };

  const handleReleaseFacilitator = async () => {
    await service.releaseSession();
  };

  const handleStopSession = async () => {
    await service.endSession();
    safeTimerHandler(async () => {
      if (timer.state === "started") {
        await timer.stop();
      }
    });
  };

  const valRooms = "Add rooms to your session";
  const valUsers: string = "Add users to each room";
  const valFrames = "Set a frame to each room";

  const validations: string[] = [];
  if (!breakout?.rooms.length) {
    validations.push(valRooms);
    validations.push(valUsers);
    validations.push(valFrames);
  }

  const allRoomsWithParticipants = breakout?.rooms.every(
    (room) => room.participants.length > 0,
  );

  if (!allRoomsWithParticipants && !validations.includes(valUsers)) {
    validations.push(valUsers);
  }

  const allRoomsWithTargets = breakout?.rooms.every((room) =>
    Boolean(room.targetId),
  );

  if (!allRoomsWithTargets && !validations.includes(valFrames)) {
    validations.push(valFrames);
  }

  const canStartSession = validations.length < 1;
  const isEditable = breakout?.state !== "started";

  return (
    <main className="manager-container">
      {breakout?.state !== "started" && rooms.length < 1 ? (
        <BreakoutStarter onAddGroup={handleAddGroup} />
      ) : (
        <RoomsManager
          rooms={rooms}
          isEditable={isEditable}
          isFacilitator={isFacilitator}
          canUseTimer={canUseTimer}
          selectedRoom={selectedRoom}
          unassignedUsers={unassignedUsers}
          onAddParticipant={handleAddParticipant}
          onSelectTarget={handleStartSelectTarget}
          onRemove={handleRemoveRoom}
          onRemoveParticipant={handleRemoveParticipant}
          onAddGroup={handleAddGroup}
          onReleaseFacilitator={handleReleaseFacilitator}
          onSetTime={setTimerDuration}
        />
      )}

      {rooms.length && unassignedUsers.length ? (
        <WaitingList
          unassignedUsers={unassignedUsers}
          onSplitUsers={handleSplitUsers}
          disabled={!isEditable}
        />
      ) : null}

      {isEditable && validations.length > 0 ? (
        <div className="validation-messages">
          <h5 className="validation-messages-title">
            Before starting the session:
          </h5>
          <ul className="validation-messages-items">
            {validations.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="toolbar">
          {breakout?.state === "started" ? (
            <Button
              onClick={() => handleStopSession()}
              variant="solid-danger"
              size="x-large"
            >
              Stop session
              {canUseTimer && timer.state === "started"
                ? ` (${formatDisplayTime(timer.restDuration)})`
                : null}
            </Button>
          ) : (
            <React.Fragment>
              <Button
                disabled={!canStartSession}
                onClick={() => handleStartSession()}
                variant="solid-prominent"
                size="x-large"
              >
                Start session
              </Button>
            </React.Fragment>
          )}
        </div>
      )}
    </main>
  );
};
