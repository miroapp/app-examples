# Miro OAuth2.0

## Prerequisites

- Create an app in Miro (https://miro.com/app/settings/user-profile/apps)
- Install Localtunnel (or similar, such as Ngrok)

## How to start

- Clone or download repo.
- `cd` to the repo root folder.
- `npm install` to install dependencies.
- Create a `.env` file in the root folder, and set the following variables:

```
clientID={YOUR_CLIENT_ID)
clientSecret={YOUR_CLIENT_SECRET}
redirectURL={YOUR_REDIRECT_URL}
boardId={MIRO_BOARD_ID}
```

In this example, we will host our local environment over `HTTPS` using [Localtunnel](https://www.npmjs.com/package/localtunnel). (You can use other services such as [ngrok](https://ngrok.com/download) as well.)

- Install [localtunnel](https://www.npmjs.com/package/localtunnel) (or your preferred service).
- Generate your HTTPS URL (if using localtunnel, `lt --port 3000`) for localhost.
- Copy this HTTPS URL and paste it in the `Redirect URI for OAuth2.0` box in your Miro app settings.
- Paste this same HTTPS URL into your `.env` file `redirectURL` variable (above).
- From your desired Miro board, grab the board ID from the URL and paste it into your `.env` file `boardId` variable (above).
- From your Miro app settings, grab the Client ID and Client Secret. Paste this into your `.env` file `clientId` and `clientSecret` variables (above).

## How to run the project

- Run `npm run start` to run the project.
- Your express server console should reflect `Listening on localhost, port 3000` (or the port of your choice).
- Once your server is running, copy the `Installation URL` for your app, under "Share App" in the Miro App UI.
- Navigate to the authorization screen via the Installation URL and authorize/install the app.

- This should redirect you to your Localtunnel URL, where you will see the JSON API response from the [GET Board API](https://developers.miro.com/reference/get-boards) displayed in the browser.

## Folder structure

```
.
├── package.json <-- The app dependencies which are installed in "How to start"
└── index.js <-- The main Node.js script to run the OAuth and API request flow
└── .env <-- File where you are storing your sensitive credentials
└── node_modules <-- Node modules that are installed based on dependencies
```

### About the app

This sample app is intended to demonstrate the OAuth 2.0 flow that is required to call Miro's V2 APIs.

Devs may consider using this Node.js demo as a structural basis for any other preferred language/framework.
NOTE: Any comments with "--->" signify part of a significant step in the flow. Comments without "--->" are added for additional reference on code.

For the full guide on Miro's OAuth 2.0 flow, please see the documentation [here](https://developers.miro.com/docs/getting-started-with-oauth).

This app uses Express for a local server, localtunnel for exposing localhost, Node.js, and Axios for making HTTP requests.