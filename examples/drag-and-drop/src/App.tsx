import { useState, useEffect } from "react";

type Icon = Record<string, any>;

function App() {
  const images = [
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-projects.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-account.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-product.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-ux-research.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-learn.svg",
  ];

  const [icons, setIcons] = useState<Array<Icon>>([]);

  const [selectedTab, setSelectedTab] = useState("images");
  const [searchTerm, setSearchTerm] = useState("icon");

  const handleSelectTab = (tabSelection: string) => {
    setSelectedTab(tabSelection);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    fetch(
      "https://miro.com/thenounproject/?query=" +
        searchTerm +
        "&limit=50&offset=0",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIcons([...data.icons]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  return (
    <div className="main">
      <div className="tabs">
        <div className="tabs-header-list">
          <div
            tabIndex={0}
            className={`tab ${selectedTab === "images" && "tab-active"}`}
            onClick={() => handleSelectTab("images")}
          >
            <div className="tab-text tab-badge" data-badge={images.length}>
              Images
            </div>
          </div>
          <div
            tabIndex={0}
            className={`tab ${selectedTab === "icons" && "tab-active"}`}
            onClick={() => handleSelectTab("icons")}
          >
            <div className="tab-text tab-badge">Icons</div>
          </div>
        </div>
      </div>

      {selectedTab === "images" ? (
        <>
          {images.map((image, index) => {
            return (
              <img
                src={image}
                className="miro-draggable draggable-item"
                key={index}
              />
            );
          })}
        </>
      ) : (
        <>
          <div className="form-group">
            <input
              className="input"
              type="text"
              placeholder="Search"
              onChange={(e) => handleInputChange(e.target.value)}
              value={searchTerm}
            />
          </div>

          <div className="preview-container">
            {icons.map((icon: Icon, index) => {
              return (
                <img
                  src={icon.preview_url}
                  className="miro-draggable draggable-item"
                  key={index}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
