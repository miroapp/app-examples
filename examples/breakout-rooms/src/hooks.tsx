import { OnlineUserInfo, UserInfo } from "@mirohq/websdk-types";
import * as React from "react";
import { generateUniqueId } from "./utils";
import { Participant, Room, Breakout } from "./types";

const COLLECTION_NAME = "breakout-rooms";

export const useCurrentUser = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>();

  React.useEffect(() => {
    const fetch = async () => {
      const info = await miro.board.getUserInfo();
      setUserInfo(info);
    };

    fetch();
  }, []);

  return userInfo;
};

export const useOnlineUsers = () => {
  const [onlineUsers, setOnlineUsers] = React.useState<OnlineUserInfo[]>([]);

  React.useEffect(() => {
    const fetch = async () => {
      const users = await miro.board.getOnlineUsers();
      setOnlineUsers(users);
    };

    miro.board.ui.on("online_users:update", fetch);

    fetch();

    return () => {
      miro.board.ui.off("online_users:update", fetch);
    };
  }, []);

  return onlineUsers;
};

const log = (id: string, ...args: unknown[]) =>
  console.log(id, JSON.stringify(args, null, 2));

export const useBreakout = () => {
  const [breakout, setBreakout] = React.useState<Breakout>();
  const currentUser = useCurrentUser();

  React.useEffect(() => {
    if (!currentUser) {
      return;
    }

    const init = () => {
      const breakoutRooms = miro.board.storage.collection(COLLECTION_NAME);

      const activeValue = (activeBreakout: Breakout) => {
        log("onValue", { activeBreakout });
        setBreakout(activeBreakout?.id ? activeBreakout : undefined);
      };

      log("subscribing to onValue", { breakoutRooms });
      breakoutRooms.get<Breakout>("active").then(activeValue);
      breakoutRooms.onValue<Breakout>("active", activeValue);

      return () => {
        breakoutRooms.offValue<Breakout>("active", activeValue);
      };
    };

    return init();
  }, [breakout?.id, currentUser?.id]);

  const saveBreakout = async (
    breakout?: Breakout,
    opts: Partial<Exclude<Breakout, "id" | "creator">> = {},
  ) => {
    if (!currentUser) {
      throw new Error("Could not fetch current Miro user");
    }

    const breakoutRooms = await miro.board.storage.collection(COLLECTION_NAME);

    log("saveBreakout", { breakout, opts });

    if (breakout?.id) {
      Object.assign(breakout, {
        sessionId: opts.sessionId ?? breakout.sessionId ?? "",
        state: opts.state ?? breakout.state ?? "idle",
        rooms: opts.rooms ?? breakout.rooms ?? [],
      });
      breakoutRooms.set("active", breakout);
      log("saveBreakout.update", { breakout, opts });

      return breakout;
    } else {
      const newBreakout = {
        id: generateUniqueId(),
        creator: currentUser,
        rooms: opts.rooms ?? [],
        state: opts.state ?? "idle",
      };

      log("saveBreakout.new", { newBreakout, opts });
      breakoutRooms.set("active", newBreakout);

      return newBreakout;
    }
  };

  const addParticipant = async (room: Room, user: OnlineUserInfo) => {
    const sessionRooms = breakout?.rooms ?? [];

    const rooms = sessionRooms.map((r) => {
      if (r.id === room.id) {
        const participant = {
          ...user,
          state: "Waiting room",
        };
        const participants = [...r.participants, participant].sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        return {
          ...r,
          participants,
        };
      }

      return r;
    });

    log("addParticipant", { rooms, room, user });

    await saveBreakout(breakout, { rooms });
  };

  const removeParticipant = async (room: Room, participant: Participant) => {
    const sessionRooms = breakout?.rooms ?? [];

    const rooms = sessionRooms.map((r) => {
      if (r.id === room.id) {
        return {
          ...r,
          participants: r.participants.filter((p) => p.id !== participant.id),
        };
      }

      return r;
    });

    log("removeParticipant", { rooms, room, participant });

    await saveBreakout(breakout, { rooms });
  };

  const removeRoom = async (room: Room) => {
    const sessionRooms = breakout?.rooms ?? [];

    const rooms = sessionRooms.filter((r) => r.id !== room.id);

    log("removeRoom", { rooms, room });
    await saveBreakout(breakout, { rooms });
  };

  const addRoom = async (opts?: Partial<Room>) => {
    const sessionRooms = breakout?.rooms ?? [];

    const room: Room = {
      id: generateUniqueId(),
      name: `Room ${sessionRooms.length + 1}`,
      participants: [],
      ...opts,
    };

    log("addRoom", { room });

    await saveBreakout(breakout, { rooms: [...sessionRooms, room] });
  };

  const setRoomTarget = async (room: Room, targetId: string) => {
    const sessionRooms = breakout?.rooms ?? [];

    const rooms = sessionRooms.map((r) => ({
      ...r,
      targetId: r.id === room.id ? targetId : r.targetId ?? "",
    }));

    log("setRoomTarget", { room, rooms, targetId });

    await saveBreakout(breakout, { rooms });
  };

  const updateParticipant = async (
    room: Room,
    participant: Participant,
    data: Partial<Participant>,
  ) => {
    const sessionRooms = breakout?.rooms ?? [];

    const rooms = sessionRooms.map((r) => {
      if (r.id === room.id) {
        return {
          ...r,
          participants: r.participants.map((p) => {
            if (p.id === participant.id) {
              return {
                ...p,
                ...data,
              };
            }

            return p;
          }),
        };
      }

      return r;
    });

    log("updateParticipant", { rooms, room, participant, data });

    await saveBreakout(breakout, { rooms });
  };

  const handleUserJoined = async ({ userId }: { userId: string }) => {
    log("handleUserJoined", { userId, breakout });
    if (!breakout) {
      return;
    }

    let participant: Participant | undefined;
    let room: Room | undefined;

    breakout.rooms.some((r) =>
      r.participants.some((p) => {
        if (p.id === userId) {
          participant = p;
          room = r;
          return true;
        }

        return false;
      }),
    );

    log("handleUserJoined.participant", { room, participant });

    if (!room || !participant) {
      await miro.board.notifications.showError(
        `User ${userId} has joined a session but no room was assigned`,
      );
      return;
    }

    if (!room.targetId) {
      await miro.board.notifications.showError(
        `Room ${room.name} has no target assigned`,
      );
      return;
    }

    await updateParticipant(room, participant, { state: "In Session" });

    const frame = await miro.board.get({ type: "frame", id: room.targetId });
    if (!frame) {
      await miro.board.notifications.showError(
        `Could not find target with ID: "${room.targetId}"`,
      );
      return;
    }

    if (participant.id === currentUser?.id) {
      await miro.board.viewport.zoomTo(frame);
    } else {
      await miro.board.collaboration.zoomTo(participant, frame);
    }
  };

  const handleUserLeft = async ({ userId }: { userId: string }) => {
    log("handleUserLeft", { userId, breakout });
    if (!breakout) {
      return;
    }

    let participant: Participant | undefined;
    let room: Room | undefined;

    breakout.rooms.some((r) =>
      r.participants.some((p) => {
        if (p.id === userId) {
          participant = p;
          room = r;
          return true;
        }

        return false;
      }),
    );

    log("handleUserLeft.participant", { room, participant });

    if (!room || !participant) {
      return;
    }

    await removeParticipant(room, participant);
  };

  const upsertSession = async (breakout: Breakout) => {
    let session: Session;
    if (breakout.sessionId) {
      const sessions = await miro.board.collaboration.getSessions();
      session = sessions.find((s) => s.id === breakout.sessionId);
    }

    if (!session) {
      session = await miro.board.collaboration.startSession({
        name: `Breakout room - by ${breakout.creator.name}`,
      });

      await saveBreakout(breakout, {
        sessionId: session.id,
      });
    }

    log("upsertSession", { session, breakout });

    return session;
  };

  const startSession = async () => {
    if (!breakout) {
      throw new Error("Invalid breakout session");
    }

    log("startSession", breakout);
    await saveBreakout(breakout, { state: "started" });

    const session = await upsertSession(breakout);

    const allParticipants = breakout.rooms
      .map((room) => room.participants)
      .flat();

    await session.invite(allParticipants);

    await Promise.all(
      breakout.rooms.map((room) =>
        room.participants.map((participant) =>
          updateParticipant(room, participant, { state: "Invitation Pending" }),
        ),
      ),
    );

    session.on("user-joined", handleUserJoined);
    session.on("user-left", handleUserLeft);
  };

  const endSession = async () => {
    if (!breakout) {
      throw new Error("Invalid breakout session");
    }

    const session = await upsertSession(breakout);
    if (!session) {
      throw new Error(`Breakout ${breakout} doesn't have a Miro session`);
    }

    await session.end();
    await saveBreakout(breakout, { state: "ended" });

    await Promise.all(
      breakout.rooms.map((room) =>
        room.participants.map((participant) =>
          updateParticipant(room, participant, { state: "Waiting room" }),
        ),
      ),
    );

    await releaseSession();
  };

  const releaseSession = async () => {
    const breakoutRooms = await miro.board.storage.collection(COLLECTION_NAME);
    const pastBreakoutRooms = (await breakoutRooms.get("past")) ?? [];
    const historyEntries = [...pastBreakoutRooms, breakout];

    log("releaseSession", { breakoutRooms, pastBreakoutRooms, breakout });

    breakoutRooms.set("past", historyEntries);
    // Collection.remove does not trigger onValue
    // breakoutRooms.set("active", {});
    breakoutRooms.remove("active");
    setBreakout(undefined);
  };

  log("Data", { breakout });

  const isFacilitator =
    Boolean(breakout) && breakout?.creator.id === currentUser?.id;
  const rooms = breakout?.rooms ?? [];

  return {
    breakout,
    isFacilitator,
    rooms,
    saveBreakout,
    addRoom,
    addParticipant,
    removeParticipant,
    removeRoom,
    setRoomTarget,
    startSession,
    endSession,
    releaseSession,
  };
};
