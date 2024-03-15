//Create express app
const express = require("express");
const app = express();

//use fs and path to write to local file (store.json) where we keep our logged in users
const fs = require("fs");
const path = require("path");

//use this to decode the JWT token sent from Miro WebSDK front end
const jwt = require("jsonwebtoken");

//Use config dotenv to make enable use of environmental variables
require("dotenv").config();

//Define port and host
const port = "4000";
const host = "localhost";

// Import the cors middleware
const cors = require("cors");

let currentUser = "";

// Use cors middleware to allow requests from frontend server
app.use(cors({ origin: "http://localhost:3000" }));

// Function to set the current user from the JWT token
async function setCurrentUser(authHeader) {
  try {
    const token = authHeader.authorization.split(" ")[1];
    // Secret key is the Miro app client secret found in Miro App Settings page
    const secretKey = process.env.clientSecret;
    // Verify and decode the JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
      //return currentUser
      currentUser = decoded.user;
    });
  } catch (error) {
    console.log(error);
  }
}

// This route is used to send over the OAuth URL to the front end.
// When the user clicks on Login button, the front end will initiate the OAuth flow
// by opening the OAuth URL in a new window.
app.get("/", async (req, res) => {
  try {
    res.set("Content-Type", "application/json"); //ensure we can parse the response as JSON
    await setCurrentUser(req.headers);
    res.json(process.env.OAuthURL);
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

// This route is used to handle the redirect URL from the 3rd party service
app.get("/redirect", async (req, res) => {
  try {
    //if the status code is 200, the OAuth flow was successful and then we can add this Miro user to the loggedInUserIds array
    if (res.statusCode === 200) {
      //now you can use this code to go through the OAuth flow
      //exchange it for an access token for the 3rd party of your choice
      const code = req.query.code;

      // Add the user ID to the loggedInUserIds array
      await addUserId(currentUser);

      res.send(`
      <h1>Status Code: ${res.statusCode}</h1>
      <h2>Auth successful! This window will close in 10 seconds.</h2>
      <h3>Code returned: ${code}</h3>
      <h3>User marked as logged in in local storage (store.json) file. </h3>
      <script>
      const timeoutId = setTimeout(() => {
        // window.opener.postMessage({ redirectSuccess: true}, '*');
        window.close();
      }, 10000);
      </script>
    `);
    } else {
      res.send(`
      <h1>Status Code: ${res.statusCode}</h1>
      <h2>Auth failed! Check your redirect URL. The window will close in 10 seconds.</h2>
      <script>
      const timeoutId = setTimeout(() => {
        // window.opener.postMessage({ redirectSuccess: false}, '*');
        window.close();
      }, 10000);
      </script>
    `);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal server error");
  }
});

// Route to check if user is logged in
// app.get('/api/user/isLoggedIn', (req, res) => {
//   try {
//     const userId = req.query.userId;

//     if (loggedInUsers.has(userId)) {
//       res.json({ loggedIn: true });
//     } else {
//       res.json({ loggedIn: false });
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// });

// Function to add a user ID to the loggedInUserIds array
async function addUserId(userId) {
  try {
    const filePath = path.join(__dirname, "store.json");
    // Read the existing JSON data from the file
    const existingData = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(existingData);

    // Add the new user ID to the array
    jsonData.loggedInUserIds.push(userId);

    // Write the updated JSON data back to the file
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 4));
  } catch (error) {
    console.error("Error adding user ID to JSON file:", error);
  }
}

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
