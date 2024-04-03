# JWT Authentication with Miro

This app shows how to add Miro user's signature to API requests using JWT token.
The app uses the Miro Web SDK method `getIdToken` to identify a user on server side to read and update user's recent GIFs.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/1961590/08a7b976-f195-45ee-ac17-7a00d084bbd2

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [on(icon:click)](https://developers.miro.com/docs/ui_boardui#iconclick-event)
  - [openPanel(options)](https://developers.miro.com/docs/ui_boardui#openpanel)
  - [board.getIdToken()](https://developers.miro.com/docs/websdk-reference-board#getidtoken)
  - [board.createImage(...)](https://developers.miro.com/docs/websdk-reference-board#createimage)
  - [viewport.get()](https://developers.miro.com/docs/websdk-reference-viewport#get)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)
- [Giphy SDK for Web](https://developers.giphy.com/docs/sdk/#web)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 18.17](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Rename the ['.env.example' file](.env.example) to `.env`. You will need to create a Miro app and then add in the client ID and client secret.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:

   - [`appName`](): change it to `JWT demo` or whatever you want to name your app.
   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it.
     To enable the app to write to the board, add the following permissions:
     - `boards:read`

5. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below.

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

6. Go to your developer team, and open your boards.
7. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
8. Search for your app `JWT demo` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
./src
│  └── components
│      │── SdkInfo.tsx <-- React component to initialize the app in a Miro board.
│      │── Grid.tsx <-- React component to render a grid with gifs.
│      │── RecentGifs.tsx <-- React component to render recent gifs based on data from the app's server.
│      └── Search.tsx <-- React component to render a gif search block.
│  └── app
│      │── layout.tsx <-- Root layout for the app.
│      │── loading.tsx <-- Loading placeholder for the app.
│      │── page.tsx <-- Index empty page to initialize the app.
│      └── api
│          └── recent
│              └── route.ts <-- Route controller to get and update recent gifs for a user.
│          └── panel
│              └── page.ts <-- a page to render the app's panel.
│  └── public
│      └── favicon.ico <-- Icon for the web app.
│  └── assets
│      └── style.css <-- CSS styles for the app.
│  └── hooks
│      └── useRecent.ts <-- Custom hook to read and update recent gifs.
│  └── utils
│      │── api.ts <-- API utility to make requests to the app's server with Miro's user JWT header.
│      │── miro.ts <-- Miro utility to interact with the Miro Web SDK.
│      │── user.ts <-- User utility to get the user's ID from the JWT token.
│      └── storage.ts <-- Implementation of storage logic. Will create a file `store.json` with userID and recent gifs.
└── initMiro.ts <-- This is where the Node Client is initialized.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
