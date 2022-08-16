/* This program keeps adding sticky notes horizonatally in the same way that the CTRL+D shotcut does in the UI */

const axios = require("axios").default;
require("dotenv").config();
const data = require("./DATA");

// x and y coordinates to be used in positioning sticky notes
var x_cord = 0;
var y_cord = 0;

data.notes.forEach((note) => {
  // API options: method, url, headers and sticky note data
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
      position: { origin: "center", x: x_cord, y: y_cord },
      geometry: { height: 150 },
    },
  };

  // Make POST request to add current sticky note
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // Update the x coordinate for positioning of next sticky note
  x_cord = x_cord + 150;
});
