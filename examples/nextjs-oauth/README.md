# Miro full stack app example

This sample app demonstrates the use of the Miro REST API and OAuth authorization. After configuring your project outlined in the Prerequisites section, this app allows you to authenticate yourself with your Miro account, and use the related access tokens to make REST API calls via the Miro Developer Platform.

This example also stores your access and refresh tokens in your browsers cookies to demonstrate the Miro's REST API. When storing tokens in your own app, you should be consider encrypting or storing your user's tokens in a more secure way.

## Stack

- [x] React
- [x] Next.js
- [x] Axios
- [x] Miro REST API
- [x] Mirotone (styling)

## Prerequisites

1. Create a [developer team in Miro](https://developers.miro.com/docs/create-a-developer-team).
2. Create an [app in Miro](https://developers.miro.com/docs/build-your-first-hello-world-app#step-3-create-your-app-in-miro).
3. Create a board in Miro that you'd like to manipulate with the REST API.

## How to start

First, make sure you handled the prerequisites:

- Create a [Developer team in Miro](https://developers.miro.com/docs/create-a-developer-team).
- Create an [app in Miro](https://miro.com/app/settings/user-profile/apps)

- From your developer team in Miro, click the **Build Apps** button in the team dashboard UI.
- Name your app, and click **Create**.
- Scroll down to **App Credentials**, and copy client ID and client secret: you'll use them later in step 4.
- Scroll further down to **Redirect URI for OAuth2.0**, and paste the following redirect URL: `http://localhost:3000/api/redirect/`
- Click **Options**. \
  From the drop-down menu select **Use this URI for SDK authorization**.
- Lastly, scroll down to **Permissions**, and select the following permissions:
  - `board:read`
  - `board:write`
- Go back to your Developer team dashboard, and create a new board in Miro.
- Make a note of the board ID in the URL of the new board: you'll use it later in step 5.

Now you can start working directly with the sample app:

1. Clone or download the app repository.
2. `cd` to the project root folder.
3. Run `yarn install` to install the dependencies.
4. Create a `.env` file in the root folder, and set the following variables:

```
clientID={YOUR_CLIENT_ID)
clientSecret={YOUR_CLIENT_SECRET}
redirectURL=http://localhost:3000/api/redirect/
```

1. Go to `constants.js`, and add the `boardId` of the Miro board you'd like to use/modify.
2. Run `yarn dev` to start the local server.

Once your server is up and running, go to `http://localhost:3000/` in your browser. \
If the project is running successfully, you should see a **Sign in** button in the UI.

## Folder structure

```
.
├── package.json <-- The dependencies for the app
└── next.config.js <-- Configuration file for Next JS
└── constants.js <-- Houses isolated variables (Miro board ID)
└── .env <-- File you will create, where you store your sensitive credentials (Client ID, Secret)
└── node_modules <-- Node modules that are installed based on dependencies
└── components
      └── input.js <-- client component
      └── MiroItem.js <-- client component
      └── Time.server.js <-- server component
└── pages
        └── api
            └── authenticate.js <-- check user auth status
            └── createStickyNote.js <-- call Miro API to create sticky note
            └── getItems.js <-- call Miro API to retrieve board items
            └── redirect.js <-- handle redirect after successful authorization
            └── signin.js <-- handle oauth authorization
            └── updateContent.js <-- call Miro API to update sticky note content
    └── _app.js <-- main app.js file for Next JS app
    └── _document.js <-- Next JS import file
    └── index.js <-- main index.js file for basic UI functions
└── public
└── styles

```
