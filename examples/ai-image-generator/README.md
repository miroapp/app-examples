# AI Image Generator

This app implements image generation using AI (OpenAI) and shows how to drag and drop those images to a Miro Board.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/4660d1ab-80b6-4136-9cf6-0b64bed5c019

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
  - [drop event](https://developers.miro.com/docs/ui_boardui#drop-event)
  - [openPanel(options)](https://developers.miro.com/docs/ui_boardui#openpanel)
  - [draggable elements](https://developers.miro.com/docs/add-drag-and-drop-to-your-app#add-draggable-elements-to-the-app-panel)
  - [zoomTo](https://developers.miro.com/docs/viewport_viewport#zoomto)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [OpenAI Node.js Library](https://platform.openai.com/docs/libraries/node-js-library)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.
- OpenAI Account and [API Key](https://platform.openai.com/account/api-keys).

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Rename the `.env.sample` file to `.env` and add in [OpenAI API key](https://platform.openai.com/account/api-keys) and save the file.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows and then `click save`.

```yaml
appName: AI Image Generator
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
```

5. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

6. Go to your developer team, and open your boards.
7. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
8. Search for your app `AI Image Generator` or whatever you chose to name it. Click on your app to use it, as shown in the video below. <b>In the video we search for a different app, but the process is the same regardless of the app.</b>

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── package.json <-- The dependencies for the app.
└── .env <-- A file you create, where you store sensitive credentials (client ID, client secret).
└── .env.sample <-- A template file, where you store sensitive credentials (client ID, client secret).
└── index.js <-- Main index.js file for basic UI functions.
└── pages
        └── api
            └── openai.js <-- Handles API call to OpenAI using OpenAI library.
    └── _app.jsx <-- Main _app.js file for Next.js app.
    └── _document.jsx <-- Next.js import file.
    └── index.jsx <-- UI for prompt and generate image button, with logic for handling prompt / spinner.
└── public
└── styles
└── node_modules <-- Node.js modules that are installed based on dependencies.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
