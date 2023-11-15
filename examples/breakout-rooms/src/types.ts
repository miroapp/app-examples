import { OnlineUserInfo, UserInfo } from "@mirohq/websdk-types";

export type BreakoutState = "idle" | "started" | "ended";

export type ParticipantState =
  | "Waiting room"
  | "In Session"
  | "Invitation Pending";

export type Participant = OnlineUserInfo & {
  state: ParticipantState;
};

export type Room = {
  id: string;
  name: string;
  targetId?: string;
  participants: Participant[];
  selected?: boolean;
};

export type Breakout = {
  id: string;
  creator: UserInfo;
  sessionId?: string;
  rooms: Room[];
  state: BreakoutState;
};
