"use client";

import * as React from "react";
import { MiroProvider } from "@mirohq/websdk-react-hooks";

import { useBreakout } from "./hooks";
import { BreakoutManager } from "./components/BreakoutManager";
import { WaitingRoom } from "./components/WaitingRoom/WaitingRoom";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/ErrorBoundary";

const App: React.FC = () => {
  const { isFacilitator, breakout } = useBreakout();

  const areYouReady = isFacilitator || !breakout;

  return (
    <ErrorBoundary>
      <MiroProvider>
        {areYouReady ? <BreakoutManager /> : <WaitingRoom />}
      </MiroProvider>
    </ErrorBoundary>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
