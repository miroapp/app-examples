import * as React from "react";
import ReactDOM from "react-dom";
import {
  GitHubIssueHeader,
  GitHubIssueRow,
  Select,
  Loader,
} from "./components";
import {
  fetchGitHubProjects,
  fetchGitHubColumns,
  fetchGitHubProjectCards,
  fetchGitHubIssues,
  insertGitHubAppCards,
} from "./utils";
import type {
  GitHubProject,
  GitHubColumns,
  GitHubProjectCard,
  GitHubIssue,
} from "./types";
import { username, repo } from "./constants";

function Modal() {
  // Store loading state of GitHub Cards
  const [loading, setLoading] = React.useState<boolean>(true);

  const [selectedGitHubIssues, setSelectedGitHubIssues] = React.useState<any[]>(
    []
  );

  /**
   * Store information pulled from GitHub API
   */
  const [gitHubProjects, setGitHubProjects] = React.useState<GitHubProject[]>(
    []
  );
  const [gitHubColumns, setGitHubColumns] = React.useState<GitHubColumns[]>([]);
  const [gitHubProjectCards, setGitHubProjectCards] = React.useState<
    GitHubProjectCard[]
  >([]);
  const [gitHubIssues, setGitHubIssues] = React.useState<GitHubIssue[]>([]);

  /**
   * Store selection options
   */
  const [selectedProject, setSelectedProject] = React.useState<GitHubProject>({
    name: "",
    body: "",
    id: 0,
  });

  // Fetch  GitHub Projects
  React.useEffect(() => {
    fetchGitHubProjects(username, repo).then((projects) => {
      setGitHubProjects([...projects]);
    });
  }, []);

  // Fetch GitHub Columns
  React.useEffect(() => {
    if (gitHubProjects.length > 0) {
      fetchGitHubColumns(
        gitHubProjects
          .filter((project) => project.id !== selectedProject.id)[0]
          .id.toString()
      ).then((columns) => {
        setGitHubColumns([...columns]);
      });
    }
  }, [gitHubProjects]);

  // Fetch GitHub Cards
  React.useEffect(() => {
    if (gitHubColumns.length > 0) {
      gitHubColumns.map((column) => {
        fetchGitHubProjectCards(column.id.toString()).then((cards) => {
          setGitHubProjectCards((previousState) => [
            ...previousState,
            ...cards,
          ]);
        });
      });
    }
  }, [gitHubColumns]);

  // Fetch GitHub Issues & filter issues that are not in current project
  React.useEffect(() => {
    fetchGitHubIssues(username, repo)
      .then((issues) => {
        setGitHubIssues([...issues]);
      })
      .then(() => {
        setLoading(false);
      });
  }, [gitHubProjectCards]);

  const filterGitHubIssues = () => {
    // Filter out issues that aren't in the current project
    const filteredGitHubIssues = gitHubIssues.filter((issue) => {
      return gitHubProjectCards.some((gitHubProjectCard) => {
        return gitHubProjectCard.content_url === issue.url;
      });
    });

    const filteredGitHubIssuesWithStatus = filteredGitHubIssues.map((issue) => {
      // Find matching GitHub Project Card for Issue
      const matchingGitHubProjectCard = gitHubProjectCards.find(
        (card) => card.content_url === issue.url
      );

      if (matchingGitHubProjectCard === undefined) {
        throw new TypeError("No Matching GitHub Card for current Issue");
      }

      // Find Project Column ID the card lives in
      const columnId = matchingGitHubProjectCard.column_url
        .split("https://api.github.com/projects/columns/")
        .pop();

      // Find the name of the column
      const status = gitHubColumns.find(
        (column) => column.id.toString() === columnId
      );

      // Return issue with column and card attached
      return {
        ...issue,
        status: status || { name: "", id: null },
        gitHubProjectCard: matchingGitHubProjectCard,
      };
    });

    return filteredGitHubIssuesWithStatus;
  };

  // Handle when a GitHubIssueRow is selected or not
  const handleGitHubIssueSelect = (isChecked: boolean, issue: any) => {
    //  Set ore remove issue into selected state
    if (isChecked) {
      setSelectedGitHubIssues((previousState) => [...previousState, issue]);
    } else {
      const updatedGitHubIssues = selectedGitHubIssues.filter(
        (currentIssue) => currentIssue.id !== issue.id
      );
      setSelectedGitHubIssues([...updatedGitHubIssues]);
    }
  };

  // Handle importing and converting GitHub issues to App Cards
  const handleImportClick = async () => {
    await insertGitHubAppCards(selectedGitHubIssues).then(() => {
      miro.board.ui.closeModal();
    });
  };

  return (
    <div className="modal-container wrapper">
      <h2>Choose from GitHub</h2>
      <Select
        label="Select GitHub Project"
        required={true}
        options={gitHubProjects}
        onChange={(e) => setSelectedProject(JSON.parse(e.target.value))}
      />
      <div className="modal-grid">
        <GitHubIssueHeader />

        {loading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <>
            {filterGitHubIssues().map((issue, index) => {
              return (
                <GitHubIssueRow
                  title={issue.title}
                  date={issue.created_at}
                  status={issue.status}
                  onSelect={(value) => handleGitHubIssueSelect(value, issue)}
                  key={index}
                />
              );
            })}
          </>
        )}
      </div>
      <button
        className="button button-primary"
        type="button"
        onClick={handleImportClick}
        disabled={selectedGitHubIssues.length === 0}
      >
        Import
      </button>
    </div>
  );
}

ReactDOM.render(<Modal />, document.getElementById("modal-root"));
