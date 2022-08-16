/* This program positions sticky notes in a board with existing content */

const axios = require("axios").default;
require("dotenv").config();
const dupl_data = require("./DATA-TWO");

const options = {
  method: "GET",
  url: "https://api.miro.com/v2/boards/<your-board-id>/items?limit=50",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
};

axios
  .request(options)
  .then((response) => {
    return response.data.data;
  })
  .then((data) => {
    console.log(data);
    let boardPos = {
      x: [],
      y: [],
    };

    data.forEach((returnedNote) => {
      boardPos.x.push(returnedNote.position.x);
      boardPos.y.push(returnedNote.position.y);
    });

    return boardPos;
  })
  .then((positionObj) => {
    // Sort the integers in ascending order
    positionObj.x.sort(function (a, b) {
      return b - a;
    });

    console.log(positionObj.x);

    let tempX = [];
    let count = 0;

    dupl_data.notes.forEach((note) => {
      // Sticky Note already exists in the desired board location
      if (positionObj.x.includes(note.pos.x) || tempX.includes(note.pos.x)) {
        let latest_x_cord =
          count > 0 ? tempX[tempX.length - 1] : positionObj.x[0];
        let newXCord = latest_x_cord + 150;
        count++;

        tempX.push(newXCord);

        return axios.request({
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
            position: { origin: "center", x: newXCord, y: note.pos.y }, //
            geometry: { height: 150 },
          },
        });
      } else {
        // No Sticky Note in the desired board location
        tempX.push(note.pos.x);
        count++;

        return axios.request({
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
            position: { origin: "center", x: note.pos.x, y: note.pos.y }, //
            geometry: { height: 150 },
          },
        });
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });
