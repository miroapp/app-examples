import fetch from "node-fetch";
import { serialize } from "cookie";

exports.handler = async (event) => {
  const code = event.queryStringParameters.code;

  const encodedData = Buffer.from(
    process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
  ).toString("base64");

  const details = {
    code: code,
    grant_type: "authorization_code",
    scope: "offline asset:read collection:read",
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URI,
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

      const refresh_token = serialize(
        "bynder_refresh_token",
        result.refresh_token,
        {
          secure: true,
          httpOnly: true,
          sameSite: "None",
          path: "/",
        }
      );

      return {
        statusCode: 301,
        Location: process.env.PRODUCTION_URL,
        multiValueHeaders: {
          "Set-Cookie": [refresh_token, access_token],
        },
        body: "<script>window.close();</script>",
      };
    })
    .catch((error) => console.error(error));
};
