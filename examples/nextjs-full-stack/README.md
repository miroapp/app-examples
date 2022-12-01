# Miro full stack app example

This sample app demonstrates the use of the Miro REST API and Web SDK. After configuring your project outlined in the Prerequisites section, this app allows you to authenticate yourself with your Miro account, and use the related access tokens to make REST API calls via the Miro Developer Platform.

This example also stores your access and refresh tokens in your browsers cookies to demonstrate the Miro's REST API. When storing tokens in your own app, you should be consider encrypting or storing your user's tokens in a more secure way.

## Stack

- [x] React
- [x] Next.js
- [x] Miro API client
- [x] Mirotone (styling)

## Prerequisites

1. Create a [Developer team in Miro](https://developers.miro.com/docs/create-a-developer-team).
2. Create an [app in Miro](https://developers.miro.com/docs/build-your-first-hello-world-app#step-3-create-your-app-in-miro).
3. Create a board in Miro that you'd like to manipulate with the REST API.

## How to start

First, make sure you handled the prerequisites:

- Create a [Developer team in Miro](https://developers.miro.com/docs/create-a-developer-team).
- Create an [app in Miro](https://miro.com/app/settings/user-profile/apps):
  - From your developer team in Miro, click the **Build Apps** button in the team dashboard UI.
  - Name your app, and click **Create**.
  - Scroll down to **App Credentials**, and copy client ID and client secret: you'll use them later in step 4.
  - Scroll further down to **Redirect URI for OAuth2.0**, and paste the following redirect URL: `http://localhost:3000/api/redirect/`
  - Click **Options**. \
    From the drop-down menu select **Use this URI for SDK authorization**.
  - Lastly, scroll down to **Permissions**, and select the following permissions:
    - `board:read`
    - `board:write`
    - `webcam:record`

Now you can start working directly with the sample app:

1. Clone or download the app repository.
2. `cd` to the project root folder.
3. Run `yarn install` to install the dependencies.
4. Create a `.env` file in the root folder, and set the following variables:

```
MIRO_CLIENT_ID={YOUR_CLIENT_ID)
MIRO_CLIENT_SECRET={YOUR_CLIENT_SECRET}
MIRO_REDIRECT_URL=http://localhost:3000/api/redirect/
```

5. Run `yarn dev` to start the local server.

Once your server is up and running:

1. Go to [Miro.com](https://miro.com).
2. Open a board in your Developer team.
3. To start the app, click the corresponding app icon in the app toolbar on the left.

## Folder structure

```
.
├── package.json <-- The dependencies for the app
└── .env <-- File you will create, where you store your sensitive credentials (Client ID, Secret)
└── index.js <-- main index.js file for basic UI functions
└── initMiro.js <-- module where we configure Miro authorization helper
└── pages
        └── api
            └── upload.js <-- api endpoint to upload the image to Miro API
            └── redirect.js <-- handle redirect after successful authorization to get access token
    └── _app.js <-- main _app.js file for Next JS app
    └── _document.js <-- Next JS import file
    └── index.js <-- UI for the video preview and popup window
    └── trigger.js <-- page that we use as the app entrypoint
└── public
└── styles
└── node_modules <-- Node modules that are installed based on dependencies

```
