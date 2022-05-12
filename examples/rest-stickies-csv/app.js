// Require sensitive environment variables (oauthToken, Miro boardID)
require("dotenv/config");

// Require express for server and handlebars for clientside rendering
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

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

// Declare global variable for Miro API endpoint (App Cards)
const requestUrl = `https://api.miro.com/v2/boards/${process.env.boardId}/sticky_notes`;

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

// <-------- ROUTES -------->

// ROUTE (GET): Retrieve access_token from OAuth redirect
app.get("/authorized", (req, res) => {
  let parsedUrl = req.url;
  let urlValues = parsedUrl.split("?");
  console.log(urlValues[1]);
  oauthAccessToken = urlValues[1];

  res.render("authorizeApp");
});

// ROUTE (POST): Trigger the authorization flow
app.post("/", function (req, res) {
  if (oauthAccessToken) {
    res.render("authorizeApp");
  } else {
    res.redirect(
      "https://miro.com/oauth/authorize?response_type=code&client_id=" +
        process.env.clientID +
        "&redirect_uri=" +
        process.env.redirectURL
    );
  }
});

// ROUTE(GET): VIEW UPLOAD .CSV OPTION
app.get("/upload-csv", (req, res) => {
  if (oauthAccessToken) {
    res.render("uploadCSV");
  } else {
    res.redirect(
      "https://miro.com/oauth/authorize?response_type=code&client_id=" +
        process.env.clientID +
        "&redirect_uri=" +
        process.env.redirectURL
    );
  }
});

// ROUTE(POST): UPLOAD .CSV FILE
app.post("/upload-csv", upload.single("csv"), function (req, res) {
  //console.log("upload triggered, here is req :" + req)
  const fileRows = [];

  // open uploaded file
  csv
    .parseFile(req.file.path)
    .on("data", function (data) {
      fileRows.push(data); // push each row
    })
    .on("end", function () {
      console.log(fileRows);
      fs.unlinkSync(req.file.path); // remove temp file
      fileRows.shift(); // remove csv headers (start with actual content)
    });
  res.render("uploadCSV.hbs", { fileRows });
});

// ROUTE(POST): CREATE STICKIES AND TAGS FROM CSV CONTENT
app.post("/create-from-csv", function (req, res) {
  let csvCardContent = req.body.Content;

  // Declare variables for sticky content
  let stickyContent;

  // Declare variables for tag content
  let tagContent1;
  let tagContent2;
  let tagContent3;
  let tagContent4;

  // Declare variables to hold individual tag content
  let tagContentCollection1 = [];
  let tagContentCollection2 = [];
  let tagContentCollection3 = [];
  let tagContentCollection4 = [];

  // Loop through and make request for each line of CSV content
  // Set fixed length for array to avoid manipulation of length reference
  let length = csvCardContent.length;
  for (let i = 0; i < length; i++) {
    // Capture sticky content from csv content
    stickyContent = {
      content:
        `<strong>${csvCardContent.slice(i).shift(i++)}</strong>` +
        "<br>" +
        `${csvCardContent.slice(i).shift(i++)}`,
    };
    // Capture tag content from csv content, for each non-sticky related column
    tagContent1 = { tagContent: `${csvCardContent.slice(i).shift(i++)}` };
    tagContent2 = { tagContent: `${csvCardContent.slice(i).shift(i++)}` };
    tagContent3 = { tagContent: `${csvCardContent.slice(i).shift(i++)}` };
    tagContent4 = { tagContent: `${csvCardContent.slice(i).shift()}` };

    // Sort tag content by csv row
    tagContentCollection1.push(
      tagContent1.tagContent,
      tagContent1.tagContent,
      tagContent1.tagContent,
      tagContent1.tagContent,
      tagContent1.tagContent,
      tagContent1.tagContent
    );

    tagContentCollection2.push(
      tagContent2.tagContent,
      tagContent2.tagContent,
      tagContent2.tagContent,
      tagContent2.tagContent,
      tagContent2.tagContent,
      tagContent2.tagContent
    );

    tagContentCollection3.push(
      tagContent3.tagContent,
      tagContent3.tagContent,
      tagContent3.tagContent,
      tagContent3.tagContent,
      tagContent3.tagContent,
      tagContent3.tagContent
    );

    tagContentCollection4.push(
      tagContent4.tagContent,
      tagContent4.tagContent,
      tagContent4.tagContent,
      tagContent4.tagContent,
      tagContent4.tagContent,
      tagContent4.tagContent
    );

    // API request configuration for Create Sticky API
    let payload = JSON.stringify({
      data: {
        content: `${stickyContent.content}`,
        shape: "square",
      },
      style: {
        fillColor: "light_pink",
        textAlign: "left",
        textAlignVertical: "top",
      },
      position: {
        x: 0,
        y: 40 * i,
        origin: "center",
      },
    });

    // API Request configuration
    let config = {
      method: "post",
      url: `https://api.miro.com/v2/boards/${process.env.boardId}/sticky_notes`,
      headers: {
        Authorization: `Bearer ${oauthAccessToken}`,
        "Content-Type": "application/json",
      },
      data: payload,
    };

    // Call Miro API to create sticky, create tag, and attach tag to sticky:
    async function callMiro() {
      // Create Sticky
      try {
        let response = await axios(config);
        let miroData = JSON.stringify(response.data.id);
        console.log("Sticky ID : " + miroData);
        // Create tag
        async function createTag() {
          let tagPayload1 = JSON.stringify({
            fillColor: "blue",
            title:
              tagContentCollection1[i] +
              ` (${Math.floor(1000 + Math.random() * 9000)})`,
          });

          let tagPayload2 = JSON.stringify({
            fillColor: "red",
            title:
              tagContentCollection2[i] +
              ` (${Math.floor(1000 + Math.random() * 9000)})`,
          });

          let tagPayload3 = JSON.stringify({
            fillColor: "yellow",
            title:
              tagContentCollection3[i] +
              ` (${Math.floor(1000 + Math.random() * 9000)})`,
          });

          let tagPayload4 = JSON.stringify({
            fillColor: "green",
            title:
              tagContentCollection4[i] +
              ` (${Math.floor(1000 + Math.random() * 9000)})`,
          });

          let config1 = {
            method: "post",
            url: `https://api.miro.com/v2/boards/${process.env.boardId}/tags`,
            headers: {
              Authorization: `Bearer ${oauthAccessToken}`,
              "Content-Type": "application/json",
            },
            data: tagPayload1,
          };

          let config2 = {
            method: "post",
            url: `https://api.miro.com/v2/boards/${process.env.boardId}/tags`,
            headers: {
              Authorization: `Bearer ${oauthAccessToken}`,
              "Content-Type": "application/json",
            },
            data: tagPayload2,
          };

          let config3 = {
            method: "post",
            url: `https://api.miro.com/v2/boards/${process.env.boardId}/tags`,
            headers: {
              Authorization: `Bearer ${oauthAccessToken}`,
              "Content-Type": "application/json",
            },
            data: tagPayload3,
          };

          let config4 = {
            method: "post",
            url: `https://api.miro.com/v2/boards/${process.env.boardId}/tags`,
            headers: {
              Authorization: `Bearer ${oauthAccessToken}`,
              "Content-Type": "application/json",
            },
            data: tagPayload4,
          };

          try {
            // API requests to Create Tag endpoint
            let tagResponse = await axios(config1);
            let tagResponse2 = await axios(config2);
            let tagResponse3 = await axios(config3);
            let tagResponse4 = await axios(config4);

            // Parse responses
            tagData = JSON.stringify(tagResponse.data.id);
            tagData2 = JSON.stringify(tagResponse2.data.id);
            tagData3 = JSON.stringify(tagResponse3.data.id);
            tagData4 = JSON.stringify(tagResponse4.data.id);

            // Clean Tag IDs from response
            tagId = tagData.replace(/['"]+/g, "");
            tagId2 = tagData2.replace(/['"]+/g, "");
            tagId3 = tagData3.replace(/['"]+/g, "");
            tagId4 = tagData4.replace(/['"]+/g, "");

            // Attach tag 1
            async function attachTag() {
              let stickyId = miroData.replace(/['"]+/g, "");
              let attachConfig = {
                method: "post",
                url: `https://api.miro.com/v2/boards/${process.env.boardId}/items/${stickyId}?tag_id=${tagId}`,
                headers: {
                  Authorization: `Bearer ${oauthAccessToken}`,
                  "Content-Type": "application/json",
                },
              };
              try {
                // API Request to attach tag to sticky note
                let response = await axios(attachConfig);
                let attachData = JSON.stringify(response.data);
                console.log(attachData);
                console.log("attach url : " + attachConfig.url);
                return attachData;
              } catch (err) {
                console.log(`ERROR on attachTag(): ${err}`);
              }
            }
            attachTag();

            // Attach tag 2
            async function attachTag2() {
              let stickyId = miroData.replace(/['"]+/g, "");
              let attachConfig = {
                method: "post",
                url: `https://api.miro.com/v2/boards/${process.env.boardId}/items/${stickyId}?tag_id=${tagId2}`,
                headers: {
                  Authorization: `Bearer ${oauthAccessToken}`,
                  "Content-Type": "application/json",
                },
              };
              try {
                // API Request to attach tag to sticky note
                let response = await axios(attachConfig);
                let attachData = JSON.stringify(response.data);
                console.log(attachData);
                console.log("attach url : " + attachConfig.url);
                return attachData;
              } catch (err) {
                console.log(`ERROR on attachTag2(): ${err}`);
              }
            }
            attachTag2();

            // Attach tag 3
            async function attachTag3() {
              let stickyId = miroData.replace(/['"]+/g, "");
              let attachConfig = {
                method: "post",
                url: `https://api.miro.com/v2/boards/${process.env.boardId}/items/${stickyId}?tag_id=${tagId3}`,
                headers: {
                  Authorization: `Bearer ${oauthAccessToken}`,
                  "Content-Type": "application/json",
                },
              };
              try {
                // API Request to attach tag to sticky note
                let response = await axios(attachConfig);
                let attachData = JSON.stringify(response.data);
                console.log(attachData);
                console.log("attach url : " + attachConfig.url);
                return attachData;
              } catch (err) {
                console.log(`ERROR on attachTag3(): ${err}`);
              }
            }
            attachTag3();

            // Attach tag 4
            async function attachTag4() {
              let stickyId = miroData.replace(/['"]+/g, "");
              let attachConfig = {
                method: "post",
                url: `https://api.miro.com/v2/boards/${process.env.boardId}/items/${stickyId}?tag_id=${tagId4}`,
                headers: {
                  Authorization: `Bearer ${oauthAccessToken}`,
                  "Content-Type": "application/json",
                },
              };
              try {
                // API Request to attach tag to sticky note
                let response = await axios(attachConfig);
                let attachData = JSON.stringify(response.data);
                console.log(attachData);
                console.log("attach url : " + attachConfig.url);
                return attachData;
              } catch (err) {
                console.log(`ERROR on attachTag4(): ${err}`);
              }
            }
            attachTag4();
          } catch (err) {
            console.log(`ERROR on createTag(): ${err}`);
          }
        }
        createTag();
      } catch (err) {
        console.log(`ERROR: ${err}`);
      }
    }
    callMiro();
  }
  // Redirect to 'List Stickies' view on success
  res.redirect(301, "/get-sticky");
});

// ROUTE(GET): RENDER HOME VIEW
app.get("/", (req, res) => {
  res.render("home");
});

// ROUTE(GET) RETRIEVE STICKY DATA / 'List Stickies'
app.get("/get-sticky", (req, res) => {
  if (oauthAccessToken) {
    let config = {
      method: "get",
      url: requestUrl,
      headers: {
        Authorization: `Bearer ${oauthAccessToken}`,
      },
    };
    // Function to call Miro API/retrieve Sticky Notes
    async function getStickies() {
      try {
        let response = await axios(config);
        let miroData = response.data.data;
        res.render("viewCard.hbs", { miroData });
      } catch (err) {
        console.log(`ERROR: ${err}`);
      }
      return;
    }
    getStickies();
  } else {
    res.redirect(
      "https://miro.com/oauth/authorize?response_type=code&client_id=" +
        process.env.clientID +
        "&redirect_uri=" +
        process.env.redirectURL
    );
  }
});

// ROUTE(GET): RENDER 'CREATE CARD' VIEW
app.get("/create-sticky", (req, res) => {
  if (oauthAccessToken) {
    res.render("createCard");
  } else {
    res.redirect(
      "https://miro.com/oauth/authorize?response_type=code&client_id=" +
        process.env.clientID +
        "&redirect_uri=" +
        process.env.redirectURL
    );
  }
});

// ROUTE(GET): RENDER 'UPDATE CARD' VIEW
app.get("/update-sticky", (req, res) => {
  if (oauthAccessToken) {
    res.render("updateCard");
  } else {
    res.redirect(
      "https://miro.com/oauth/authorize?response_type=code&client_id=" +
        process.env.clientID +
        "&redirect_uri=" +
        process.env.redirectURL
    );
  }
});

// ROUTE(GET): RENDER 'DELETE CARD' VIEW
app.get("/delete-sticky", (req, res) => {
  if (oauthAccessToken) {
    res.render("deleteCard");
  } else {
    res.redirect(
      "https://miro.com/oauth/authorize?response_type=code&client_id=" +
        process.env.clientID +
        "&redirect_uri=" +
        process.env.redirectURL
    );
  }
});

// ROUTE(POST): CREATE STICKY
app.post("/create-sticky", function (req, res) {
  let stickyTitle = req.body.Title;
  let stickyDescription = req.body.Description;
  let stickyTag1 = req.body.Tag1;

  // API Request Payload
  let payload = JSON.stringify({
    data: {
      content: stickyTitle + " " + stickyDescription,
      shape: "square",
    },
    style: {
      fillColor: "light_blue",
      textAlign: "center",
      textAlignVertical: "top",
    },
    position: {
      x: 0,
      y: 0,
      origin: "center",
    },
  });

  // API Request configuration
  let config = {
    method: "post",
    url: `https://api.miro.com/v2/boards/${process.env.boardId}/sticky_notes`,
    headers: {
      Authorization: `Bearer ${oauthAccessToken}`,
      "Content-Type": "application/json",
    },
    data: payload,
  };

  // Call Miro API to create Sticky:
  async function callMiro() {
    let miroData;
    let tagId;
    try {
      // Call Create Sticky endpoint
      let response = await axios(config);
      miroData = JSON.stringify(response.data.id);
      tagId = await createTag();
      // Function to create tag item
      async function createTag() {
        let tagPayload = JSON.stringify({
          fillColor: "blue",
          title: stickyTag1,
        });
        let config = {
          method: "post",
          url: `https://api.miro.com/v2/boards/${process.env.boardId}/tags`,
          headers: {
            Authorization: `Bearer ${oauthAccessToken}`,
            "Content-Type": "application/json",
          },
          data: tagPayload,
        };
        try {
          let tagResponse = await axios(config);
          tagData = JSON.stringify(tagResponse.data.id);
          console.log("tag id: " + tagData);
          tagId = tagData.replace(/['"]+/g, "");
          return tagId;
        } catch (err) {
          console.log(`ERROR on createTag(): ${err}`);
        }
      }
      createTag();
      // Function to attach tag to sticky
      async function attachTag() {
        let stickyId = miroData.replace(/['"]+/g, "");
        let attachConfig = {
          method: "post",
          url: `https://api.miro.com/v2/boards/${process.env.boardId}/items/${stickyId}?tag_id=${tagId}`,
          headers: {
            Authorization: `Bearer ${oauthAccessToken}`,
            "Content-Type": "application/json",
          },
        };
        try {
          let response = await axios(attachConfig);
          let attachData = JSON.stringify(response.data);
          console.log(attachData);
          return attachData;
        } catch (err) {
          console.log(`ERROR: ${err}`);
        }
      }
      attachTag();
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  }
  callMiro();
  res.redirect(301, "/get-sticky");
});

// ROUTE(POST): UPDATE EXISTING STICKY

app.post("/update-sticky", function (req, res) {
  let stickyId = req.body.Id;
  let newStickyContent = req.body.Content;

  // Miro request URL for POST Create App sticky:
  let stickyRequestUrl = requestUrl + `/${stickyId}`;

  let payload = JSON.stringify({
    data: { content: newStickyContent },
  });
  // API Request configuration
  let config = {
    method: "patch",
    url: stickyRequestUrl,
    headers: {
      Authorization: `Bearer ${oauthAccessToken}`,
      "Content-Type": "application/json",
    },
    data: payload,
  };
  // Call Miro API to update App Card:
  async function callMiroUpdate() {
    try {
      let response = await axios(config);
      let miroData = JSON.stringify(response.data);
      return miroData;
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  }
  callMiroUpdate();
  res.redirect(301, "/get-sticky");
});

// ROUTE(POST): DELETE EXISTING STICKY NOTE

app.post("/delete-sticky", function (req, res) {
  console.log("Card ID : " + req.body.Id);
  let stickyId = req.body.Id;

  // Miro request URL for POST Create App Card:
  let stickyRequestUrl = requestUrl + `/${stickyId}`;

  // Request configuration
  let config = {
    method: "delete",
    url: stickyRequestUrl,
    headers: {
      Authorization: `Bearer ${oauthAccessToken}`,
      "Content-Type": "application/json",
    },
  };
  // Call Miro API to delete App Card:
  async function callMiroDelete() {
    try {
      let response = await axios(config);
      let miroData = JSON.stringify(response.data);
      return miroData;
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  }
  callMiroDelete();
  res.redirect(301, "/get-sticky");
});

app.listen(8000, () => {
  console.log("The web server has started on port 8000");
});
