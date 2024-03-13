import * as React from "react";
import { MiroProvider } from "@mirohq/websdk-react-hooks";

import { useBreakout } from "./hooks";
import { BreakoutManager } from "./components/BreakoutManager";
import { WaitingRoom } from "./components/WaitingRoom/WaitingRoom";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/ErrorBoundary";

const App: React.FC = () => {
  const { isFacilitator, breakout } = useBreakout();
  const [waitingRoomRendered, setWaitingRoomRendered] = React.useState(false);
  const [BreakoutManagerRendered, setBreakoutManagerRendered] = React.useState(false);

  const areYouReady = isFacilitator || !breakout;

  const renderWaitingRoom = () => {
    if (!waitingRoomRendered) {
      setWaitingRoomRendered(true);
    }
  };
  
  const renderBreakoutManager = () => {
    if (!BreakoutManagerRendered) {
      setBreakoutManagerRendered(true);
    }
  };  

  const hasBreakoutManager = !BreakoutManagerRendered ? <BreakoutManager onRender={renderBreakoutManager} /> : null
  const haswaitingRoom = !waitingRoomRendered ? <WaitingRoom onRender={renderWaitingRoom} /> : null
  
  
  return (
    <ErrorBoundary>
      <MiroProvider>
        {areYouReady ? hasBreakoutManager : haswaitingRoom }
      </MiroProvider>
    </ErrorBoundary>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
