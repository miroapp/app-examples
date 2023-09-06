require("dotenv").config();
const fetch = require("node-fetch");

// Global Variables
const accessToken = process.env.ACCESS_TOKEN;

async function callMiroAPI(api, method = "GET", body = undefined) {
  return await fetch(`https://api.miro.com/${api}`, {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body,
  }).then((r) => (method === "DELETE" ? r.text() : r.json()));
}

(async () => {
  // 1. Retrieving Current Information from Miro
  const tokenInfo = await callMiroAPI(`v1/oauth-token`);
  console.log(tokenInfo);
  const orgInfo = await callMiroAPI(`v2/orgs/${tokenInfo.organization.id}`);
  console.log(orgInfo);
  const teamInfo = await callMiroAPI(`v2/teams_settings/${tokenInfo.team.id}`);
  console.log(teamInfo);
  const boards = await callMiroAPI(
    `v2/boards?sort=alphabetically&limit=20&offset=0`,
  );
  console.log(boards);

  // 2. Creating and inviting teams in the organization
  const allTeams = [
    {
      name: "The Development Team",
      employees: ["code.writer@company.com", "pam.developer@company.com"],
    },
    {
      name: "The Marketing Team",
      employees: ["sales.maker@company.com", "jim.marketer@company.com"],
    },
  ];
  allTeams.forEach(async (team) => {
    // Create the team
    console.log("Creating Team: " + team.name);
    const result = await callMiroAPI(
      `v2/orgs/${tokenInfo.organization.id}/teams`,
      "POST",
      JSON.stringify({
        name: team.name,
      }),
    );
    // Invite members
    team.employees.forEach(async (email) => {
      console.log("Inviting team member: " + email);
      await callMiroAPI(
        `v2/orgs/${tokenInfo.organization.id}/teams/${result.id}/members`,
        "POST",
        JSON.stringify({
          userEmail: email,
        }),
      );
    });
  });

  // 3. Creating starter boards for your current team
  console.log("Creating a todo board");
  const todoBoard = await callMiroAPI(
    `v2/boards`,
    "POST",
    JSON.stringify({
      name: "Todo Tasks",
      policy: {
        permissionsPolicy: {
          copyAccess: "team_editors",
          sharingAccess: "team_members_with_editing_rights",
        },
        sharingPolicy: {
          access: "private",
          inviteToAccountAndBoardLinkAccess: "no_access",
          organizationAccess: "private",
          teamAccess: "edit",
        },
      },
      description: "Team Todo Tasks Board",
    }),
  );
  console.log("Creating a suggestions board");
  const suggestionBoard = await callMiroAPI(
    `v2/boards`,
    "POST",
    JSON.stringify({
      name: "Suggestions Welcome",
      policy: {
        permissionsPolicy: {
          copyAccess: "anyone",
          sharingAccess: "team_members_with_editing_rights",
        },
        sharingPolicy: {
          access: "private",
          inviteToAccountAndBoardLinkAccess: "viewer",
          organizationAccess: "comment",
          teamAccess: "edit",
        },
      },
      description: "Company-wide Open Suggestions Board",
    }),
  );
  console.log("Creating a welcome note");
  await callMiroAPI(
    `v2/boards/${todoBoard.id}/sticky_notes`,
    "POST",
    JSON.stringify({
      data: {
        content: "Welcome to the Todo board!",
        shape: "rectangle",
      },
      style: {
        fillColor: "light_blue",
        textAlign: "left",
        textAlignVertical: "top",
      },
    }),
  );
  console.log("Creating a suggestions CTA");
  await callMiroAPI(
    `v2/boards/${suggestionBoard.id}/sticky_notes`,
    "POST",
    JSON.stringify({
      data: {
        content: "Submit your suggestions!",
        shape: "rectangle",
      },
      style: {
        fillColor: "light_yellow",
        textAlign: "center",
        textAlignVertical: "top",
      },
    }),
  );

  // 4. Promoting a new team leader
  console.log("Getting the list of teams");
  const teams = await callMiroAPI(
    `v2/orgs/${tokenInfo.organization.id}/teams`,
    "GET",
  );
  console.log(teams);
  const devTeam = teams.data.find((x) => x.name === "The Development Team");
  console.log("Getting the product development team member list");
  const members = await callMiroAPI(
    `v2/orgs/${tokenInfo.organization.id}/teams/${devTeam.id}/members`,
  );
  console.log("Promoting the member to admin");
  const promoted = await callMiroAPI(
    `v2/orgs/${tokenInfo.organization.id}/teams/${devTeam.id}/members/${members.data[1].memberId}`,
    "PATCH",
    JSON.stringify({
      role: "admin",
    }),
  );
  console.log(promoted);
  console.log("Deleting previous team admin");
  const deleted = await callMiroAPI(
    `v2/orgs/${tokenInfo.organization.id}/teams/${devTeam.id}/members/${members.data[0].memberId}`,
    "DELETE",
  );
  console.log(deleted);

  // 5. Cleaning up old teams
  const teamsToDelete = ["The Development Team", "The Marketing Team"];
  const teamList = await callMiroAPI(
    `v2/orgs/${tokenInfo.organization.id}/teams`,
    "GET",
  );
  if (teamList && teamList.data) {
    console.log("Finding and deleting teams");
    teamList.data.forEach(async (team) => {
      if (teamsToDelete.includes(team.name)) {
        console.log("Deleting: " + team.name);
        await callMiroAPI(
          `v2/orgs/${tokenInfo.organization.id}/teams/${team.id}`,
          "DELETE",
        );
      }
    });
  }
})();
