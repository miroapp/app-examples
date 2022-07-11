import fetch from "node-fetch";
import { parse } from "cookie";

exports.handler = async function (event, context, callback) {
  if (!event.headers.cookie) {
    return callback(null, {
      statusCode: 404,
      body: JSON.stringify({ message: "Cookies missing from request" }),
    });
  }

  const cookies = parse(event.headers.cookie);
  const access_token = cookies.bynder_access_token;

  return await fetch(
    `${process.env.BASE_URL}/api/v4/collections/?limit=250&page=1&orderBy=name%20asc&isPublic=1&count=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token})`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(result),
      });
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
