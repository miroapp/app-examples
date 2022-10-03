// Require sensitive environment variables (oauthToken, Miro boardID)
require("dotenv").config();

// Require express for server and handlebars for clientside rendering
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const { Miro } = require("@mirohq/miro-node");

const miro = new Miro();
const USER_ID = "WE_DONT_NEED_A_REAL_ID_FOR_THIS_EXAMPLE";

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
app.post("/upload-csv", upload.single("csv"), async function (req, res) {
  if (!(await miro.isAuthorized(USER_ID))) {
    res.redirect(miro.getAuthUrl());
  }
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
  if (!(await miro.isAuthorized(USER_ID))) {
    res.redirect(miro.getAuthUrl());
  }

  const { content } = req.body;

  const TAG_COLORS = ["blue", "red", "yellow", "green"];
  const CSV_ROW_STRUCTURE = [
    "title",
    "description",
    "tag",
    "tag",
    "tag",
    "tag",
  ];
  const CSV_ROW_LENGTH = CSV_ROW_STRUCTURE.length;
  const NUMBER_OF_TAGS = CSV_ROW_STRUCTURE.filter(
    (type) => type === "tag"
  ).length;
  const COLUMN_WIDTH = 400;
  const STICKY_WIDTH = COLUMN_WIDTH - 200;
  const MAX_STICKIES_PER_COLUMN = 8;
  const STICKY_SPACING = 40;

  const TABLE_HEIGHT = MAX_STICKIES_PER_COLUMN * STICKY_WIDTH + COLUMN_WIDTH;
  const COLUMNS_NEEDED = Math.ceil(
    content.length / CSV_ROW_LENGTH / MAX_STICKIES_PER_COLUMN
  );
  const board = await miro.as(USER_ID).getBoard(process.env.MIRO_BOARD_ID);

  const createStickiesAndTags = () => {
    let x = -(COLUMN_WIDTH / 2);
    let y = 0;

    const promises = [];
    for (let i = 0, limit = content.length; i < limit; i += CSV_ROW_LENGTH) {
      y =
        ((i % (MAX_STICKIES_PER_COLUMN * CSV_ROW_LENGTH)) + 4) * STICKY_SPACING;
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
          geometry: {
            width: STICKY_WIDTH,
          },
          position: {
            x,
            y,
          },
        })
      );

      for (let j = 0; j < NUMBER_OF_TAGS; j++) {
        const title = content[i + 2 + j];
        const randomNumber = Math.floor(999999 * Math.random()); // add random number to prevent double tags

        if (title) {
          promises.push(
            board.createTag({
              fillColor: TAG_COLORS[j],
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
    let COLOR = "#1a1a1a";
    let DOT_SIZE = 10;

    const coordinatesForPoints = [];
    const pointIndexesToConnectToEachOther = [];

    for (let i = 0; i <= COLUMNS_NEEDED; i++) {
      coordinatesForPoints.push(
        { x: COLUMN_WIDTH * i + 1, y: 0 },
        { x: COLUMN_WIDTH * i + 1, y: TABLE_HEIGHT }
      );
    }
    for (let i = 0; i <= COLUMNS_NEEDED * 2 + 1; i += 1) {
      // Connectors go from 1 shape to another (so NOT from X/Y to another X/y), so these indexes refer to the indexes of the circles in `coordinatesForPoints`

      if (i % 2 === 0) {
        pointIndexesToConnectToEachOther.push(
          [
            i,
            i + 2,
            {
              captions: [
                {
                  content: `COLUMN ${Math.ceil(i / 2) + 1}`,
                  position: "50%",
                  textAlignVertical: "top",
                },
              ],
            },
          ], // top left to right
          [i + 1, i + 3] // bottom left to right
        );
      }
      if (i <= COLUMNS_NEEDED) {
        pointIndexesToConnectToEachOther.push(
          [i * 2, i * 2 + 1] // top to bottom
        );
      }
    }

    const promises = coordinatesForPoints.map(({ x, y }) =>
      board.createShapeItem({
        data: {
          shape: "circle",
        },
        style: {
          borderColor: COLOR,
          borderWidth: "2.0",
        },
        geometry: {
          width: DOT_SIZE,
          height: DOT_SIZE,
        },
        position: {
          origin: "center",
          x,
          y,
        },
      })
    );
    const points = await Promise.all(promises);

    const style = {
      color: COLOR,
      fontSize: "14",
      strokeColor: COLOR,
      strokeWidth: "1.0",
      startStrokeCap: "none",
      endStrokeCap: "none",
    };

    const connections = pointIndexesToConnectToEachOther.map(
      ([a, b, data]) =>
        points[b]?.id &&
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

  try {
    await createTable();
  } catch (e) {
    console.error("error creating the table:", e);
  }
  const stickiesAndTagsCreationPromises = createStickiesAndTags();
  let stickiesAndTags = [];
  try {
    stickiesAndTags = await Promise.all(stickiesAndTagsCreationPromises);
  } catch (e) {
    console.error("Error creating stickies and tags:", e);
  }

  if (stickiesAndTags?.length) {
    try {
      await tagStickies(stickiesAndTags);
    } catch (e) {
      console.error("error tagging stickies", e);
    }
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
    let board;
    let allItems;
    try {
      board = await miro.as(USER_ID).getBoard(process.env.MIRO_BOARD_ID);
    } catch (e) {
      console.error("error getting board", e);
    }
    try {
      allItems = await board.getAllItems({ type: "sticky_note" });
    } catch (e) {
      console.error(
        "error getting all items for board",
        { boardId: process.env.MIRO_BOARD_ID },
        e
      );
    }

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
    const board = await miro.as(USER_ID).getBoard(process.env.MIRO_BOARD_ID);
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
    const board = await miro.as(USER_ID).getBoard(process.env.MIRO_BOARD_ID);
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

  const board = await miro.as(USER_ID).getBoard(process.env.MIRO_BOARD_ID);
  const stickyNote = await board.createStickyNoteItem({
    data: {
      content: `${title} ${description}`,
      shape: "square",
    },
  });

  if (tag) {
    const { id } = await board.createTag({
      title: tag,
      fillColor: "blue",
    });
    await stickyNote.attachTag(id.toString());
  }

  res.redirect(301, "/create-sticky");
});

// ROUTE(POST): UPDATE EXISTING STICKY

app.post("/update-sticky", async function (req, res) {
  let { id, content } = req.body;

  const board = await miro.as(USER_ID).getBoard(process.env.MIRO_BOARD_ID);
  const stickyNote = await board.getStickyNoteItem(id);
  await stickyNote.update({ data: { content } });

  res.redirect(301, "/update-sticky");
});

// ROUTE(POST): DELETE EXISTING STICKY NOTE

app.post("/delete-sticky", async function (req, res) {
  let { id } = req.body;

  const board = await miro.as(USER_ID).getBoard(process.env.MIRO_BOARD_ID);
  const stickyNote = await board.getStickyNoteItem(id);
  await stickyNote.delete();

  res.redirect(301, "/get-sticky");
});

app.listen(8000, () => {
  console.log("The web server has started on port 8000");
});
