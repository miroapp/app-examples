# Webcam Screenshot Next.js Full Stack App Example

This full-stack app shows how to build a Next.js application that uploads a camera image to a Miro board by using the Miro Web SDK and Miro REST API.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/1bc9e8e0-48bd-43c2-8ba2-cf181ce58eee

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Deploy the app on AWS Amplify](#deploy)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Node.js Client Library](https://developers.miro.com/docs/web-sdk-reference)
  - [miro.isAuthorized](https://miroapp.github.io/api-clients/classes/index.Miro.html#isAuthorized)
  - [miro.getAuthUrl](https://miroapp.github.io/api-clients/classes/index.Miro.html#getAuthUrl)
  - [miro.exchangeCodeForAccessToken](https://miroapp.github.io/api-clients/classes/index.Miro.html#exchangeCodeForAccessToken)
  - [api.getBoard](https://miroapp.github.io/api-clients/classes/index.MiroApi.html#getBoard)
  - [board.createImageItem](https://miroapp.github.io/api-clients/classes/index.Board.html#createImageItem)
- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [icon:click event](https://developers.miro.com/docs/ui_boardui#iconclick-event)
  - [getInfo()](https://developers.miro.com/docs/board_board#getinfo)
  - [openModal()](https://developers.miro.com/docs/ui_boardui#openmodal)
  - [openPanel()](https://developers.miro.com/docs/ui_boardui#openpanel)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Create a [new app in Miro](https://miro.com/app/settings/user-profile/apps)
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# ☁️ Deploy the app on AWS Amplify <a name="deploy"></a>

If you want to understand how to deploy the app to AWS Amplify, please watch the video below. Otherwise,
skip to the next section to see how to run this locally.

[![Deploy the App to AWS Amplify](https://img.youtube.com/vi/-7pPvRzvYjM/0.jpg)](https://youtu.be/-7pPvRzvYjM)

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `yarn install` to install dependencies.

2. Rename the `.sample.env` file to `.env` and then add in your clientID, client Secret, and keep the redirect URL the same.

3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, copy and paste the following yaml code:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Webcam Screenshot
sdkUri: "http://localhost:3000"
redirectUris:
  - http://localhost:3000/api/redirect/
scopes:
  - boards:read
  - boards:write
  - webcam:record
```

4. Run `yarn dev`.

5. Once your server is up and running, go to http://localhost:3000/ in your browser.

6. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

7. Go to your developer team, and open your boards.
8. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
9. Search for your app `Webcam Screenshot` or whatever you chose to name it. Click on your app to use it, as shown in the video below. <b>In the video we search for a different app, but the process is the same regardless of the app.</b>

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

> ⚠️ In case of error `401` returned by a REST API request, remove the `miro_tokens` cookie for the `localhost`
> domain in the browser:
>
> <img alt="Chrome's DevTools cookies delete" src="https://github.com/miroapp/app-examples/raw/main/assets/devtools-cookie-delete.png" />
>
> In the example, the access token refresh functionality has not been implemented to keep the implementation
> simple and focused on the topic.

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── package.json <-- The dependencies for the app.
└── .env <-- A file you create, where you store sensitive credentials (client ID, client secret).
└── index.js <-- Main index.js file for basic UI functions.
└── initMiro.js <-- Module where we configure the Miro authorization helper.
└── pages
        └── api
            └── upload.js <-- API endpoint to upload the image to the Miro API.
            └── redirect.js <-- Handles redirect after successful authorization to get access token.
    └── _app.js <-- Main _app.js file for Next.js app.
    └── _document.js <-- Next.js import file.
    └── index.js <-- UI for the video preview and popup window.
    └── trigger.js <-- Page that we use as the app entry point.
└── public
└── styles
└── node_modules <-- Node.js modules that are installed based on dependencies.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
