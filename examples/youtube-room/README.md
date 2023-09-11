# YouTube Room Miro App

This app shows you how you can sync multiple YouTube players across different user sessions
on a Miro board.

# 👨🏻‍💻 App Demo

[![How to Run YouTube Room App](https://github-production-user-asset-6210df.s3.amazonaws.com/10428517/267016534-01a41ad7-0dea-412b-8368-64a8988fcd60.png)](https://www.youtube.com/watch?v=_HTZFf8bkNI)

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
  - [icon:click event](https://developers.miro.com/docs/ui_boardui#iconclick-event)
  - [getInfo()](https://developers.miro.com/docs/board_board#getinfo)
  - [openModal()](https://developers.miro.com/docs/ui_boardui#openmodal)
  - [openPanel()](https://developers.miro.com/docs/ui_boardui#openpanel)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 🏃🏽‍♂️ Extra app info <a name="run"></a>

This example contains 2 separate apps that are connected by a WebSocket:

- A facilitator app, and
- A participant app.
  Each app serves different purposes that enable the functionality of the YouTube room.

## Facilitator

This app is meant to be installed by only one user: the facilitator of the Miro board.
It contains the functionality to start, update, and change a YouTube video. The video is in turn broadcasted and synced across all participants.

## Participant

This app can be installed by multiple users. It contains the functionality that keeps the YouTube player in sync with the facilitator app.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. [Create a new Miro app](https://developers.miro.com/docs/build-your-first-hello-world-app#step-1-bootstrap-the-hello-world-app) for the _facilitator app_ component.
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
    In the app manifest editor (see [app manifest docs](https://developers.miro.com/docs/app-manifest) to learn more), configure the the _facilitator app_ as follows:

   ```yaml
   appName: YouTube Room Facilitator
   sdkUri: "http://localhost:3000/facilitator"
   scopes:
     - boards:read
     - boards:write
   ```

5. [Create a new Miro app](https://developers.miro.com/docs/build-your-first-hello-world-app#step-1-bootstrap-the-hello-world-app) for the _participant app_ component.
6. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
    In the app manifest editor, configure the the _participant app_ as follows:

   ```yaml
   appName: YouTube Room Participant
   sdkUri: "http://localhost:3000/participant"
   scopes:
     - boards:read
     - boards:write
   ```

7. From the app settings page, make sure to Install both apps and get both OAuth tokens if you haven't.
8. Open two different Miro boards, one for the facilitator and one for the participant. Make sure each board opens their respective apps. The facilitator app should be opened for the facilitator and the participant app for the participant. Once you have done that, watch the video below to see how to use
   the app.

## Watch the video below to understand how to run the app

[![How to Run YouTube Room App](https://github-production-user-asset-6210df.s3.amazonaws.com/10428517/267016534-01a41ad7-0dea-412b-8368-64a8988fcd60.png)](https://www.youtube.com/watch?v=_HTZFf8bkNI)

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
│  └── assets
│      └── style.css <-- CSS styles for the app.
│  └── facilitator-modal.js <-- Connects to the WebSocket, and syncronizes other participant apps.
│      facilitator.js <-- Initializes the facilitator app in Miro
│      participant-modal.js <-- Connects to the WebSocket, and syncronizes the YouTube player with the facilitator app.
│      participant.js <-- Initializes the participant app in Miro
├── facilitator-modal.html <-- The HTML for the facilitator app modal
├── facilitator.html <-- The HTML for the facilitator app
├── participant-modal.html <-- The HTML for the participant app modal
├── participant.html <-- The HTML for the participant app
└── server.js <-- The main server. This serves the HTML for both apps. It also initiates the WebSocket.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
