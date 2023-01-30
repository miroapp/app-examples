import React, { FC, PropsWithChildren } from "react";

export const Link: FC<PropsWithChildren<{ link: string; boardId: string }>> = ({
  link,
  boardId,
  children,
}) => {
  if (link) {
    return (
      <a style={{ color: "inherit" }} href={"/" + boardId + "/" + link}>
        {children}
      </a>
    );
  }
  return <>{children}</>;
};
