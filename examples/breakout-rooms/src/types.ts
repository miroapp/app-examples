import { OnlineUserInfo, UserInfo } from "@mirohq/websdk-types";

export type Room = {
  id: string;
  name: string;
  targetId?: string;
  participants: OnlineUserInfo[];
  selected?: boolean;
};

export type Session = {
  id: string;
  creator: UserInfo;
  sessionId?: string;
  rooms: Room[];
};

export type BreakoutState = "idle" | "loading" | "started" | "ended";
