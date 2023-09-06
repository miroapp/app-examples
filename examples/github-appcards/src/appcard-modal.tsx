import * as React from "react";
import ReactDOM from "react-dom";
import { Input, Select } from "./components";
import {
  fetchGitHubProjects,
  fetchGitHubColumns,
  updateGitHubIssue,
  updateGitHubProjectCard,
  getStatusColor,
} from "./utils";
import type { GitHubProject, GitHubColumns } from "./types";
import { username, repo } from "./constants";
import { supabase } from "./utils";

function App() {
  // Keep information about app card in state
  const [appCardId, setAppCardId] = React.useState("");
  const [newTitle, setNewTitle] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");

  /**
   * Store information pulled from GitHub API
   */
  const [gitHubProjects, setGitHubProjects] = React.useState<GitHubProject[]>(
    [],
  );
  const [gitHubColumns, setGitHubColumns] = React.useState<GitHubColumns[]>([
    { name: "", id: 0 },
  ]);

  /**
   * Store selected project options
   */
  const [selectedProject, setSelectedProject] = React.useState<GitHubProject>({
    name: "",
    body: "",
    id: 0,
  });

  /**
   * Store selected column options
   */
  const [selectedColumn, setSelectedColumn] = React.useState<GitHubColumns>({
    name: "",
    id: 0,
  });

  // Get and store appCardId, title, and description from window location
  React.useEffect(() => {
    // Get URL parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const appCardId = urlParams.get("appCardId");
    const appCardTitle = urlParams.get("appCardTitle");
    const appCardDescription = urlParams.get("appCardDescription");
    const currentStatus = urlParams.get("currentStatus");

    if (appCardId && appCardTitle && appCardDescription && currentStatus) {
      const status = gitHubColumns.find(
        (column) => column.name === currentStatus,
      );

      setAppCardId(appCardId);
      setNewTitle(appCardTitle);
      setNewDescription(appCardDescription);
      if (status) {
        setSelectedColumn(status);
      }
    }
  }, [gitHubColumns]);

  // Fetch GitHub Projects
  React.useEffect(() => {
    const getGitHubProjects = async () => {
      try {
        const gitHubProjects = await fetchGitHubProjects(username, repo);

        setGitHubProjects([...gitHubProjects]);
        setSelectedProject(gitHubProjects[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getGitHubProjects();
  }, []);

  // Fetch GitHub Columns
  React.useEffect(() => {
    const getGitHubColumns = async () => {
      if (gitHubProjects.length > 0) {
        try {
          const gitHubColumns = await fetchGitHubColumns(
            gitHubProjects
              .filter((project) => project.id !== selectedProject.id)[0]
              .id.toString(),
          );

          setGitHubColumns([...gitHubColumns]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getGitHubColumns();
  }, [gitHubProjects]);

  const handleSaveClick = async () => {
    const { data, error } = await supabase
      .from("card-mapping")
      .select(
        "id, miroAppCardId::text, gitHubIssueId, miroUserId::text, gitHubUsername, created_at, miroBoardId, gitHubIssueNumber, gitHubProjectCardId",
      )
      .eq("miroAppCardId", appCardId);

    if (error) {
      console.error(error);
    }

    if (data) {
      Promise.all(
        data.map(async (item) => {
          const gitHubIssueNumber = item.gitHubIssueNumber;
          const color = await getStatusColor(selectedColumn.name);

          // Update GitHub Issue
          await updateGitHubIssue(username, repo, gitHubIssueNumber, {
            title: newTitle,
            body: newDescription,
          });

          // Update GitHub Project Card
          await updateGitHubProjectCard(item.gitHubProjectCardId, {
            columnId: selectedColumn.id,
            card_id: item.gitHubProjectCardId,
            position: "top",
          });

          // Update App Card via SDK
          const currentAppCard = await miro.board.getById(appCardId);
          if (currentAppCard) {
            currentAppCard.title = newTitle;
            currentAppCard.description = newDescription;
            currentAppCard.fields = [
              {
                value: selectedColumn.name,
                iconShape: "square",
                fillColor: color,
                textColor: "#ffffff",
              },
            ];
            currentAppCard.style.cardTheme = color;

            await currentAppCard.sync();

            await miro.board.ui.closeModal();
          }
        }),
      );
    }
  };

  const handleCancelClick = async () => {
    await miro.board.ui.closeModal();
  };

  return (
    <div className="appcard-modal-container">
      <h1>Edit GitHub card</h1>
      <Select
        label="GitHub project"
        required
        options={gitHubProjects}
        selected={selectedProject}
        onChange={(e) => setSelectedProject(JSON.parse(e.target.value))}
      />
      <Select
        label="Column"
        required
        options={gitHubColumns}
        selected={selectedColumn}
        onChange={(e) => setSelectedColumn(JSON.parse(e.target.value))}
      />
      <Input
        label="Title"
        required
        placeholder="Title"
        value={newTitle.replace(/<\/?[^>]+(>|$)/g, "")}
        onChange={(value) => setNewTitle(value)}
      />
      <Input
        label="Description"
        required
        placeholder="Description"
        value={newDescription}
        onChange={(value) => setNewDescription(value)}
      />
      <div className="appcard-modal-button-container">
        <button className="button button-primary" onClick={handleSaveClick}>
          Save
        </button>
        <button className="button button-secondary" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("appcard-modal-root"));
