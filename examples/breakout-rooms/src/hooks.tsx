import { OnlineUserInfo, UserInfo } from "@mirohq/websdk-types";
import * as React from "react";
import { generateUniqueId } from "./utils";
import { BreakoutState, Room, Session } from "./types";

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

export const useBreakout = () => {
  const [session, setSession] = React.useState<Session>();
  const [state, setState] = React.useState<BreakoutState>("idle");
  const currentUser = useCurrentUser();

  React.useEffect(() => {
    if (session || !currentUser) {
      return;
    }

    const init = () => {
      setState("loading");
      const breakoutRooms = miro.board.storage.collection(COLLECTION_NAME);

      breakoutRooms.get<Session>("active").then((activeSession: Session) => {
        setState("idle");
        setSession(activeSession);
      });

      const activeValue = (activeSession: Session) => {
        console.log("onValue", { activeSession });
        setSession(activeSession);
      };
      breakoutRooms.onValue<Session>("active", activeValue);

      return () => {
        breakoutRooms.offValue<Session>("active", activeValue);
      };
    };

    return init();
  }, [session, currentUser]);

  const saveSession = async (opts: Pick<Session, "rooms">) => {
    if (!currentUser) {
      throw new Error("Could not fetch current Miro user");
    }

    const breakoutRooms = await miro.board.storage.collection(COLLECTION_NAME);

    if (session) {
      const payload = {
        ...session,
        rooms: opts.rooms,
      };
      breakoutRooms.set("active", payload);

      console.log("saveSession.update", { payload, opts });
    } else {
      const newSession: Session = {
        id: generateUniqueId(),
        creator: currentUser,
        rooms: opts.rooms,
      };

      breakoutRooms.set("active", newSession);
      console.log("saveSession.new", { newSession, opts });
    }
  };

  const addParticipant = async (room: Room, participant: OnlineUserInfo) => {
    const sessionRooms = session?.rooms ?? [];

    const rooms = sessionRooms.map((r) => {
      if (r.id === room.id) {
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

    console.log("addParticipant", { rooms, room, participant });

    await saveSession({ rooms });
  };

  const removeParticipant = async (room: Room, participant: OnlineUserInfo) => {
    const sessionRooms = session?.rooms ?? [];

    const rooms = sessionRooms.map((r) => {
      if (r.id === room.id) {
        return {
          ...r,
          participants: r.participants.filter((p) => p.id !== participant.id),
        };
      }

      return r;
    });

    console.log("removeParticipant", { rooms, room, participant });

    await saveSession({ rooms });
  };

  const removeRoom = async (room: Room) => {
    const sessionRooms = session?.rooms ?? [];

    const rooms = sessionRooms.filter((r) => r.id !== room.id);

    console.log("removeRoom", { rooms, room });
    await saveSession({ rooms });
  };

  const addRoom = async (opts?: Partial<Room>) => {
    const sessionRooms = session?.rooms ?? [];

    const room: Room = {
      id: generateUniqueId(),
      name: `Room ${sessionRooms.length + 1}`,
      participants: [],
      ...opts,
    };

    console.log("addRoom", { room });

    await saveSession({ rooms: [...sessionRooms, room] });
  };

  const setRoomTarget = async (room: Room, targetId: string) => {
    const sessionRooms = session?.rooms ?? [];

    const rooms = sessionRooms.map((r) => ({
      ...r,
      targetId: r.id === room.id ? targetId : r.targetId,
    }));

    console.log("setRoomTarget", { room, rooms, targetId });

    await saveSession({ rooms });
  };

  const isFacilitator =
    Boolean(session) && session?.creator.id === currentUser?.id;
  const rooms = session?.rooms ?? [];

  return {
    session,
    state,
    isFacilitator,
    rooms,
    saveSession,
    addRoom,
    addParticipant,
    removeParticipant,
    removeRoom,
    setRoomTarget,
  };
};
