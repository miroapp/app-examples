import * as fs from "fs/promises";
import { existsSync } from "fs";

export type UserId = string;

const fileName = "store.json";
if (!existsSync(fileName)) {
  fs.writeFile(fileName, "{}");
}

export interface StoreRecord {
  recent: string[];
}

export const storage = {
  get: async (userId: UserId): Promise<StoreRecord | undefined> => {
    const records = await read();
    return records[userId];
  },
  set: async (userId: UserId, value: StoreRecord | undefined) => {
    const records = await read();

    if (value) {
      records[userId] = value;
    } else {
      delete records[userId];
    }

    await write(records);
  },
};

async function read(): Promise<Record<UserId, StoreRecord>> {
  try {
    const file = await fs.readFile(fileName, "utf-8");
    return JSON.parse(file);
  } catch (e) {
    console.error("error fetching JSON storage", e);
    return {};
  }
}

async function write(records: Record<UserId, StoreRecord>) {
  await fs.writeFile(fileName, JSON.stringify(records));
}
