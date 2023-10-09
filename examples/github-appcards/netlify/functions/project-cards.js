/* 

  This endpoint updates Miro app card statuses when the corresponding GitHub issues change state. For example, from 'In progress' to 'Done'.

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

  // Get GitHub project card & Issue Number
  const body = JSON.parse(event.body);
  const gitHubProjectCard = body.gitHubProjectCard;
  const gitHubProjectColumnId = gitHubProjectCard.column_id;
  const gitHubIssueNumber = gitHubProjectCard.content_url
    .split("https:// api.github.com/repos/bishopwm/github-cards/issues/")
    .pop();

  const headers = {
    Accept: "application/vnd.github.v3+json",
    Authorization: `token ${process.env.VITE_GH_ACCESS_TOKEN}`,
  };

  const gitHubProjectColumn = await fetch(
    `https://api.github.com/projects/columns/${gitHubProjectColumnId}`,
    {
      method: "GET",
      headers: headers,
    },
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));

  // Get column name
  const gitHubProjectColumnName = gitHubProjectColumn.name;

  // Get relevant cards associated with this issue/project card
  const { data, error } = await supabase
    .from("card-mapping")
    .select(
      "id, miroAppCardId::text, gitHubIssueId, miroUserId::text, gitHubUsername, created_at, miroBoardId, gitHubIssueNumber, auth ( access_token )",
    )
    .eq("gitHubIssueNumber", gitHubIssueNumber);

  // No Miro App Card Found
  if (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message:
          "This GitHub project card doesn't have a corresponding Miro app card.",
      }),
    };
  }

  // Matching App Cards found
  if (data) {
    await Promise.all(
      data.map(async (item) => {
        // Get issue status color
        const color = await getStatusColor(item.status.name);

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
              fields: [
                {
                  value: gitHubProjectColumnName,
                  iconShape: "square",
                  fillColor: color,
                  textColor: "#ffffff",
                },
              ],
              style: {
                cardTheme: color,
              },
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
          console.log(error);
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

const getStatusColor = async (status) => {
  let color;

  switch (status) {
    case "To Do":
      color = "#E53935";
      break;
    case "In Progress":
      color = "#FFB300";
      break;
    case "Done":
      color = "#7CB342";
      break;
    default:
      color = "#C3C4C3";
      break;
  }

  return color;
};
