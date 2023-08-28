# Miro drag and drop app

This app shows how to implement image drag and drop to a Miro board. 

# 👨🏻‍💻 App Demo

https://github.com/horeaporutiu/app-examples-template/assets/10428517/3e9aa5ea-0341-4394-bac7-c91136a0559e

# 📒 Table of Contents
* [Included Features](#features)
* [Tools and Technologies](#tools)
* [Prerequisites](#prerequisites)
* [Associated Developer Tutorial](#tutorial)
* [Run the app locally](#run)
* [Folder Structure](#folder)
* [Contributing](#contributing)
* [License](#license)

# ⚙️ Included Features <a name="features"></a>
* [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
    * [drop event](https://developers.miro.com/docs/ui_boardui#drop-event) 
    * [openPanel(options)](https://developers.miro.com/docs/ui_boardui#openpanel)
    * [draggable elements](https://developers.miro.com/docs/add-drag-and-drop-to-your-app#add-draggable-elements-to-the-app-panel)

# 🛠️ Tools and Technologies <a name="tools"></a>
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)

# ✅ Prerequisites <a name="prerequisites"></a>
* You have a [Miro account](https://miro.com/signup/).
* You're [signed in to Miro](https://miro.com/login/).
* Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
* Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
* All examples use `npm` as a package manager and `npx` as a package runner.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>
> To view a more in depth developer tutorial
of this app (including code explanations) see the [drag-and-drop tutorial](https://developers.miro.com/docs/add-drag-and-drop-to-your-app) on Miro's Developer documentation.

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

4. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below.

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/horeaporutiu/app-examples-template/assets/10428517/456108e8-7d9b-4067-94bb-e5511c736a23

5. Go to your developer team, and open your boards. <b>Refresh your browser</b>.
6. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
7. Search for your app `Drag and drop` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
│  └── styles
│      └── style.css <-- CSS styles for the app.
│  └── App.tsx <-- The main app. Contains structure for the sidebar when launched. This file also contains logic for fetching images from [The Noun Project](https://thenounproject.com/).
│      main.tsx <-- Initializes app, and contains logic for dropping image onto the board.
├── app.html <-- The app itself. This is loaded on the board inside the 'appContainer'.
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>
If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>
[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
