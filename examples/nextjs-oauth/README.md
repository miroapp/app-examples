# Full-stack Miro app example

This sample app demonstrates the use of the Miro REST API and OAuth authorization. After configuring your project outlined in the Prerequisites section, this app allows you to authenticate yourself with your Miro account, and use the related access tokens to make REST API calls via the Miro Developer Platform.

This example also stores your access and refresh tokens in your browsers cookies to demonstrate the Miro's REST API. When storing tokens in your own app, you should be consider encrypting or storing your user's tokens in a more secure way.

## Stack

- [x] [React](https://reactjs.org/)
- [x] [Next.js](https://nextjs.org/)
- [x] [Axios](https://axios-http.com/)
- [x] [Miro REST API](https://developers.miro.com/reference/api-reference)
- [x] [Mirotone](https://www.mirotone.xyz/css) (styling)

## Prerequisites

1. Create a [developer team in Miro](https://developers.miro.com/docs/create-a-developer-team).
2. Create an [app in Miro](https://developers.miro.com/docs/build-your-first-hello-world-app#step-1-bootstrap-the-hello-world-app).
3. Create a board in Miro that you'd like to manipulate with the REST API.
4. Make a note of the board ID in the URL of the new board: you'll add this ID as a value for `boardId` in [`constants.js`](./constants.js) in step 5 below.

## How to start

First, make sure you handled the [prerequisites](#prerequisites).

Then, proceed to configure the app:

- In your account profile, go to **Your apps**, and then select the app you just created to access its settings page.
- On the app settings page:
  - Go to **App Credentials**, and copy the app **Client ID** and **Client secret** values: you'll need to enter these values
    in step 4 below.
  - Then, open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**.
- In the app manifest editor, configure the app as follows:
  - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property. \
    It defines the entry point of the app, and it corresponds to the URL of the server that the app runs on.
  - [`redirectUriForSdk`](https://developers.miro.com/docs/app-manifest#redirecturiforsdk): assign `http://localhost:3000/api/redirect/` as a value for this property. \
    It defines the redirect URL that starts the OAuth 2.0 code grant flow for the REST API from the Web SDK.
  - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
    To enable the app to read from and write to the board, add the following permissions:
    - `boards:read`
    - `boards:write`

Now you can start working directly with the sample app:

1. Clone or download the app repository.
2. `cd` to the project root folder.
3. Run `yarn install` to install the dependencies.
4. Create a `.env` file in the root folder, and set the following variables:

```
clientId={YOUR_CLIENT_ID)
clientSecret={YOUR_CLIENT_SECRET}
redirectUrl=http://localhost:3000/api/redirect/
```

5. Go to [`constants.js`](./constants.js), and add the `boardId` of the Miro board you'd like to use/modify.
6. Run `yarn dev` to start the local web server.

Once your server is up and running, go to `http://localhost:3000/` in your browser. \
If the project is running successfully, you should see a **Sign in** button in the UI.

## Folder structure

```
.
├── package.json <-- The dependencies for the app.
└── next.config.js <-- Configuration file for Next.js.
└── constants.js <-- Holds isolated variables (Miro board ID).
└── .env <-- A file will create, where you store sensitive credentials (client ID, client secret).
└── node_modules <-- Node.js modules that are installed based on dependencies.
└── components
      └── input.js <-- Client component
      └── MiroItem.js <-- Client component
      └── Time.server.js <-- Server component
└── pages
        └── api
            └── authenticate.js <-- Checks user auth status.
            └── createStickyNote.js <-- Calls the Miro API to create a sticky note.
            └── getItems.js <-- Calls the Miro API to retrieve board items.
            └── redirect.js <-- Handles redirect after successful authorization to get access token.
            └── signin.js <-- Handles OAuth authorization.
            └── updateContent.js <-- Calls the Miro API to update sticky note content.
    └── _app.js <-- Main _app.js file for Next.js app.
    └── _document.js <-- Next.js import file.
    └── index.js <-- Main index.js file for basic UI functions.
└── public
└── styles

```
