import { getStatusColor } from "./index";
import { supabase } from "./index";

interface MiroSelection {
  content: string;
  x: number;
  y: number;
}

// Inserts App Cards converted from Sticky Notes
export const insertAppCards = async (
  selection: MiroSelection,
  selectedColor: { background: string },
  gitHubProjectCard: any,
  issue: any,
) => {
  //  Get current Miro board
  const { id } = await miro.board.getInfo();

  const appCard = await miro.board.createAppCard({
    title: selection.content,
    description: "Github App Card Created",
    x: selection.x,
    y: selection.y,
    style: {
      cardTheme: selectedColor.background,
    },
    status: "connected",
  });

  // Post data to supabase
  await supabase.from("card-mapping").insert([
    {
      miroAppCardId: appCard.id,
      gitHubIssueId: issue.id,
      miroUserId: appCard.createdBy,
      gitHubUsername: issue.user.login,
      miroBoardId: id,
      gitHubIssueNumber: issue.number,
      gitHubProjectCardId: gitHubProjectCard.id,
    },
  ]);
};

export const removeSelectedItem = async (item: any) => {
  await miro.board.remove(item);
};

// Inserts App Card chosen from GitHub
export const insertGitHubAppCards = async (gitHubIssues: any[]) => {
  await Promise.all(
    gitHubIssues.map(async (issue, index) => {
      //  Get current Miro board
      const { id } = await miro.board.getInfo();

      // Get issue status color
      const color = await getStatusColor(issue.status.name);

      // Create App Card
      const appCard = await miro.board.createAppCard({
        x: index * 350,
        y: 0,
        title: issue.title,
        description: issue.body,
        style: {
          cardTheme: color,
        },
        fields: [
          {
            value: issue.status.name,
            iconShape: "square",
            fillColor: color,
            textColor: "#ffffff",
          },
        ],
        status: "connected",
      });

      // Post data to supabase
      await supabase.from("card-mapping").insert([
        {
          miroAppCardId: appCard.id,
          gitHubIssueId: issue.id,
          miroUserId: appCard.createdBy,
          gitHubUsername: issue.user.login,
          miroBoardId: id,
          gitHubIssueNumber: issue.number,
          gitHubProjectCardId: issue.gitHubProjectCard.id,
        },
      ]);

      if (index === 0) {
        await miro.board.viewport.zoomTo(appCard);
      }
    }),
  );
};
