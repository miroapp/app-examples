"use client";

import * as React from "react";
import { DropdownMenu, IconUser } from "@mirohq/design-system";

import { Room } from "./types";
import {
  Frame,
  OnlineUserInfo,
  SelectionUpdateEvent,
} from "@mirohq/websdk-types";
import { useBreakout, useOnlineUsers } from "./hooks";

export const BreakoutManager: React.FC = () => {
  const { session, rooms, ...service } = useBreakout();
  const onlineUsers = useOnlineUsers();
  const [selectedRoom, setSelectedRoom] = React.useState<Room>();

  const getSelectedRoom = () => selectedRoom;

  const unassignedUsers = React.useMemo(() => {
    return onlineUsers.filter((user) =>
      rooms.every((room) =>
        room.participants.every((participant) => participant.id !== user.id),
      ),
    );
  }, [onlineUsers, rooms]);

  React.useEffect(() => {
    const boostrap = () => {
      miro.board.ui.on("selection:update", handleSelectionUpdate);

      return () => {
        miro.board.ui.off("selection:update", handleSelectionUpdate);
      };
    };

    return boostrap();
  }, []);

  const handleSelectionUpdate = async (event: SelectionUpdateEvent) => {
    const selectedRoom = getSelectedRoom();
    console.log({ event, selectedRoom });
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

  const handleAddGroup = async () => {
    await service.addRoom();
  };

  const handleSelectTarget = async (selected: Room) => {
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
    participant: OnlineUserInfo,
  ) => {
    await service.removeParticipant(selected, participant);
  };

  const handleRemoveRoom = async (selected: Room) => {
    await service.removeRoom(selected);
  };

  console.log({ selectedRoom });

  return (
    <main>
      <button className="button button-secondary button-medium" type="button">
        <span className="icon-eye"></span>
        Set timer
      </button>

      <section>
        {rooms.map((room) => (
          <div key={room.id}>
            <h2>{room.name}</h2>
            <button
              className={`button button-medium button-tertiary ${
                room.id === selectedRoom?.id ? "button-selected" : ""
              } ${room.targetId ? "button-active" : ""}`}
              type="button"
              title="Link target"
              onClick={() => handleSelectTarget(room)}
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
                        onSelect={() => handleRemoveParticipant(room, user)}
                      >
                        <DropdownMenu.IconSlot>
                          <IconUser />
                        </DropdownMenu.IconSlot>
                        {user.name}
                        <DropdownMenu.ItemDescription>
                          Assigned
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
              className="button button-medium button-danger"
              type="button"
              title="Remove room"
              onClick={() => handleRemoveRoom(room)}
            >
              <span className="icon-close"></span>
            </button>
          </div>
        ))}
      </section>

      <button
        className="button button-medium button-primary"
        type="button"
        title="Add room"
        onClick={handleAddGroup}
      >
        <span className="icon-plus"></span>
      </button>

      <hr />

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

      <button
        className="button button-primary"
        type="button"
        disabled={!session?.rooms.length}
      >
        Start session
      </button>
    </main>
  );
};
