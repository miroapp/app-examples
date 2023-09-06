import fetch from "node-fetch";
import { parse, serialize } from "cookie";

const S_IN_HOUR = 3600;

exports.handler = async function (event, context, callback) {
  // Missing Cookies
  if (!event.headers.cookie) {
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
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ signedIn: "true" }),
    });
  }

  // User is not signed in
  if (!access_token && !refresh_token) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ signedIn: "false" }),
    });
  }

  // User signed in before, but access token is expired.
  // Using the refresh token to generate a new token pair.
  if (!access_token) {
    const encodedData = Buffer.from(
      process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET,
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

    try {
      const authenticationData = await fetch(
        `${process.env.BASE_URL}/v6/authentication/oauth2/token/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encodedData})`,
          },
          body: formBody,
        },
      );

      const result = await authenticationData.json();

      const access_token = serialize(
        "bynder_access_token",
        result.access_token,
        {
          secure: true,
          httpOnly: true,
          sameSite: "None",
          path: "/",
          maxAge: S_IN_HOUR,
        },
      );

      return {
        statusCode: 200,
        Location: process.env.PRODUCTION_URL,
        multiValueHeaders: {
          "Set-Cookie": [access_token],
        },
        body: JSON.stringify({ signedIn: "true" }),
      };
    } catch (error) {
      return { statusCode: 422, body: String(error) };
    }
  }

  // Default user to signed out
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ signedIn: "false" }),
  });
};
