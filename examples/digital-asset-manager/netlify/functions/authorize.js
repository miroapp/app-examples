import fetch from "node-fetch";
import { parse, serialize } from "cookie";

exports.handler = async function (event, context, callback) {
  if (!event.headers.cookie) {
    console.log("No cookies in request");
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ signedIn: "false" }),
    });
  }

  const cookies = parse(event.headers.cookie);
  const access_token = cookies.bynder_access_token;
  const refresh_token = cookies.bynder_refresh_token;

  // User is already signed in
  if (access_token && refresh_token) {
    console.log("User already Signed In");

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ signedIn: "true" }),
    });
  }

  // User is not signed in
  if (!access_token && !refresh_token) {
    console.log("User not signed in");
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ signedIn: "false" }),
    });
  }

  // User signed in before, but access token is expired
  if (!access_token) {
    console.log("Refreshing user's token");
    const encodedData = Buffer.from(
      process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
    ).toString("base64");

    const details = {
      grant_type: "refresh_token",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      refresh_token: refresh_token,
    };

    var formBody = [];

    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch(`${process.env.BASE_URL}/v6/authentication/oauth2/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodedData})`,
      },
      body: formBody,
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // Set response in cookies
        const hour = 3600;

        const access_token = serialize(
          "bynder_access_token",
          result.access_token,
          {
            secure: true,
            httpOnly: true,
            sameSite: "None",
            path: "/",
            maxAge: hour,
          }
        );

        return {
          statusCode: 200,
          Location: process.env.PRODUCTION_URL,
          multiValueHeaders: {
            "Set-Cookie": [access_token],
          },
          body: JSON.stringify({ signedIn: "true" }),
        };
      })
      .catch((error) => ({ statusCode: 422, body: String(error) }));
  }

  // Default user to signed out
  console.log("No cookies in request");
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ signedIn: "false" }),
  });
};
