import * as React from "react";
import Checkbox from "../Checkbox";
import Tag from "../Tag";

const GitHubIssueHeader = () => {
  return (
    <>
      <div id={"grid-checkbox"}></div>
      <div id={"grid-title"}>
        <p>Issue</p>
      </div>
      <div id={"grid-status"}>
        <p>Status</p>
      </div>
      <div id={"grid-date"}>
        <p>Date Created</p>
      </div>
    </>
  );
};

export default GitHubIssueHeader;
