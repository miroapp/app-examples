import { Miro } from "@mirohq/miro-api";
import { serialize } from "cookie";

function getSerializedCookie(name: string, value: string) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 2);

  return serialize(name, value, {
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
    expires,
  });
}

export default function initMiro(
  request: { cookies: Record<string, undefined | string> },
  response?: { setHeader(name: string, value: string[]): void }
) {
  const tokensCookie = "miro_tokens";

  // Set up a Miro instance that loads tokens from cookies
  return {
    miro: new Miro({
      storage: {
        get: () => {
          // If the state (tokens) is set, load it from a cookie
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
          // Store the state (tokens) in the cookie
          console.log("Setting cookies");
          response.setHeader("Set-Cookie", [
            getSerializedCookie(tokensCookie, JSON.stringify(state)),
          ]);
        },
      },
    }),
  };
}
