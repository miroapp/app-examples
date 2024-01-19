# Miro Selfie

The app examples demonstrates how you can leverage Miro SDK to take selfies using the browser API and easily update them by using Custom actions.

ℹ️ **Important**: Custom actions are only supported for non-public apps that will be distributed privately via a shareable authorization link from your App Settings page. This means that apps built with custom actions will not be eligible for distribution via the Miro Marketplace.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/7162412/46b1708d-fb08-412e-a7b2-31fddf9f4e87

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

  - [miro.board.getById()](https://developers.miro.com/docs/websdk-reference-board#getbyid)
  - [miro.board.viewport.get()](https://developers.miro.com/docs/websdk-reference-viewport#get)
  - [miro.board.viewport.zoomTo()](https://developers.miro.com/docs/websdk-reference-viewport#zoomto)
  - [miro.board.createImage()](https://developers.miro.com/docs/board_board#createimage)
  - [miro.board.ui.closeModal()](https://developers.miro.com/docs/websdk-reference-ui#closemodal)
  - [miro.board.ui.openModal()](https://developers.miro.com/docs/websdk-reference-ui#openmodal)

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
   In the app manifest editor, configure the app as follows and click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Selfie with Custom Actions
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
  - webcam:record
```

4. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

5. Go to your developer team, and open your boards.
6. Click on the app icon on the left sidebar.
7. On the modal that appears, click on the `Capture` button.
8. An image item with your picture should appear in the board.
9. Once you click on the image in the board, from the context menu that appears, click on the plus icon. If you hover over it, it will say `App actions`.
10. Select a custom action to either take another selfie or update the existing one in place.
11. You can select other images in the board that are not created from this app, they should not have the custom actions.

### Example of app yaml

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Selfie with custom actions
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
  - webcam:record
```

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
│  └── index.tsx <-- Where the custom actions and icon click handler are defined.
│  └── app.tsx <-- Where the selfie is taken and the image created/updated
├── tsconfig.json <-- typescript configuration file
├── vite.config.ts <-- Vite configuration file
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
└── capture.html <-- The content displayed in the modal to capture your selfie.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
