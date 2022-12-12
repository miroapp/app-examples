import { Miro } from "@mirohq/miro-api";
import { serialize } from "cookie";

function getSerializedCookie(name: string, value: string) {
  return serialize(name, value, {
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
}

export default function initMiro(
  request: { cookies: Record<string, undefined | string> },
  response?: { setHeader(name: string, value: string[]): void }
) {
  const tokensCookie = "miro_tokens";

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
        set: (_userId, state) => {
          if (!response)
            throw new Error(
              "initMiro should be invoked with a response object"
            );
          // store state (tokens) in the cookie
          console.log("Setting cookies");
          response.setHeader("Set-Cookie", [
            getSerializedCookie(tokensCookie, JSON.stringify(state)),
          ]);
        },
      },
    }),
  };
}
