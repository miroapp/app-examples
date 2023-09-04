# Node.js Stickies to CSV Miro App

This web app shows how to manage stickes using CRUD (create, read, update, delete) methods on a Miro board.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/d4f1017c-bcea-42a6-9864-7aa01ddfade9

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Node.js Client](https://developers.miro.com/docs/web-sdk-reference)
  - [MiroApi.getBoard()](https://miroapp.github.io/api-clients/classes/index.MiroApi.html#getBoard)
  - [Miro.handleAuthorizationCodeRequest()](https://miroapp.github.io/api-clients/classes/index.Miro.html#handleAuthorizationCodeRequest)
  - [Miro.isAuthorized()](https://miroapp.github.io/api-clients/classes/index.Miro.html#isAuthorized)
  - [Miro.getAuthUrl()](https://miroapp.github.io/api-clients/classes/index.Miro.html#getAuthUrl)
  - [board.getAllItems()](https://miroapp.github.io/api-clients/classes/index.Board.html#getAllItems)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Node.js](https://nodejs.org/en)
- [Handlebars](https://handlebarsjs.com/)

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
MIRO_CLIENT_ID=<YOUR_CLIENT_ID>
MIRO_CLIENT_SECRET=<YOUR_CLIENT_SECRET>
MIRO_REDIRECT_URL=http://localhost:8000/authorized
MIRO_BOARD_ID=<YOUR_MIRO_BOARD_ID>
```

> MIRO_BOARD_ID can be found [here](https://community.miro.com/developer-platform-and-apis-57/where-can-i-find-board-id-3154).

2. Run `npm install` to install dependencies.
3. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:8000
   ```
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:

   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:8000` as a value for this property.
   - [`redirectUris`](https://developers.miro.com/docs/app-manifest?utm_source=app_manifest_editor#redirecturis): assign `http://localhost:8000/authorized/` as a value for this property. \
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`

5. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below.

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

6. Go to your developer team, and open your boards.
7. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
8. Search for your app `Node.js Stickies to CSV` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── package.json <-- The dependencies for the main app.js
└── app.js <-- The main Node.js script to run the Express server and render our Handlebars app
└── .env <-- File where you are storing your sensitive credentials
└── node_modules <-- Node modules that are installed based on dependencies
└── authorization
      └── auth.js
      └── package.json <-- The dependencies for auth.js
└── views
      └── authorizeApp.hbs <-- Handlebars file to render authorization success page
      └── createCard.hbs <-- Handlebars file to render sticky creation page
      └── deleteCard.hbs <-- Handlebars file to render sticky deletion page
      └── updateCard.hbs <-- Handlebars file to render sticky update page
      └── uploadCSV.hbs <-- Handlebars file to render CSV upload page
      └── viewCard.hbs <-- Handlebars file to render sticky list page
      └── home.hbs <-- main Handlebars file to render universal/root rendering
      └── layouts
            └── main.hbs <-- the Handlebars 'app' itself
node-stickies-csv-demo-data.csv <-- sample CSV data to create stickies
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
