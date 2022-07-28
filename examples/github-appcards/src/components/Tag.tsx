import * as React from "react";

const Tag = ({
  status,
  color,
}: {
  status: { name: string; id: any };
  color: string;
}) => {
  return (
    <div className="tag-container" style={{ backgroundColor: color }}>
      <p>{status.name}</p>
    </div>
  );
};

export default Tag;
