//Create express app
const express = require("express");
const app = express();
const axios = require("axios");

//Use config dotenv to make enable use of environmental variables
require("dotenv").config();

//Define port and host
const port = "4000";
const host = "localhost";

// Import the cors middleware
const cors = require("cors");

// Use cors middleware to allow requests from frontend server
app.use(cors({ origin: "http://localhost:3000" }));

// This route is used to send over the OAuth URL to the front end.
// When the user clicks on Login button, the front end will initiate the OAuth flow
// by opening the OAuth URL in a new window.
app.get("/", async (req, res) => {
  try {
    res.set("Content-Type", "application/json"); //ensure we can parse the response as JSON
    res.json(process.env.OAuthURL);
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

// This route is used to handle the redirect URL from the 3rd party service
// Since I used Ngrok in this example, the full route was https://1111-11-11-111-11.ngrok-free.app/redirect in Slack App Settings
app.get("/redirect", async (req, res) => {
  try {
    //if the status code is 200, the OAuth flow was successful and then we can add this Miro user to the loggedInUserIds array
    if (res.statusCode === 200) {
      //now you can use this code to go through the OAuth flow
      //exchange it for an access token for the 3rd party of your choice
      const code = req.query.code;
      //show how to exchange access code for access token. Note this is for demo purposes only. This is the endpoint for a Slack app.
      //In a production app, it is advised to pass your client id and secret using the HTTP Basic auth scheme.
      const tokenResponse = await axios.post(
        "https://slack.com/api/oauth.v2.access",
        {
          code: code,
          client_id: process.env.clientId, // Pass in your client ID in the .env file
          client_secret: process.env.clientSecret, // Your client Secret in the .env file
          grant_type: "authorization_code",
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        },
      );

      //now you can implement logic to use 3rd party APIs and use the access token for authentication

      res.send(`
      <h1>Status Code: ${res.statusCode}</h1>
      <h2>Auth successful! This window will close in 10 seconds.</h2>
      <h3>Access Token: ${tokenResponse.data.access_token}</h3>
      <h3>User marked as logged in in (browser) localStorage. </h3>
      <script>
        window.opener.postMessage({ redirectSuccess: true}, '*');
        const timeoutId = setTimeout(() => {
          window.close();
        }, 5000);
      </script>
    `);
    } else {
      res.send(`
      <h1>Status Code: ${res.statusCode}</h1>
      <h2>Auth failed! Check your redirect URL. The window will close in 10 seconds.</h2>
      <script>
        window.opener.postMessage({ redirectSuccess: false}, '*');
        const timeoutId = setTimeout(() => {
          window.close();
        }, 5000);
      </script>
    `);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
