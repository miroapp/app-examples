import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import AssetView from "../components/AssetView";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="main">
      <Routes>
        <Route
          path="/index.html"
          element={
            <Home
              signedIn={signedIn}
              setSignedIn={(value) => {
                setSignedIn(value);
              }}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              signedIn={signedIn}
              setSignedIn={(value) => {
                setSignedIn(value);
              }}
            />
          }
        />
        <Route
          path="/index.html/:collectionName/:collectionId"
          element={<AssetView />}
        />
        <Route path="/:collectionName/:collectionId" element={<AssetView />} />
      </Routes>
    </div>
  );
}

export default App;
