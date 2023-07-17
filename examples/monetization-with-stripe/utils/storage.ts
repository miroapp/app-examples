import * as fs from "fs/promises";
import { ExternalUserId } from "@mirohq/miro-api";

const fileName = "store.json";

export const storage = {
  get: async (userId: string) => {
    try {
      const file = await fs.readFile(fileName, "utf-8");
      return JSON.parse(file)[userId];
    } catch (e) {
      return;
    }
  },
  set: async (userId: ExternalUserId, key: string, value: string | number) => {
    let asJSON: Record<ExternalUserId, Record<typeof key, typeof value>> = {};
    try {
      const file = await fs.readFile(fileName, "utf-8");
      asJSON = JSON.parse(file);
    } catch (e) {
      console.error("error fetching JSON storage", e);
    }

    asJSON[userId] = {
      ...(asJSON[userId] || {}),
      [key]: value,
    };

    await fs.writeFile(fileName, JSON.stringify(asJSON));

    return asJSON;
  },
};
