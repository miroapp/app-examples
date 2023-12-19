import * as React from "react";

import {
  OnlineUserInfo,
  TimerEvent,
  UserInfo,
  Session,
  BoardFeature,
} from "@mirohq/websdk-types";

import {
  Breakout,
  Participant,
  Room,
  TimerOpts,
  TimerState,
  UserSessionEvent,
} from "./types";
import { convertTime, formatDisplayTime, generateUniqueId } from "./utils";

const COLLECTION_NAME = "breakout-rooms";
const ACTIVE_ITEM = "active";

const log = (id: string, ...args: unknown[]) =>
  false && console.log(id, JSON.stringify(args, null, 2));

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

export const useBreakout = () => {
  const [breakout, setBreakout] = React.useState<Breakout>();
  const currentUser = useCurrentUser();

  React.useEffect(() => {
    if (!currentUser) {
      return;
    }

    const init = () => {
      const breakoutRooms = miro.board.storage.collection(COLLECTION_NAME);

      const activeValue = (activeBreakout?: Breakout) => {
        log("onValue", { activeBreakout });
        setBreakout(activeBreakout?.id ? activeBreakout : undefined);
      };

      log("subscribing to onValue", { breakoutRooms });
      breakoutRooms.get<Breakout>(ACTIVE_ITEM).then(activeValue);
      breakoutRooms.onValue<Breakout>(ACTIVE_ITEM, activeValue);

      return () => {
        breakoutRooms.offValue<Breakout>(ACTIVE_ITEM, activeValue);
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
      breakoutRooms.set(ACTIVE_ITEM, breakout);
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
      breakoutRooms.set(ACTIVE_ITEM, newBreakout);

      return newBreakout;
    }
  };

  const addParticipant = async (room: Room, user: OnlineUserInfo) => {
    const sessionRooms = breakout?.rooms ?? [];

    const rooms = sessionRooms.map((r) => {
      if (r.id === room.id) {
        const participant: Participant = {
          ...user,
          state: "In room",
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

  const handleUserJoined = async ({ userId, sessionId }: UserSessionEvent) => {
    log("handleUserJoined", { userId, sessionId, breakout });
    if (!breakout) {
      return;
    }

    let participant: Participant | undefined;
    let room: Room | undefined;

    breakout.rooms.some((r) => {
      if (r.sessionId !== sessionId) {
        return false;
      }

      return r.participants.some((p) => {
        if (p.id === userId) {
          participant = p;
          room = r;
          return true;
        }

        return false;
      });
    });

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

    if (participant.id !== currentUser?.id) {
      await miro.board.collaboration.zoomTo(participant, frame);
    }
  };

  const handleUserLeft = async ({ userId, sessionId }: UserSessionEvent) => {
    log("handleUserLeft", { userId, sessionId, breakout });
    if (!breakout) {
      return;
    }

    let participant: Participant | undefined;
    let room: Room | undefined;

    breakout.rooms.some((r) => {
      if (r.sessionId !== sessionId) {
        return false;
      }

      return r.participants.some((p) => {
        if (p.id === userId) {
          participant = p;
          room = r;
          return true;
        }

        return false;
      });
    });

    log("handleUserLeft.participant", { room, participant });

    if (!room || !participant) {
      return;
    }

    await removeParticipant(room, participant);
  };

  const upsertSession = async (room: Room) => {
    let session: Session | undefined;
    if (room.sessionId) {
      const sessions = await miro.board.collaboration.getSessions();
      session = sessions.find((s) => s.id === room.sessionId);
    }

    if (!session) {
      session = await miro.board.collaboration.startSession({
        name: room.name,
      });

      const rooms = breakout?.rooms.map((r) => {
        return room.id === r.id ? { ...r, sessionId: session!.id } : r;
      });

      await saveBreakout(breakout, {
        rooms,
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

    await Promise.all(
      breakout.rooms.map(async (room) => {
        const session = await upsertSession(room);

        const myself = room.participants.find(
          (user) => currentUser?.id === user.id,
        );
        const everyoneElse = room.participants.filter(
          (user) => currentUser?.id !== user.id,
        );

        if (myself) {
          await session.join();
          const frame = await miro.board.get({
            type: "frame",
            id: room.targetId,
          });
          await miro.board.viewport.zoomTo(frame);
        }
        await session.invite(everyoneElse);

        room.participants.map((participant) =>
          updateParticipant(room, participant, {
            state:
              currentUser?.id !== participant.id
                ? "Invitation Pending"
                : "In Session",
          }),
        );

        session.on("user-joined", handleUserJoined);
        session.on("user-left", handleUserLeft);
      }),
    );
  };

  const endSession = async () => {
    log("[TIMER:endSession]", { breakout });
    if (!breakout) {
      throw new Error("Invalid breakout session");
    }

    const finishRooms = breakout.rooms.map(async (room) => {
      const session = await upsertSession(room);
      if (!session) {
        throw new Error(`Breakout ${breakout} doesn't have a Miro session`);
      }

      await session.end();

      room.participants.map((participant) =>
        updateParticipant(room, participant, { state: "In room" }),
      );
    });

    await Promise.all(finishRooms);

    await saveBreakout(breakout, { state: "ended" });
    await releaseSession();
  };

  const releaseSession = async () => {
    const breakoutRooms = await miro.board.storage.collection(COLLECTION_NAME);
    breakoutRooms.remove(ACTIVE_ITEM);
    setBreakout(undefined);
  };

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

export const useTimer = (opts: TimerOpts) => {
  const [state, setState] = React.useState<TimerState>("idle");
  const [restDuration, setRestDuration] = React.useState<number>(opts.duration);
  const interval = React.useRef<ReturnType<typeof setInterval>>();

  const tick = convertTime(opts.interval ?? 1_000, "milliseconds");

  const start = React.useCallback(async () => {
    const isStarted = await miro.board.timer.isStarted();
    if (isStarted) {
      throw new Error("Timer is already running");
    }

    log("[TIMER:START]", { opts });
    await miro.board.timer.start(opts.duration);
  }, [miro, opts.duration]);

  const pause = React.useCallback(async () => {
    const isStarted = await miro.board.timer.isStarted();
    if (isStarted) {
      await miro.board.timer.pause();
    } else {
      throw new Error("Timer is not running");
    }
  }, [miro]);

  const stop = React.useCallback(async () => {
    const isStarted = await miro.board.timer.isStarted();
    if (isStarted) {
      await miro.board.timer.stop();
    }
  }, [miro]);

  const handleTimerStart = React.useCallback(
    async ({ timer }: TimerEvent) => {
      setState("started");
      opts.onStart?.();

      let timeStart = Date.now();
      const timeEnd =
        timeStart + convertTime(timer.restDuration, "milliseconds");

      log("[TIMER:STARTED]", {
        timer,
        timeStart,
        timeEnd,
        opts,
        duration: formatDisplayTime(timer.restDuration),
        startFormatted: formatDisplayTime(timeStart),
        endFormatted: formatDisplayTime(timeEnd),
      });

      clearInterval(interval.current);
      interval.current = setInterval(() => {
        timeStart += tick;
        const restDuration = timeEnd - timeStart;

        log("[TIMER:TICK]", {
          timeStart,
          tick,
          restDuration,
          restFormatted: formatDisplayTime(restDuration),
          current: new Date(timeStart).toTimeString(),
        });

        if (timeStart >= timeEnd) {
          clearInterval(interval.current);
          stop();
          return;
        }

        opts.onTick?.(restDuration);
        setRestDuration(restDuration);
      }, tick);
    },
    [opts.onStart, opts.onTick, stop],
  );

  const handleTimerFinish = React.useCallback(
    async ({ timer }: TimerEvent) => {
      log("[TIMER:FINISHED]", { timer });
      clearInterval(interval.current);
      setState("ended");
      opts.onStop?.();
    },
    [interval, opts.onStop],
  );

  const handleTimerUpdate = React.useCallback(async (event: TimerEvent) => {
    log("[TIMER:UPDATED]", { event });
    switch (event.timer.status) {
      case "STARTED":
        setState("started");
        handleTimerStart(event);
        break;
      case "PAUSED":
        clearInterval(interval.current);
        setState("paused");
        break;
      case "STOPPED":
        setState("ended");
        break;
    }
  }, []);

  React.useEffect(() => {
    const fetchCurrent = async () => {
      const currentState = await miro.board.timer.get();
      log("[TIMER:CURRENT]", { currentState });

      if (currentState.status === "STARTED") {
        handleTimerStart({ timer: currentState });
        setState("started");
      }

      setRestDuration(currentState.restDuration);
    };

    fetchCurrent();
  }, []);

  React.useEffect(() => {
    miro.board.timer.on("start", handleTimerStart);
    miro.board.timer.on("finish", handleTimerFinish);
    miro.board.timer.on("update", handleTimerUpdate);

    return () => {
      miro.board.timer.off("start", handleTimerStart);
      miro.board.timer.off("finish", handleTimerFinish);
      miro.board.timer.off("update", handleTimerUpdate);
    };
  }, [handleTimerStart, handleTimerFinish, handleTimerUpdate]);

  return {
    state,
    restDuration,
    start,
    stop,
    pause,
  };
};

export const useFeatureCheck = (feature: BoardFeature): boolean => {
  const [canUse, setCanUse] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetch = async () => {
      const canIUse = await miro.board.canUse(feature);
      setCanUse(canIUse);
    };
    fetch();
  }, [setCanUse, feature]);

  return canUse;
};
