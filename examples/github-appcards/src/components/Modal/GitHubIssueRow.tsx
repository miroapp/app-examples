import * as React from "react";
import Checkbox from "../Checkbox";
import Tag from "../Tag";
import { getStatusColor } from "../../utils";

const GitHubIssueRow = ({
  title,
  date,
  status,
  onSelect,
}: {
  title: string;
  date: string;
  status: { name: string; id: any };
  onSelect: (value: boolean) => void;
}) => {
  const issueDate = new Date(date);
  const month = issueDate.getUTCMonth() + 1;
  const day = issueDate.getUTCDate();
  const year = issueDate.getUTCFullYear();

  const [color, setColor] = React.useState("#C3C4C3");

  React.useEffect(() => {
    async function generateStatusColor() {
      const color = await getStatusColor(status.name);
      setColor(color);
    }

    generateStatusColor();
  });

  return (
    <>
      <div id={"grid-checkbox"}>
        <Checkbox
          onSetChecked={(value) => {
            onSelect(value);
          }}
        />
      </div>
      <div id={"grid-title"}>
        <p id={"github-issue-title"}>{title}</p>
      </div>
      <div id={"grid-status"}>
        <Tag status={status} color={color} />
      </div>
      <div id={"grid-date"}>
        <p>{day + "/" + month + "/" + year}</p>
      </div>
    </>
  );
};

export default GitHubIssueRow;
