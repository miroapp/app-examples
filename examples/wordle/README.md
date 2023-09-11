# Miro Wordle App

This app shows you how to build Wordle on a Miro board by creating sticky notes with the relevant colors.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/56fe0932-2608-47ae-9e08-4919c788e90a

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

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [createStickyNote()](https://developers.miro.com/docs/board_board#createstickynote)
  - [getById()](https://developers.miro.com/docs/board_board#getbyid)
  - [remove()](https://developers.miro.com/docs/board_board#remove)
  - [viewport.get()](https://developers.miro.com/docs/viewport_viewport#get)
  - [openPanel()](https://developers.miro.com/docs/ui_boardui#openpanel)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:

   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property. \
     It defines the entry point of the app, and it corresponds to the URL of the server that the app runs on.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`

4. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

5. Go to your developer team, and open your boards.
6. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
7. Search for your app `Wordle` or whatever you chose to name it. Click on your app to use it, as shown in the video below. <b>In the video we search for a different app, but the process is the same regardless of the app.</b>

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
│  └── styles
│      └── style.css <-- CSS styles for the app.
│  └── App.tsx <-- The main app. Contains structure for the sidebar when launched.
│      main.tsx <-- Initializes the git app.
│      └── lib
│         └── board.ts <-- Methods to create and update content on Miro's board.
│         └── word.ts <-- Methods to select word for the game and
check game statuses.
│      └── constants
│         └── validGuesses.ts <-- List of words that can be guesses in the game.
│         └── wordList.ts <-- List of words to pick from in the game.
├── app.html <-- The app itself. This is loaded on the board inside the 'appContainer'.
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
