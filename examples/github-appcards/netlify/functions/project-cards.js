/* 

  This endpoint updates Miro App Card statuses when there is an update to their poisition
  or column in GitHub (i.e. from "In Progress" to "Done")

**/
import { createClient } from "@supabase/supabase-js";
import fetch from "node-fetch";

const supabase = createClient(
  process.env.VITE_DATABASE_URL,
  process.env.VITE_DATABASE_PUBLIC_KEY
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
  const gitHubIssueNumer = gitHubProjectCard.content_url
    .split("https: //api.github.com/repos/addisonschultz/github-cards/issues/")
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
    }
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
      "id, miroAppCardId::text, gitHubIssueId, miroUserId::text, gitHubUsername, created_at, miroBoardId, gitHubIssueNumber, auth ( access_token )"
    )
    .eq("gitHubIssueNumber", gitHubIssueNumer);

  // No Miro App Card Found
  if (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "No Miro App Card found for this project card",
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

        return new Promise((resolve) => {
          fetch(
            `https://api.miro.com/v2/boards/${item.miroBoardId}/app_cards/${item.miroAppCardId}`,
            options
          )
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                resolve({
                  statusCode: res.status || 500,
                  body: res.statusText,
                });
              }
            })
            .then((data) => {
              const response = {
                statusCode: 200,
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
              };
              resolve(response);
            })
            .catch((err) => {
              console.log(err);
              resolve({ statusCode: err.statusCode || 500, body: err.message });
            });
        });
      })
    ).then(() => {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Items Updated" }),
      };
    });
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
