"use client";

import { useEffect } from "react";

export const MiroSDKInit = () => {
  useEffect(() => {
    miro.board.ui.on("icon:click", async () => {
      await miro.board.ui.openPanel({ url: "/panel" });
    });
  });

  return null;
};
