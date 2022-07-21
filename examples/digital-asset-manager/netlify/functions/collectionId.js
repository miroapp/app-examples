import fetch from "node-fetch";
import { parse } from "cookie";

exports.handler = async function (event, context, callback) {
  if (!event.headers.cookie) {
    return callback(null, {
      statusCode: 404,
      body: JSON.stringify({ message: "Cookies missing from request" }),
    });
  }

  const body = JSON.parse(event.body);
  const cookies = parse(event.headers.cookie);
  const access_token = cookies.bynder_access_token;

  try {
    const collectionData = await fetch(
      `${process.env.BASE_URL}/api/v4/media/?collectionId=${body.collectionId}&type=image&limit=999&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token})`,
        },
      }
    );

    const result = await collectionData.json();

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(result),
    });
  } catch (error) {
    return { statusCode: 422, body: String(error) };
  }
};
