"use client";

import * as React from "react";
import { DropdownMenu, IconUser } from "@mirohq/design-system";

import { Participant, Room } from "./types";
import {
  Frame,
  Json,
  OnlineUserInfo,
  SelectionUpdateEvent,
} from "@mirohq/websdk-types";
import { useBreakout, useOnlineUsers } from "./hooks";
import { isUser } from "./utils";

export const BreakoutManager: React.FC = () => {
  const { breakout, rooms, ...service } = useBreakout();
  const onlineUsers = useOnlineUsers();
  const [selectedRoom, setSelectedRoom] = React.useState<Room>();

  const unassignedUsers = React.useMemo(() => {
    return onlineUsers.filter((user) =>
      rooms.every((room) =>
        room.participants.every((participant) => participant.id !== user.id),
      ),
    );
  }, [onlineUsers, rooms]);

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

  return (
    <main>
      <pre>{JSON.stringify(breakout, null, 2)}</pre>
      <button className="button button-secondary button-medium" type="button">
        <span className="icon-eye"></span>
        Set timer
      </button>

      <div className="container">
        <section className="rooms-container">
          {rooms.length < 1 ? <p>Please create rooms</p> : null}

          {rooms.map((room) => (
            <div key={room.id} className="room-container">
              <h3 title={room.name}>{room.name}</h3>
              <button
                className={`button button-medium button-tertiary ${
                  room.id === selectedRoom?.id ? "button-selected" : ""
                } ${room.targetId ? "button-active" : ""}`}
                type="button"
                title="Link target"
                disabled={breakout?.state === "started"}
                onClick={() => handleStartSelectTarget(room)}
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
                          disabled={breakout?.state === "started"}
                          onSelect={() => handleRemoveParticipant(room, user)}
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
                  {unassignedUsers.length ? (
                    <React.Fragment>
                      <div>
                        {unassignedUsers.map((user) => (
                          <DropdownMenu.Item
                            key={user.id}
                            disabled={breakout?.state === "started"}
                            onSelect={() => handleAddParticipant(room, user)}
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
                disabled={breakout?.state === "started"}
                onClick={() => handleRemoveRoom(room)}
              >
                <span className="icon-close"></span>
              </button>
            </div>
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
          <h4>Unassigned users</h4>
          <ul>
            {unassignedUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {validations.length > 0 ? (
        <div>
          <h4>Before starting the session:</h4>
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
          <button
            className="button button-primary"
            type="button"
            disabled={!canStartSession}
            onClick={() => handleStartSession()}
          >
            Start session
          </button>
        )}
      </div>
    </main>
  );
};
