import * as React from "react";
import ReactDOM from "react-dom";
import { Miro, GitHub } from "./components";

function App() {
  const [selectedTab, setSelectedTab] = React.useState("github");

  const handleSelectTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <div className="tabs">
          <div className="tabs-header-list">
            <div
              tabIndex={0}
              className={`tab ${selectedTab === "github" && "tab-active"}`}
              onClick={() => handleSelectTab("github")}
            >
              <div className="tab-text tab-badge">Choose from GitHub</div>
            </div>
            <div
              tabIndex={0}
              className={`tab ${selectedTab === "miro" && "tab-active"}`}
              onClick={() => handleSelectTab("miro")}
            >
              <div className="tab-text tab-badge">Convert from Miro</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs1 ce12">
        {selectedTab === "github" ? <GitHub /> : <Miro />}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
