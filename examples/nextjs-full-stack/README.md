# Miro Full Stack Example

This sample app demonstrates the use of the Miro REST API and Web SDK. After configuring your project outlined in the Prerequisites section, this app allows you to authenticate yourself with your Miro account, and use the related access tokens to make REST API calls via the Miro Developer Platform.

This example also stores your access and refresh tokens in your browsers cookies to demonstrate the Miro's REST API. When storing tokens in your own app, you should be consider encrypting or storing your user's tokens in a more secure way.

## Stack

- [x] React
- [x] Next JS
- [x] Miro API Client
- [x] Mirotone (styling)

## Prerequisites

1. Create a [developer team in Miro](https://miro.com/app/dashboard/?createDevTeam=1)
2. Create an [app in Miro](https://miro.com/app/settings/user-profile/apps)
3. Create a board in Miro that you'd like to manipulate using our REST API

## How to start

First, make sure you've handled the prerequisites in full:

- Create a [developer team in Miro](https://miro.com/app/dashboard/?createDevTeam=1)
  - Click the link above, to create a developer team under your account
- Create an [app in Miro](https://miro.com/app/settings/user-profile/apps)
  - From your developer team in Miro, click the "Build Apps" button in the team dashboard UI
  - Name your app, click 'create'
  - Scroll down to 'App Credentials' and copy the client id and client secret — we will use these below in step 4
  - Continue to scroll down to 'Redirect URI for OAuth2.0' and paste in the following redirect url: `http://localhost:3000/api/redirect/`
  - Lastly, scroll down to 'Permissions' and check off the `Board:Read` and `Board:Write` scopes

Next, we can start working directly with this sample app:

1. Clone or download repository
2. `cd` to root folder
3. Run `yarn install` to install dependencies.
4. Create a .env file in the root folder, and set the following variables:

```
MIRO_CLIENT_ID={YOUR_CLIENT_ID)
MIRO_CLIENT_SECRET={YOUR_CLIENT_SECRET}
MIRO_REDIRECT_URL=http://localhost:3000/api/redirect/
```

5. Run `yarn dev` to start the local server

Once your server is up and running, navigate to `http://localhost:3000/` in your browser.

## Folder Structure

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
