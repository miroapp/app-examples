import jwt from "jsonwebtoken";
import { headers } from "next/headers";

export interface User {
  userId: string;
  authorised: boolean;
  paid?: boolean;
  authUrl?: string;
}

export function getUserIdFromRequest() {
  const jwtToken = headers().get("Authorization")?.replace("Bearer ", "");

  if (!jwtToken) {
    throw new Error("No JWT token provided");
  }

  try {
    const token = jwt.verify(jwtToken, process.env.MIRO_CLIENT_SECRET!) as {
      user: string;
      team: string;
    };
    return token.user;
  } catch (e) {
    console.error(e);
    throw new Error("Invalid JWT token");
  }
}
