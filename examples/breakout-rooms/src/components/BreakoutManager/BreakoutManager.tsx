"use client";

import * as React from "react";

import { Participant, Room } from "../../types";
import { Frame, Json, OnlineUserInfo } from "@mirohq/websdk-types";
import {
  useBreakout,
  useOnlineUsers,
  useSelectedItems,
  useTimer,
} from "../../hooks";
import { convertTime, formatDisplayTime, isUser } from "../../utils";
import { RoomConfig } from "../RoomConfig/RoomConfig";
import { DEFAULT_TIME, Timer } from "../Timer/Timer";
import {
  DropdownMenu,
  IconButton,
  IconPlus,
  IconHandFilled,
  IconDotsThreeVertical,
  Button,
} from "@mirohq/design-system";

import "./BreakoutManager.css";
import { BreakoutStarter } from "../BreakoutStarter";
import { WaitingList } from "../WaitingList";

export const BreakoutManager: React.FC = () => {
  const { breakout, rooms, isFacilitator, ...service } = useBreakout();
  const onlineUsers = useOnlineUsers();
  const selectedItems = useSelectedItems<Frame>({
    predicate: (item) => item.type === "frame",
  });
  const [selectedRoom, setSelectedRoom] = React.useState<Room>();
  const [duration, setTimerDuration] = React.useState<number>();
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [canUseTimer] = React.useState<boolean>(false);

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

  const validations: string[] = [];
  if (!breakout?.rooms.length) {
    validations.push("Add rooms to your session");
  }

  const allRoomsWithParticipants = breakout?.rooms.every(
    (room) => room.participants.length > 0,
  );

  if (!allRoomsWithParticipants) {
    validations.push("Add users to each room");
  }

  const allRoomsWithTargets = breakout?.rooms.every((room) =>
    Boolean(room.targetId),
  );

  if (!allRoomsWithTargets) {
    validations.push("Set a frame to each room");
  }

  const canStartSession = validations.length < 1;
  const isEditabled = breakout?.state !== "started";

  return (
    <main className="manager-container">
      {breakout?.state !== "started" && rooms.length < 1 ? (
        <BreakoutStarter onAddGroup={handleAddGroup} />
      ) : (
        <div className="container">
          <section className="rooms-container">
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
            <div className="breakout-controls">
              <IconButton
                label="Add a room"
                variant="solid-prominent"
                css={{ borderRadius: "100%" }}
                onClick={handleAddGroup}
              >
                <IconPlus />
              </IconButton>

              {canUseTimer && (
                <Timer
                  onSet={setTimerDuration}
                  step={convertTime(1, "milliseconds", "minutes")}
                />
              )}

              {isFacilitator && (
                <DropdownMenu>
                  <DropdownMenu.Trigger asChild>
                    <IconDotsThreeVertical />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <>
                      <DropdownMenu.Item
                        onClick={() => handleReleaseFacilitator()}
                      >
                        <DropdownMenu.IconSlot>
                          <IconHandFilled />
                        </DropdownMenu.IconSlot>
                        Release facilitator role
                      </DropdownMenu.Item>
                    </>
                  </DropdownMenu.Content>
                </DropdownMenu>
              )}
            </div>
          </section>
        </div>
      )}

      {rooms.length && unassignedUsers.length ? (
        <WaitingList
          unassignedUsers={unassignedUsers}
          onSplitUsers={handleSplitUsers}
          disabled={!isEditabled}
        />
      ) : null}

      {isEditabled && validations.length > 0 ? (
        <div className="validation-messages">
          <h5>Before starting the session:</h5>
          <ul>
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
                ? `(${formatDisplayTime(currentTime)})`
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
