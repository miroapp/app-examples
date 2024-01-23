# Miro CSV to Mind Map App

This app shows how to import data from a CSV file and create a mind map on a Miro board.

# 👨🏻‍💻 App Demo

![csv-to-mindmap-demo](https://github.com/miroapp/app-examples/assets/10428517/9bc2274f-11f0-4974-973d-eb97da2ddea1)

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# 📹 Associated Video <a name="video"></a>

Watch the video below for a demo, code walkthrough, and other ways to use use mind maps in Miro.

[![3 ways to use Mind Maps in Miro](https://img.youtube.com/vi/z-kGniEBgZQ/0.jpg)](https://youtu.be/z-kGniEBgZQ)

Watch the short video (48 seconds) below to gain a quick overview of using the app and other ways to use mind maps in Miro.

[![How to use Mind Maps in Miro](https://img.youtube.com/vi/thKZa4zGduc/0.jpg)](https://youtu.be/thKZa4zGduc)

# ⚙️ Included Features <a name="features"></a>

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [miro.board.ui.openPanel()](https://developers.miro.com/docs/ui_boardui#openpanel)
  - [miro.board.experimental.createMindmapNode()](https://developers.miro.com/docs/experimental_experimental#createmindmapnode)

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

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this app (including code explanations) see the [Create mind map from CSV tutorial](https://developers.miro.com/docs/create-mind-map-from-csv) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows, and then click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: CSV to Mindmap
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
```

4. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

5. Go to your developer team, and open your boards.
6. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
7. Search for your app `CSV to Mind Map` or whatever you chose to name it. Click on your app to use it, as shown in the video below. <b>In the video we search for a different app, but the process is the same regardless of the app.</b>

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
|  ├── example-data // Example CSV data
│  ├── assets
│  │  └── style.css
│  ├── app.tsx     // The code for the app lives here
│  ├── index.ts    // The code for the app entry point lives here
│  └── utils.ts    // Utilities for loading CSV files
├── app.html       // The app itself. It's loaded on the board inside the 'appContainer'
└── index.html     // The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
