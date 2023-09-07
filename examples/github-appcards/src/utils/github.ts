const GITHUB_API_URL = "https://api.github.com";
const token = import.meta.env.VITE_GH_ACCESS_TOKEN;

const headers = new Headers({
  Authorization: `token ${token}`,
  Accept: "application/vnd.github.v3+json",
});

/**
 * Fetches a list of projects under a specific username and repository
 *
 * Returns {
 *  name: string
 *  body: string
 *  id: number
 * }
 */
export const fetchGitHubProjects = async (username: string, repo: string) => {
  try {
    const gitHubProjects = await fetch(
      `${GITHUB_API_URL}/repos/${username}/${repo}/projects`,
      {
        method: "GET",
        headers: headers,
      },
    );

    const result = await gitHubProjects.json();

    return result.map((project: any) => {
      return {
        name: project.name,
        body: project.body,
        id: project.id,
      };
    });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches a list of columns under a specific project id
 *
 */
export const fetchGitHubColumns = async (project_id: string) => {
  try {
    const gitHubColumns = await fetch(
      `${GITHUB_API_URL}/projects/${project_id}/columns`,
      {
        method: "GET",
        headers: headers,
      },
    );

    const result = await gitHubColumns.json();

    return result.map((column: any) => {
      return {
        name: column.name,
        id: column.id,
      };
    });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches a single column by id
 *
 */
export const fetchGitHubColumn = async (column_id: string) => {
  try {
    const gitHubColumn = await fetch(
      `${GITHUB_API_URL}/projects/columns/${column_id}`,
      {
        method: "GET",
        headers: headers,
      },
    );

    return await gitHubColumn.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches a list of cards under a specific project column id
 *
 */
export const fetchGitHubProjectCards = async (column_id: string) => {
  try {
    const gitHubProjectCards = await fetch(
      `${GITHUB_API_URL}/projects/columns/${column_id}/cards`,
      {
        method: "GET",
        headers: headers,
      },
    );

    return await gitHubProjectCards.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches a single GitHub project card by id
 *
 */
export const fetchGitHubProjectCard = async (card_id: string) => {
  try {
    const gitHubProjectCard = await fetch(
      `${GITHUB_API_URL}/projects/columns/cards/${card_id}`,
      {
        method: "GET",
        headers: headers,
      },
    );

    return await gitHubProjectCard.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches a list of issues in a repository
 *
 */
export const fetchGitHubIssues = async (username: string, repo: string) => {
  try {
    const gitHubProjectCards = await fetch(
      `${GITHUB_API_URL}/repos/${username}/${repo}/issues`,
      {
        method: "GET",
        headers: headers,
      },
    );

    return await gitHubProjectCards.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches a list of collaborators in a project
 *
 */
export const fetchGitHubCollaborators = async (project_id: string) => {
  try {
    const gitHubCollaborators = await fetch(
      `${GITHUB_API_URL}/projects/${project_id}/collaborators`,
      {
        method: "GET",
        headers: headers,
      },
    );

    return await gitHubCollaborators.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates a new GitHub Issue
 *
 */
export const createGitHubIssue = async (
  owner: string,
  repo: string,
  data: {
    title: string;
    body?: string;
    assignee?: string | null;
    labels?: string[];
  },
) => {
  try {
    const gitHubIssue = await fetch(
      `${GITHUB_API_URL}/repos/${owner}/${repo}/issues`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      },
    );

    return await gitHubIssue.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates a new GitHub Card
 *
 */
export const createGitHubProjectCard = async (
  column_id: string,
  data: {
    note: string | null;
    content_id: number;
    content_type: string;
  },
) => {
  try {
    const gitHubProjectCard = await fetch(
      `${GITHUB_API_URL}/projects/columns/${column_id}/cards`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      },
    );

    return await gitHubProjectCard.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Updates a GitHub Issue
 *
 */
export const updateGitHubIssue = async (
  username: string,
  repo: string,
  issueNumber: string,
  data: {
    title: string;
    body: string;
  },
) => {
  try {
    const gitHubIssue = await fetch(
      `${GITHUB_API_URL}/repos/${username}/${repo}/issues/${issueNumber}`,
      {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(data),
      },
    );

    return await gitHubIssue.json();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Updates a GitHub Project Card Position
 *
 */
export const updateGitHubProjectCard = async (
  gitHubProjectCardId: string,
  data: {
    columnId: number;
    card_id: string;
    position: string;
  },
) => {
  try {
    const gitHubProjectCard = await fetch(
      `${GITHUB_API_URL}/projects/columns/cards/${gitHubProjectCardId}/moves`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      },
    );

    return await gitHubProjectCard.json();
  } catch (error) {
    console.error(error);
  }
};
