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

// Require axios for http requests:
const axios = require("axios");

// Require body-parser to parse form submissions
var bodyParser = require("body-parser");
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

// Declare global access_token variable
let oauthAccessToken;

let tagData;
let tagData2;
let tagData3;
let tagData4;

// Clean Tag IDs from response
let tagId;
let tagId2;
let tagId3;
let tagId4;

// Declare variables for connector endpoint ids
let endpoint1Id;
let endpoint2Id;
let endpoint3Id;
let endpoint4Id;
let endpoint5Id;
let endpoint6Id;
let endpoint7Id;
let endpoint8Id;
let endpoint9Id;
let endpoint10Id;
let endpoint11Id;
let endpoint12Id;

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
  let fileRows = ['No file uploaded'];
  
  if (req.file) {
    fileRows = []
    // open uploaded file
    csv
      .parseFile(req.file.path)
      .on("data", function(data) {
        fileRows.push(data); // push each row
      })
      .on("end", function() {
        fs.unlinkSync(req.file.path); // remove temp file
        fileRows.shift(); // remove csv headers (start with actual content)
      });
    console.log(fileRows)
  }
  res.render("uploadCSV.hbs", { fileRows });
});

// ROUTE(POST): GENERATE CONNECTORS & CREATE STICKY NOTES/TAGS FROM CSV CONTENT,
app.post("/create-from-csv", async function (req, res) {
  let { content } = req.body;

  const board = await miro.as(USER_ID).getBoard(MIRO_BOARD_ID);
  const ROW_LENGTH = 6;
  const colors = [
    'blue',
    'red',
    'yellow',
    'green'
  ]
  
  for (let i = 0, limit = content.length; i < limit; i += ROW_LENGTH) {
    let x = 0;
    let y = 40 * i;
    
    if (i > 50 && i < 100) { x = 400; y -= 1920 }
    else if (i >= 100 && i < 147) { x = 800; y -=3840 }
    else if (i >= 147) { x = 1200; y -= 5760 }
    
    const sticky = await board.createStickyNoteItem({
      data: {
        content:
          `<strong>${content[i]}</strong>` +
          "<br>" +
          `${content[i + 1]}`,
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
        origin: "center",
      },
    })
    for (let j = 0; j < 4; j++) {
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const tag = await board.createTag({
        fillColor: colors[j],
        title: `${content[i + 2 + j]} (${randomNumber})`,
      })
      
      await sticky.attachTag(tag.id.toString())
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
