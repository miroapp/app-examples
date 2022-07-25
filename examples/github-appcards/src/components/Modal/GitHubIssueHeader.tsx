import * as React from "react";
import Checkbox from "../Checkbox";
import Tag from "../Tag";

const GitHubIssueHeader = () => {
  return (
    <>
      <div className="grid-checkbox"></div>
      <div className="grid-title">
        <p>Issue</p>
      </div>
      <div className="grid-status">
        <p>Status</p>
      </div>
      <div className="grid-date">
        <p>Date created</p>
      </div>
    </>
  );
};

export default GitHubIssueHeader;
