## Miro OAuth2.0

### Prerequisites

- [Create a new app in Miro](https://miro.com/app/settings/user-profile/apps).
- Install [Localtunnel](https://www.npmjs.com/package/localtunnel) or a similar tool, such as [ngrok](https://ngrok.com/).

### How to start

- Clone or download repo.
- `cd` to the repo root folder.
- `npm install` to install dependencies.
- Create an `.env` file in the root folder, and set the following variables:

```
clientId=<YOUR_CLIENT_ID>
clientSecret=<YOUR_CLIENT_SECRET>
redirectUrl=<YOUR_REDIRECT_URL>
boardId=<MIRO_BOARD_ID>
```

In this example, we will host our local environment over `HTTPS` using [Localtunnel](https://www.npmjs.com/package/localtunnel).\
(You can use other services such as [ngrok](https://ngrok.com/download) as well.)

- Install [localtunnel](https://www.npmjs.com/package/localtunnel) (or your preferred service).
- Generate your HTTPS URL (if using localtunnel, `lt --port 3000`) for localhost.
- Copy this HTTPS URL and paste it in the `Redirect URI for OAuth2.0` box in your Miro app settings.
- Paste this same HTTPS URL into your `.env` file `redirectUrl` variable.
- From your desired Miro board, copy the board ID from the URL, and paste it to your `.env` file `boardId` variable.
- From your Miro app settings, copy **Client ID** and **Client secret**, and paste the values to your `.env` file `clientId` and `clientSecret` variables, respectively.

### How to run the project

1. Open a new terminal in the root folder of the project.
2. Run `npm run start`
3. Your Express server console should return `Listening on localhost, port 3000` (or the port of your choice).
4. Once your server is running, copy the installation URL of your app under **Share App** in the app settings UI.
5. Navigate to the authorization screen by following the installation URL, and authorize/install the app.

This should redirect you to your Localtunnel URL, where you will see the JSON API response from the [GET Board API](https://developers.miro.com/reference/get-boards) displayed in the browser.

### Folder structure

```
.
├── package.json <-- The app dependencies which are installed in "How to start"
└── index.js <-- The main Node.js script to run the OAuth and API request flow
└── .env <-- File where you are storing your sensitive credentials
└── node_modules <-- Node modules that are installed based on dependencies
```

### About the app

This sample app is intended to demonstrate the OAuth 2.0 flow that is required to call Miro's V2 APIs.

You may consider using this Node.js demo as a structural basis for any other preferred language/framework.

ℹ️ Note:

- Comments with `-->`or `<--` indicate a significant step in the flow. \
  Comments without these markers are for additional reference about the code.

For the full guide on Miro's OAuth 2.0 flow, [see the documentation](https://developers.miro.com/docs/getting-started-with-oauth).

This app uses Express for a local server, Localtunnel for exposing localhost, Node.js, and Axios for making HTTP requests.
