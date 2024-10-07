# Miro Custom Actions

Custom actions are a quick way to get one or more tasks done with your apps. Users can launch a custom action associated with your app through the context menu of a board item.

ℹ️ **Important**: Custom actions are only supported for non-public apps that will be distributed privately via a shareable authorization link from your App Settings page. This means that apps built with custom actions will not be eligible for distribution via the Miro Marketplace.

🚧 To ensure you can see the custom action in a dropdown from your app, you **will need to register a minimum of two custom actions**. If only one single custom action was registered, no drop down will appear and instead the custom action will fire directly by clicking on its icon.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10800544/4cd2c24b-877a-4ac0-a512-4b9b3bb35f1f

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [miro.board.notifications.showInfo()](https://developers.miro.com/docs/websdk-reference-notifications#showinfo)
  - [miro.board.getInfo()](https://developers.miro.com/docs/websdk-reference-board#getinfo)
  - [miro.board.createText()](https://developers.miro.com/docs/board_board#createtext)
  - [miro.board.createStickyNote()](https://developers.miro.com/docs/websdk-reference-board#createstickynote)
  - [miro.board.viewport.zoomTo()](https://developers.miro.com/docs/websdk-reference-viewport#zoomto)
  - [Custom Actions](https://developers.miro.com/docs/action_customactionmanagement)

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
- Your app is a private app, and it's **not** publicly available on the [Miro Marketplace](https://miro.com/marketplace).
  Currently, custom actions are available only for private apps.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this app (including code explanations) see the [custom actions tutorial](https://developers.miro.com/docs/add-custom-actions-to-your-app) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows and then click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Custom Actions
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
6. Click on a supported item, such as a sticky note.
7. From the context menu that appears, click on the plus icon. If you hover over it, it will say `App actions`.
8. Select a custom action to send a notification to the Miro Board (see App Demo).

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
│  └── index.tsx <-- Where the custom actions are defined.
├── tsconfig.json <-- typescript configuration file
├── vite.config.ts <-- Vite configuration file
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
