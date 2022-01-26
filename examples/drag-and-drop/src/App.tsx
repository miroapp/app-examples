function App() {
  const images = [
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-projects.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-account.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-product.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-ux-research.svg",
    "https://static-website.miro.com/static/images/page/mr-features-1/tour-m-learn.svg",
  ];


  return (
    <div className="main">
      {images.map((image, index) => {
            return (
              <img
                src={image}
                className="miro-draggable draggable-item"
                key={index}
              />
            );
          })}
    </div>
  );
}

export default App;
