const baseUrl = "https://api.github.com";
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
  const gitHubProjects = fetch(
    `${baseUrl}/repos/${username}/${repo}/projects`,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((response) => response.json())
    .then((result) => {
      const gitHubProjectData = result.map((project: any) => {
        return {
          name: project.name,
          body: project.body,
          id: project.id,
        };
      });

      return gitHubProjectData;
    })
    .catch((error) => console.error(error));

  return gitHubProjects;
};

/**
 * Fetches a list of columns under a specific project id
 *
 * Returns {
 * }
 */
export const fetchGitHubColumns = async (project_id: string) => {
  const gitHubColumns = fetch(`${baseUrl}/projects/${project_id}/columns`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((result) => {
      const gitHubProjectColumns = result.map((column: any) => {
        return {
          name: column.name,
          id: column.id,
        };
      });

      return gitHubProjectColumns;
    })
    .catch((error) => console.error(error));

  return gitHubColumns;
};

/**
 * Fetches a single column by id
 *
 * Returns {
 * }
 */
export const fetchGitHubColumn = async (column_id: string) => {
  const gitHubColumn = fetch(`${baseUrl}/projects/columns/${column_id}`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubColumn;
};

/**
 * Fetches a list of cards under a specific project column id
 *
 * Returns {
 * }
 */
export const fetchGitHubCards = async (column_id: string) => {
  const gitHubCards = fetch(`${baseUrl}/projects/columns/${column_id}/cards`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubCards;
};

/**
 * Fetches a list of issues in a repository
 *
 * Returns {
 * }
 */
export const fetchGitHubIssues = async (username: string, repo: string) => {
  const gitHubCards = fetch(`${baseUrl}/repos/${username}/${repo}/issues`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubCards;
};

/**
 * Fetches a list of collaborators in a project
 *
 * Returns {
 * }
 */
export const fetchGitHubCollaborators = async (project_id: string) => {
  const gitHubCollaborators = fetch(
    `${baseUrl}/projects/${project_id}/collaborators`,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubCollaborators;
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
  }
) => {
  const gitHubIssue = fetch(`${baseUrl}/repos/${owner}/${repo}/issues`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubIssue;
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
  }
) => {
  const gitHubProjectCard = fetch(
    `${baseUrl}/projects/columns/${column_id}/cards`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubProjectCard;
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
  }
) => {
  const gitHubIssue = fetch(
    `${baseUrl}/repos/${username}/${repo}/issues/${issueNumber}`,
    {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubIssue;
};

/**
 * Updates a GitHub Issue
 *
 */
export const updateGitHubProjectCard = async (
  gitHubProjectCardId: string,
  data: {
    columnId: number;
  }
) => {
  const gitHubProjectCard = fetch(
    `${baseUrl}/projects/columns/cards/${gitHubProjectCardId}/moves`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.error(error));

  return gitHubProjectCard;
};
