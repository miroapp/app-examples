# Miro HTML Preview App

This app shows how to use the Miro REST API to generate HTML pages from Miro boards. This enables creating multi-page website mockups quickly.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/6b3c90d6-06f0-4dc7-adb3-b7b3c115da84

> The initial screen prompts you to connect your Miro account. After signing in, you can see the list of boards under your team.
> To view a specific frame, use its title in the URL. In the app, URLs are in the following format: /{boardId}/{frameTitle}.

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Node.js Client](https://developers.miro.com/docs/web-sdk-reference)
  - [api.getAllBoards](https://miroapp.github.io/api-clients/classes/index._internal_.Api.html#getAllBoards)
  - [board.getAllItems()](https://miroapp.github.io/api-clients/classes/index.Board.html#getAllItems)
  - [board.getAllConnectors()](https://miroapp.github.io/api-clients/classes/index.Board.html#getAllConnectors)
  - [board.getShapeItem()](https://miroapp.github.io/api-clients/classes/index.Board.html#getShapeItem)
  - [board.getTextItem](https://miroapp.github.io/api-clients/classes/index.Board.html#getTextItem)
  - [board.getStickyNoteItem](https://miroapp.github.io/api-clients/classes/index.Board.html#getStickyNoteItem)
  - [board.getItem](https://miroapp.github.io/api-clients/classes/index.Board.html#getItem)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Rename the `.sample.env` file to `.env` and then add in your environmental variables. Once completed your `.env` file should
   look something like this:

```
MIRO_CLIENT_ID=12345678910
MIRO_CLIENT_SECRET=abcdefghizklmnop12345678910
MIRO_REDIRECT_URL=http://localhost:3000/api/redirect/
```

2. Run `npm install` to install dependencies.
3. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows and click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: HTML Preview
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
redirectUris: http://localhost:3000/api/redirect/
redirectUriForSdk: http://localhost:3000/api/redirect/
scopes:
  - boards:read
  - boards:write
```

5. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below.

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

6. Go to your developer team, and open your boards.
7. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
8. Search for your app `HTML Preview App` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
│  └── lib
|      └── components
|          └── BoardItem.tsx <-- React file with some styling for items.
|          └── Link.tsx <-- React file for parsing and styling links on a board.
|      └── data.ts <-- main logic for the app using Node Client methods to get items on the board.
|      └── item.ts <-- interface used by data.ts.
│  └── pages
│      _app.tsx <-- Initializes React app.
│      _document.tsx <-- Initializes Next.js app.
│      index.tsx <-- Main logic for React app including authorization + app instructions.
│      └── api
│          └── redirect.ts <-- logic to handle redirect URL + OAuth flow.
│  └── public
│      └── favicon.ico <-- Icon for the web app.
│  └── styles
│      └── globals.css <-- CSS styles for the app.
│      main.tsx <-- Initializes app, and contains logic for dropping image onto the board.
└── initMiro.ts <-- This is where the Node Client is initialized.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
