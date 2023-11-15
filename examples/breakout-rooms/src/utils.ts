import { OnlineUserInfo } from "@mirohq/websdk-types";

export function generateUniqueId(): string {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  return `${timestamp}${random}`;
}

export const isUser = (data: unknown): data is OnlineUserInfo =>
  // @ts-expect-error check whether it's a user
  data.id && data.name;
