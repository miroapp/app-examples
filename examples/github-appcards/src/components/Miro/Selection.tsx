import * as React from "react";
import Select from "../Select";
import ColorPicker from "./ColorPicker";
import { fetchGitHubProjects, fetchGitHubColumns } from "../../utils";
import type { GitHubProject, GitHubColumns } from "../../types";
import { username, repo } from "../../constants";

const Selection = ({
  onSelectColumn,
  onSelectColor,
  color,
}: {
  onSelectColumn: (column: GitHubColumns) => void;
  onSelectColor: (color: { background: string }) => void;
  color: { background: string };
}) => {
  /**
   * Store information pulled from GitHub API
   */
  const [gitHubProjects, setGitHubProjects] = React.useState<GitHubProject[]>(
    []
  );
  const [gitHubColumns, setGitHubColumns] = React.useState<GitHubColumns[]>([]);

  /**
   * Store selection options
   */
  const [selectedProject, setSelectedProject] = React.useState<GitHubProject>({
    name: "",
    body: "",
    id: 0,
  });

  // Fetch Projects from GitHub
  React.useEffect(() => {
    fetchGitHubProjects(username, repo).then((projects) => {
      setGitHubProjects([...projects]);
    });
  }, []);

  // Fetch Columns from selected Project
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

  // After fetching columns from GitHub, set default to the first one
  React.useEffect(() => {
    onSelectColumn(gitHubColumns[0]);
  }, [gitHubColumns]);

  return (
    <div className="selection-container">
      <Select
        label="Select GitHub Project"
        required={true}
        options={gitHubProjects}
        onChange={(e) => setSelectedProject(JSON.parse(e.target.value))}
      />
      <Select
        label="Column"
        required={true}
        options={gitHubColumns}
        onChange={(e) => onSelectColumn(JSON.parse(e.target.value))}
      />
      <ColorPicker
        color={color.background}
        setColor={(color) => onSelectColor(color)}
      />
    </div>
  );
};

export default Selection;
