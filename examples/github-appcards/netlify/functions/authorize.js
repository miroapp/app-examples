import fetch from "node-fetch";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_DATABASE_URL,
  process.env.VITE_DATABASE_PUBLIC_KEY
);

exports.handler = async function (event) {
  const queryStringParameters = event.queryStringParameters;

  if (!event.queryStringParameters) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Authorization URL incorrect" }),
    };
  }

  const code = queryStringParameters.code;
  const clientId = queryStringParameters.client_id;
  const teamId = queryStringParameters.team_id;

  const redirectUrl = `https://miro.com/app-install-completed/?client_id=${clientId}&team_id=${teamId}`;
  const url = `https://api.miro.com/v1/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${process.env.MIRO_CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.MIRO_REDIRECT_URI}`;

  try {
    const authorizationResponse = await fetch(url, {
      method: "POST",
    });

    const result = await authorizationResponse.json();

    const miro_access_token = result.access_token;
    const miro_user_id = result.user_id;
    const modifiedAtTime = new Date();

    const { data, error } = await supabase.from("auth").upsert([
      {
        access_token: miro_access_token,
        miroUserId: miro_user_id,
        modified_at: modifiedAtTime,
      },
    ]);

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: error }),
      };
    }

    if (data) {
      return {
        statusCode: 302,
        headers: {
          Location: redirectUrl,
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({}),
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: error }),
    };
  }
};
