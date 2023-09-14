## About the app

This full-stack app shows how to build a Next.js application that uploads a camera image to a Miro board by using the Miro Web SDK and Miro REST API. This app demonstrates the use of the Miro REST API and Web SDK. After configuring your project outlined in the Prerequisites section, this app allows you to authenticate yourself with your Miro account, and use the related access tokens to make REST API calls via the Miro Developer Platform.

This app also stores your access and refresh tokens in your browsers cookies to demonstrate the Miro's REST API. When storing tokens in your own app, you should be consider encrypting or storing your user's tokens in a more secure way.

## Stack

- [x] [React](https://reactjs.org/)
- [x] [Next.js](https://nextjs.org/)
- [x] [Miro Node.js API client](https://developers.miro.com/docs/miro-nodejs-readme)
- [x] [Mirotone](https://www.mirotone.xyz/css) (styling)

## Prerequisites

1. Create a [Developer team in Miro](https://developers.miro.com/docs/create-a-developer-team).
2. Create an [app in Miro](https://developers.miro.com/docs/build-your-first-hello-world-app#step-1-bootstrap-the-hello-world-app).
3. Create a board in Miro that you'd like to manipulate with the REST API.

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
  - [`redirectUris`](https://developers.miro.com/docs/app-manifest#redirecturis): assign `http://localhost:3000/api/redirect/` as a value for this property. \
    It defines the redirect URL that starts the OAuth 2.0 code grant flow for the REST API.
  - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
    To enable the app to read from and write to the board, and to use the local machine webcam to record video, add the following permissions:
    - `boards:read`
    - `boards:write`
    - `webcam:record`

Now you can start working directly with the app:

1. Clone or download the app repository.
2. `cd` to the project root folder.
3. Run `yarn install` to install the dependencies.
4. Create a `.env` file in the root folder, and set the following variables:

```
MIRO_CLIENT_ID={YOUR_CLIENT_ID)
MIRO_CLIENT_SECRET={YOUR_CLIENT_SECRET}
MIRO_REDIRECT_URL=http://localhost:3000/api/redirect/
```

5. Run `yarn dev` to start the local web server.

Once your server is up and running:

1. Go to [Miro.com](https://miro.com).
2. Open a board in your Developer team.
3. To start the app, click the corresponding app icon in the app toolbar on the left.

> ⚠️ In case of error `401` returned by a REST API request, remove the `miro_tokens` cookie for the `localhost`
> domain in the browser:
>
> <img alt="Chrome's DevTools cookies delete" src="https://github.com/miroapp/app-examples/raw/main/assets/devtools-cookie-delete.png" />
>
> In the example, the access token refresh functionality has not been implemented to keep the implementation
> simple and focused on the topic.

## Folder structure

```
.
├── package.json <-- The dependencies for the app.
└── .env <-- A file you create, where you store sensitive credentials (client ID, client secret).
└── index.js <-- Main index.js file for basic UI functions.
└── initMiro.js <-- Module where we configure the Miro authorization helper.
└── pages
        └── api
            └── upload.js <-- API endpoint to upload the image to the Miro API.
            └── redirect.js <-- Handles redirect after successful authorization to get access token.
    └── _app.js <-- Main _app.js file for Next.js app.
    └── _document.js <-- Next.js import file.
    └── index.js <-- UI for the video preview and popup window.
    └── trigger.js <-- Page that we use as the app entry point.
└── public
└── styles
└── node_modules <-- Node.js modules that are installed based on dependencies.

```
