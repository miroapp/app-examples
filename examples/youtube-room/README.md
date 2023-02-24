## YouTube room

**&nbsp;ℹ&nbsp;Note**:

- Developing the app involves creating 2 separate apps, and testing them with different user sessions. \
  We recommend opening 2 browser sessions with different users to test the full functionality of the app.
- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information, visit our [developer documentation](https://developers.miro.com).

This Miro Web SDK app shows you how you can sync multiple YouTube players across different user sessions. \
The example uses an [Express server](https://expressjs.com/) and [Socket.IO](https://socket.io/), a library to implement a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) in web applications. \
The app can be useful for teachers, workshop presenters, and others looking to broadcast a video to multiple users on the same board.

### How it works

This example contains 2 separate apps that are connected by a WebSocket:

- A facilitator app, and
- A participant app.

Each app serves different purposes that enable the functionality of the YouTube room.

#### Facilitator

This app is meant to be installed by only one user: the facilitator of the Miro board. \
It contains the functionality to start, update, and change a YouTube video. The video is in turn broadcasted and synced across all participants.

#### Participant

This app can be installed by multiple users. It contains the functionality that keeps the YouTube player in sync with the facilitator app.

### How to start locally

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. [Create a new Miro app](https://developers.miro.com/docs/build-your-first-hello-world-app#step-1-bootstrap-the-hello-world-app) for the _facilitator app_ component.
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the the _facilitator app_ as follows:
   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000/facilitator` as a value for this property. \
     It defines the entry point of the _facilitator app_, and it corresponds to the URL of the server that the app runs on.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`
5. [Create a new Miro app](https://developers.miro.com/docs/build-your-first-hello-world-app#step-1-bootstrap-the-hello-world-app) for the _participant app_ component.
6. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the the _participant app_ as follows:
   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000/participant` as a value for this property. \
     It defines the entry point of the _participant app_, and it corresponds to the URL of the server that the app runs on.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`
7. Open a board: you should see your app in the apps toolbar or in the apps panel.

### Folder structure

This is an overview of important files in this example.

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

### How to use the app

Using both the facilitator and participant app is straightforward. Continue reading below to read a short description on how each of them work. \
[Watch a video to see how they work](http://www.youtube.com/watch?v=_HTZFf8bkNI).

#### Facilitator

By opening the facilitator app, you'll be greeted with a modal that allows you to paste a YouTube URL in. After selecting the desired video, you're able to click the "Open Video for Participants" button, and in turn a modal will open on all of the participants boards that have the participant app installed.

As a facilitator, you can play, pause, and stop the video, go to a new point, as well as completely replace the video with a different one. \
Each of these actions is reflected in the participant app's modal.

#### Participant

After installing the participant app, no further setup in required. It will work out of the box, and a modal will appear with a YouTube video whenever the facilitator of the room starts presenting.

### How to build the app

When you're done developing your app, you will need to build your app before you can deploy it.

- Run `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### How to deploy your app

When you're done building your app, you will need to deploy your app before you can use it in production. \
Host the built project on a service like [Heroku](https://www.heroku.com/), or [Glitch](https://glitch.com/).

If you get stuck or have questions, feel free to [join our Discord](https://bit.ly/miro-developers).
