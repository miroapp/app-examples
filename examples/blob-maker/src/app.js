const { board } = window.miro;

let edges = 5;
let colour = "2196F3";
let opacity = 100;
let seed = 1234;

/** Initialises UI with first SVG blob, adds controls and listeners */
async function init() {
  const svgBlob = document.getElementById("svg-blob");

  const blobSeed = await fetch("/create-blob?edges=5").then((response) =>
    response.text()
  );

  svgBlob.src = `/blob?seed=${blobSeed}`;

  await board.ui.on("drop", async ({ x, y, target }) => {
    try {
      await board.createImage({
        x,
        y,
        url: target.src,
      });
    } catch (error) {
      console.log(error);
      console.log(
        `Drag and drop svgs do not work served from localhost 127.0.0.1, \
          please deploy app.`
      );
    }
  });

  const sliderComplexity = document.getElementById("complexity");
  const sliderOpacity = document.getElementById("opacity");
  const colorPicker = document.getElementById("colorPicker");
  const regenerateButton = document.getElementById("regenerate");

  sliderComplexity.oninput = function () {
    edges = this.value;
    fetch(`/create-blob?edges=${edges}`)
      .then((response) => response.text())
      .then((data) => {
        seed = data;
        setSvgSource();
      });
  };

  sliderOpacity.oninput = function () {
    opacity = this.value;
    setSvgSource();
  };

  colorPicker.addEventListener("change", watchColorPicker, false);

  regenerateButton.addEventListener("click", regenerateBlob, false);

  /**
   * Watches for colour picker changes and parses to url.
   * @param {string} event - Colour string #xxxxx returned for colour picker.
   */
  function watchColorPicker(event) {
    // colour hash doesn't play well in urls so stripping hash
    colour = event.target.value.split("#")[1];
    setSvgSource();
  }

  /** Regenerates blob with defined edges */
  function regenerateBlob() {
    fetch(`/create-blob?edges=${edges}`)
      .then((response) => response.text())
      .then((data) => {
        seed = data;
        setSvgSource();
      });
  }

  /** Regenerates blob with defined edges */
  function setSvgSource() {
    svgBlob.src = `
      /blob?seed=${seed}
      &edges=${edges}
      &colour=${colour}
      &opacity=${opacity}
    `;
  }
}

init();
