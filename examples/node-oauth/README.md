## Miro OAuth2.0

### About the app

This app shows how to implement the OAuth 2.0 authorization code grant flow to make Miro REST API calls.

You may consider using this Node.js demo as a structural basis for any other preferred language/framework.

ℹ️ Note:

- Comments with `-->`or `<--` indicate a significant step in the flow. \
  Comments without these markers are for additional reference about the code.

For the full guide on Miro's OAuth 2.0 flow, [see the documentation](https://developers.miro.com/docs/getting-started-with-oauth).

This app uses Express for a local server, Localtunnel for exposing localhost, Node.js, and Axios for making HTTP requests.

### Prerequisites

- [Create a new app in Miro](https://miro.com/app/settings/user-profile/apps).
- Install [Localtunnel](https://www.npmjs.com/package/localtunnel) or a similar tool, such as [ngrok](https://ngrok.com/).

### How to start

1. Clone or download repo.
2. `cd` to the repo root folder.
3. `npm install` to install dependencies.
4. Create an `.env` file in the root folder, and set the following variables:

```
clientID=<YOUR_CLIENT_ID>
clientSecret=<YOUR_CLIENT_SECRET>
redirectURL=<YOUR_REDIRECT_URL>
boardId=<MIRO_BOARD_ID>
```

In this example, we will host our local environment over `HTTPS` using [Localtunnel](https://www.npmjs.com/package/localtunnel).\
(You can use other services such as [ngrok](https://ngrok.com/download) as well.)

1. Install [localtunnel](https://www.npmjs.com/package/localtunnel) (or your preferred service).
2. Generate your HTTPS URL (if using localtunnel, `lt --port 3000`) for localhost.
3. In your account profile, go to **Your apps**, and then select the app you just created to access its settings page. \
   On the app settings page:
   - Go to **App Credentials**, and copy the app **Client ID** and **Client secret** values. Paste these details to your `.env` file `clientID` and `clientSecret` variables.
   - Go to your desired Miro board, copy the board ID from the URL, and paste it to your `.env` file `boardId` variable.
   - Assign `http://localhost:3000` as a value for your `.env` file `redirectURL` variable.
4. Then, open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:
   - [`redirectUris`](https://developers.miro.com/docs/app-manifest#redirecturis): assign `http://localhost:3000` as a value for this property. \
     It defines the redirect URL that starts the OAuth 2.0 code grant flow for the REST API.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from the board, add the following permission:
     - `boards:read`

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
├── package.json <-- App dependencies that are installed for the project.
└── index.js <-- The main Node.js script to run the OAuth and API request flow.
└── .env <-- A file you create, where you store sensitive credentials (client ID, client secret).
└── node_modules <-- Node.js modules that are installed based on dependencies.
```
