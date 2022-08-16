/* This program positions sticky notes in a grid system */

const axios = require("axios").default;
require("dotenv").config();
const data = require("./DATA");

let offsetY = 0;
var prev_x_cords = 0;
var prev_y_cords = 0;

data.notes.forEach((note, index) => {
  if (index >= 4 && index % 4 === 0) {
    offsetY++;
    prev_x_cords = 0;
    prev_y_cords = 150 * offsetY;

    const options = {
      method: "POST",
      url: "https://api.miro.com/v2/boards/<your-board-id>/sticky_notes",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      data: {
        data: note.data,
        style: note.style,
        position: { origin: "center", x: prev_x_cords, y: prev_y_cords },
        geometry: { height: 150 },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    prev_x_cords = prev_x_cords + 150;
  } else {
    const options = {
      method: "POST",
      url: "https://api.miro.com/v2/boards/<your-board-id>/sticky_notes",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      data: {
        data: note.data,
        style: note.style,
        position: { origin: "center", x: prev_x_cords, y: prev_y_cords },
        geometry: { height: 150 },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.id);
        console.log(prev_x_cords);
        console.log(prev_y_cords);
      })
      .catch(function (error) {
        console.error(error);
      });

    prev_x_cords = prev_x_cords + 150;
  }
});
