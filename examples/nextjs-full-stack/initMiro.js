import { Miro } from "@mirohq/miro-api";
import { serialize } from "cookie";

function serializeCookie(name, value) {
  return serialize(name, value, {
    path: "/",
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });
}

export default function initMiro(request, response) {
  const tokensCookie = "miro_tokens";
  const userIdCookie = "miro_user_id";

  // setup a Miro instance that loads tokens from cookies
  return {
    miro: new Miro({
      storage: {
        get: () => {
          // Load state (tokens) from a cookie if it's set
          try {
            return JSON.parse(request.cookies[tokensCookie]);
          } catch (err) {
            return null;
          }
        },
        set: (userId, state) => {
          // store state (tokens) in the cookie
          response.setHeader("Set-Cookie", [
            serializeCookie(tokensCookie, JSON.stringify(state)),
            serializeCookie(userIdCookie, userId),
          ]);
        },
      },
    }),
    userId: request.cookies[userIdCookie],
  };
}
