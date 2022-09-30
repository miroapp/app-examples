// Require sensitive environment variables (oauthToken, Miro boardID)
require("dotenv/config");

// Require express for server and handlebars for clientside rendering
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const { Miro, TagCreateRequest, StickyNoteData } = require("@mirohq/miro-node");

const miro = new Miro({
  clientId: process.env.MIRO_CLIENT_ID,
  clientSecret: process.env.MIRO_CLIENT_SECRET,
  redirectUrl: process.env.MIRO_REDIRECT_URL,
});
const USER_ID = "WE_DONT_NEED_A_REAL_ID";
const MIRO_BOARD_ID = "uXjVPTm8qe0=";

// Require body-parser to parse form submissions
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false, parameterLimit: 1000000 }));
app.use(bodyParser.json());

// Require multer and fast-csv for CSV upload functionality
const multer = require("multer");
const csv = require("fast-csv");
const fs = require("fs");
const upload = multer({ dest: "tmp/csv/" });

// Configure express-handlebars as our view engine:
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

// Configure handlebars
app.set("view engine", "hbs");

// <-------- ROUTES -------->

// ROUTE (GET): Retrieve access_token from OAuth redirect
app.get("/authorized", async (req, res) => {
  try {
    await miro.handleAuthorizationCodeRequest(USER_ID, req);
  } catch (e) {
    console.error(e);
  }

  res.render("authorizeApp");
});

// ROUTE (POST): Trigger the authorization flow
app.post("/", async function (req, res) {
  if (await miro.isAuthorized(USER_ID)) {
    res.render("authorizeApp");
    return;
  }

  res.redirect(miro.getAuthUrl());
});

// ROUTE(GET): VIEW UPLOAD .CSV OPTION
app.get("/upload-csv", async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    res.render("uploadCSV");
  } else {
    res.redirect(miro.getAuthUrl());
  }
});

// ROUTE(POST): UPLOAD .CSV FILE
app.post("/upload-csv", upload.single("csv"), function (req, res) {
  let fileRows = ["No file uploaded"];

  if (req.file) {
    fileRows = [];
    // open uploaded file
    csv
      .parseFile(req.file.path)
      .on("data", function (data) {
        fileRows.push(data); // push each row
      })
      .on("end", function () {
        fs.unlinkSync(req.file.path); // remove temp file
        fileRows.shift(); // remove csv headers (start with actual content)
      });
    console.log(fileRows);
  }
  res.render("uploadCSV.hbs", { fileRows });
});

// ROUTE(POST): GENERATE CONNECTORS & CREATE STICKY NOTES/TAGS FROM CSV CONTENT,
app.post("/create-from-csv", async function (req, res) {
  let { content } = req.body;

  const CSV_ROW_LENGTH = 6;
  const TABLE_HEIGHT = 2000;
  const COLUMN_WIDTH = 400;
  const STICKY_WIDTH = 40;
  const MAX_STICKIES_PER_COLUMN = 8;

  const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);

  const createStickiesAndTags = () => {
    const tagColors = ["blue", "red", "yellow", "green"];

    let x = 0;
    let y = 0;
    const promises = [];
    for (let i = 0, limit = content.length; i < limit; i += CSV_ROW_LENGTH) {
      y = (i % (MAX_STICKIES_PER_COLUMN * CSV_ROW_LENGTH)) * STICKY_WIDTH;
      if (i % (MAX_STICKIES_PER_COLUMN * CSV_ROW_LENGTH) === 0) {
        x += COLUMN_WIDTH;
      }

      promises.push(
        board.createStickyNoteItem({
          data: {
            content:
              `<strong>${content[i]}</strong>` + "<br>" + `${content[i + 1]}`,
            shape: "square",
          },
          style: {
            fillColor: "light_pink",
            textAlign: "left",
            textAlignVertical: "top",
          },
          position: {
            x,
            y,
          },
        })
      );

      for (let j = 0; j < 4; j++) {
        const title = content[i + 2 + j];
        const randomNumber = Math.floor(999999 * Math.random()); // add random number to prevent double tags

        if (title) {
          promises.push(
            board.createTag({
              fillColor: tagColors[j],
              title: `${title} (${randomNumber})`,
            })
          );
        }
      }
    }
    return promises;
  };

  const tagStickies = async (stickiesAndTags) => {
    const tagAttachmentPromises = [];
    const stickyIds = [];
    let lastId;

    const organized = stickiesAndTags.reduce((accumulator, item) => {
      if (item.type === "sticky_note") {
        lastId = item.id;
        accumulator[lastId] = [item];
        stickyIds.push(lastId);
      } else {
        accumulator[lastId].push(item.id);
      }

      return accumulator;
    }, {});

    stickyIds.map((stickyId) => {
      const [sticky, ...tags] = organized[stickyId];
      tags.map((id) => {
        tagAttachmentPromises.push(sticky.attachTag(id));
      });
    });

    await Promise.all(tagAttachmentPromises);
  };
  const createTable = async () => {
    const coordinatesForPoints = [
      { x: COLUMN_WIDTH, y: 0 },
      { x: COLUMN_WIDTH, y: TABLE_HEIGHT },
      { x: COLUMN_WIDTH * 2, y: 0 },
      { x: COLUMN_WIDTH * 2, y: TABLE_HEIGHT },
      { x: COLUMN_WIDTH * 3, y: 0 },
      { x: COLUMN_WIDTH * 3, y: TABLE_HEIGHT },
      { x: COLUMN_WIDTH * 4, y: 0 },
      { x: COLUMN_WIDTH * 4, y: TABLE_HEIGHT },
      { x: COLUMN_WIDTH * 5, y: 0 },
      { x: COLUMN_WIDTH * 5, y: TABLE_HEIGHT },
    ];
    const promises = coordinatesForPoints.map(({ x, y }) =>
      board.createShapeItem({
        data: {
          shape: "circle",
        },
        style: {
          borderColor: "#1a1a1a",
          borderWidth: "2.0",
        },
        geometry: {
          width: 10,
          height: 10,
        },
        position: {
          origin: "center",
          x: x - 200,
          y: y - 200,
        },
      })
    );
    const points = await Promise.all(promises);

    const style = {
      color: "#1a1a1a",
      fontSize: "14",
      strokeColor: "#000000",
      strokeWidth: "1.0",
      startStrokeCap: "none",
      endStrokeCap: "none",
    };

    const connections = [
      // top to bottom
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],

      // top ltr
      [
        0,
        2,
        {
          captions: [
            { content: "COLUMN 1", position: "50%", textAlignVertical: "top" },
          ],
        },
      ],
      [
        2,
        4,
        {
          captions: [
            { content: "COLUMN 2", position: "50%", textAlignVertical: "top" },
          ],
        },
      ],
      [
        4,
        6,
        {
          captions: [
            { content: "COLUMN 3", position: "50%", textAlignVertical: "top" },
          ],
        },
      ],
      [
        6,
        8,
        {
          captions: [
            { content: "COLUMN 4", position: "50%", textAlignVertical: "top" },
          ],
        },
      ],

      // bottom ltr
      [1, 3],
      [3, 5],
      [5, 7],
      [7, 9],
    ].map(([a, b, data]) =>
      board.createConnector({
        startItem: {
          id: points[a].id,
        },
        endItem: {
          id: points[b].id,
        },
        style,
        ...data,
      })
    );

    await Promise.all(connections);
  };

  await createTable();
  const stickiesAndTagsCreationPromises = createStickiesAndTags();
  const stickiesAndTags = await Promise.all(
    stickiesAndTagsCreationPromises
  ).catch((error) => {
    console.log("error creating sticky or tag", error);
  });

  if (stickiesAndTags.length) {
    await tagStickies(stickiesAndTags);
  }

  // Redirect to 'List Stickies' view on success
  res.redirect(301, "/get-sticky");
});

// ROUTE(GET): RENDER HOME VIEW
app.get("/", (req, res) => {
  res.render("home");
});

// ROUTE(GET) RETRIEVE STICKY DATA / 'List Stickies'
app.get("/get-sticky", async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);
    const allItems = await board.getAllItems({ type: "sticky_note" });

    const boardItems = [];
    for await (const item of allItems) {
      boardItems.push(item);
    }
    res.render("viewCard.hbs", { miroData: boardItems });
  } else {
    res.redirect(miro.getAuthUrl());
  }
});

// ROUTE(GET): RENDER 'CREATE CARD' VIEW
app.get("/create-sticky", async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    res.render("createCard");
  } else {
    res.redirect(miro.getAuthUrl());
  }
});

// ROUTE(GET): RENDER 'UPDATE CARD' VIEW
app.get("/update-sticky", async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);
    const allItems = await board.getAllItems({ type: "sticky_note" });

    const stickies = [];
    for await (const item of allItems) {
      stickies.push(item);
    }
    res.render("updateCard", { stickies });
  } else {
    res.redirect(miro.getAuthUrl());
  }
});

// ROUTE(GET): RENDER 'DELETE CARD' VIEW
app.get("/delete-sticky", async (req, res) => {
  if (await miro.isAuthorized(USER_ID)) {
    const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);
    const allItems = await board.getAllItems({ type: "sticky_note" });

    const stickies = [];
    for await (const item of allItems) {
      stickies.push(item);
    }
    res.render("deleteCard", { stickies });
  } else {
    res.redirect(miro.getAuthUrl());
  }
});

// ROUTE(POST): CREATE STICKY
app.post("/create-sticky", async function (req, res) {
  let { title, description, tag } = req.body;

  const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);
  const stickyNote = await board.createStickyNoteItem({
    data: {
      content: `${title} ${description}`,
      shape: StickyNoteData.ShapeEnum.Square,
    },
  });

  if (tag) {
    const { id } = await board.createTag({
      title: tag,
      fillColor: TagCreateRequest.FillColorEnum.Blue,
    });
    await stickyNote.attachTag(id.toString());
  }

  res.redirect(301, "/create-sticky");
});

// ROUTE(POST): UPDATE EXISTING STICKY

app.post("/update-sticky", async function (req, res) {
  let { id, content } = req.body;

  const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);
  const stickyNote = await board.getStickyNoteItem(id);
  await stickyNote.update({ data: { content } });

  res.redirect(301, "/update-sticky");
});

// ROUTE(POST): DELETE EXISTING STICKY NOTE

app.post("/delete-sticky", async function (req, res) {
  let { id } = req.body;

  const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);
  const stickyNote = await board.getStickyNoteItem(id);
  await stickyNote.delete();

  res.redirect(301, "/get-sticky");
});

app.listen(8000, () => {
  console.log("The web server has started on port 8000");
});
