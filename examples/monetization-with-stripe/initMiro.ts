import { Miro } from "@mirohq/miro-api";
import { serialize } from "cookie";

function getSerializedCookie(name: string, value: string | number) {
  return serialize(name, String(value), {
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
}

export default function initMiro(
  request: { cookies: Record<string, undefined | string> },
  response?: {
    setHeader(name: string, value: string[]): void;
  }
) {
  const tokensCookie = "miro_tokens";
  const userIdCookie = "miro_user_id";

  // setup a Miro instance that loads tokens from cookies
  return {
    miro: new Miro({
      storage: {
        get: () => {
          // Load state (tokens) from a cookie if it's set
          try {
            return JSON.parse(request.cookies[tokensCookie] || "null");
          } catch (err) {
            return null;
          }
        },
        set: (userId, state) => {
          // store state (tokens) in the cookie
          response &&
            "setHeader" in response &&
            response.setHeader("Set-Cookie", [
              getSerializedCookie(tokensCookie, JSON.stringify(state)),
              getSerializedCookie(userIdCookie, userId),
            ]);
        },
      },
    }),
    userId: JSON.parse(request.cookies[tokensCookie] || "null")?.userId,
  };
}
