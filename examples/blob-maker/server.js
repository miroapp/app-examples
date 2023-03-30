const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const blobshape = require("blobshape");

app.use(function (req, res, next) {
  // middleware for debugging requests
  // console.log(req)
  next();
});

app.use("/src", express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/app.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/app.html"));
});

app.get("/blob", (req, res) => {
  const seed = req.query.seed || null;
  const edges = req.query.edges || 5;
  const colour = req.query.colour || "2196F3";
  const opacity = req.query.opacity || 100;

  const { path } = blobshape({ seed: seed, edges: parseInt(edges) });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 400 400" ><path fill="#${colour}" fill-opacity="${opacity}%" d="${path}" /></svg>`;

  res.set("Content-Type", "image/svg+xml");
  res.send(Buffer.from(svg));
});

app.get("/create-blob", (req, res) => {
  const edges = req.query.edges;
  const { seedValue } = blobshape({ size: edges, edges: parseInt(edges) });

  res.send(`${seedValue}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
