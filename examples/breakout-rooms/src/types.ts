import { Item, OnlineUserInfo, UserInfo } from "@mirohq/websdk-types";

export type BreakoutState = "idle" | "started" | "ended";

export type ParticipantState = "In room" | "In session" | "Invitation pending";

export type Participant = OnlineUserInfo & {
  state: ParticipantState;
};

export type Room = {
  id: string;
  name: string;
  targetId?: string;
  participants: Participant[];
  sessionId?: string;
  selected?: boolean;
};

export type Breakout = {
  id: string;
  creator: UserInfo;
  sessionId?: string;
  rooms: Room[];
  state: BreakoutState;
};

export type TimerState = "idle" | "started" | "paused" | "ended";
export type TimeUnit =
  | "milliseconds"
  | "seconds"
  | "minutes"
  | "hours"
  | "days";

export type TimerOpts = {
  durationUnit?: TimeUnit;
  duration: number;
  interval?: number;
  onTick?: (timestamp: number) => void;
  onStop?: () => void;
  onStart?: () => void;
};

export type UserSessionEvent = {
  userId: string;
  sessionId: string;
};
