"use client";

import * as React from "react";
import { useBreakout } from "./hooks";
import { BreakoutManager } from "./BreakoutManager";
import { WaitingRoom } from "./WaitingRoom";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  const { isFacilitator, breakout } = useBreakout();

  return isFacilitator || !breakout ? <BreakoutManager /> : <WaitingRoom />;
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
