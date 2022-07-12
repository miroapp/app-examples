export interface GitHubProject {
  name: string;
  body: string;
  id: number;
}

export interface GitHubColumns {
  name: string;
  id: number;
}

export interface GitHubProjectCard {
  id: number;
  content_url: string;
  column_url: string;
}

export interface GitHubIssue {
  id: number;
  title: string;
  created_at: string;
  state: string;
  url: string;
}
