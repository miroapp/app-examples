/* 

  This endpoint updates title and/or description of Miro app cards when the corresponding data source is updated in GitHub.

**/
import { createClient } from "@supabase/supabase-js";
import fetch from "node-fetch";

const supabase = createClient(
  process.env.VITE_DATABASE_URL,
  process.env.VITE_DATABASE_PUBLIC_KEY,
);

exports.handler = async function (event) {
  if (!event.body) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "No Body Found" }),
    };
  }

  // Get Issue
  const body = JSON.parse(event.body);
  const gitHubIssue = body.gitHubIssue;
  const gitHubIssueId = gitHubIssue.id;

  //   Get card mappings from database
  const { data, error } = await supabase
    .from("card-mapping")
    .select(
      "id, miroAppCardId::text, gitHubIssueId, miroUserId::text, gitHubUsername, created_at, miroBoardId, gitHubIssueNumber, auth ( access_token )",
    )
    .eq("gitHubIssueId", gitHubIssueId);

  //   No Miro App Card Found
  if (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message:
          "This GitHub issue doesn't have a corresponding Miro app card.",
      }),
    };
  }

  // Matching App Cards found
  if (data) {
    await Promise.all(
      data.map(async (item) => {
        // Request Headers
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${item.auth.access_token}`,
        };

        //   Request options & body
        const options = {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify({
            data: {
              title: gitHubIssue.title,
              description: gitHubIssue.body,
            },
          }),
        };

        try {
          const miroAppCardResponse = await fetch(
            `https://api.miro.com/v2/boards/${item.miroBoardId}/app_cards/${item.miroAppCardId}`,
            options,
          );

          if (miroAppCardResponse.ok) {
            const data = await miroAppCardResponse.json();
            const response = {
              statusCode: 200,
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data),
            };
            return response;
          } else {
            return {
              statusCode: miroAppCardResponse.status || 500,
              body: miroAppCardResponse.statusText,
            };
          }
        } catch (error) {
          return {
            statusCode: error.statusCode || 500,
            body: error.message,
          };
        }
      }),
    );
  }

  // Final response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Request sent" }),
  };
};
