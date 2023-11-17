"use client";

import * as React from "react";
import { useBreakout } from "./hooks";
import { BreakoutManager } from "./components/BreakoutManager";
import { WaitingRoom } from "./components/WaitingRoom";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/ErrorBoundary";

const App: React.FC = () => {
  const { isFacilitator, breakout } = useBreakout();

  const areYouReady = isFacilitator || !breakout;

  return (
    <ErrorBoundary>
      {areYouReady ? <BreakoutManager /> : <WaitingRoom />}
    </ErrorBoundary>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
