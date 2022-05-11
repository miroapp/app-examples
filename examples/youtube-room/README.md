# YouTube room

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- Developing the app involves creating 2 separate apps, and testing them with different user sessions. \
  We recommend opening 2 browser sessions with different users to test the full functionality of the app.
- For more information, visit our [developer documentation](https://beta.developers.miro.com).

This Miro Web SDK app shows you how you can sync multiple YouTube players across different user sessions \
The example uses an [Express server](https://expressjs.com/) and [Socket.IO](https://socket.io/), a library to implement a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) in web applications. \
The app can be useful for teachers, workshop presenters, and others looking to broadcast a video to multiple users on the same board.

## How it works

This example contains 2 separate apps that are connected by a WebSocket:

- A facilitator app, and
- A participant app.

Each app serves different purposes that enable the functionality of the YouTube room.

### Facilitator

This app is meant to be installed by only one user: the facilitator of the Miro board. \
It contains the functionality to start, update, and change a YouTube video. The video is in turn broadcasted and synced across all participants.

### Participant

This app can be installed by multiple users. It contains the functionality that keeps the YouTube player in sync with the facilitator app.

## Getting started

- Run `yarn` or `npm install` to install dependencies.
- Run `yarn start` or `npm start` to start developing. Your app should be available on a url that looks something like this:

```
http://localhost:3000
```

- [Create a new Miro app](https://developers.miro.com/docs/create-your-app-in-miro) for the facilitator app component.
- Paste `http://localhost:3000/facilitator` in the `App URL` box in your Facilitator app settings.
- [Create a new Miro app](https://developers.miro.com/docs/create-your-app-in-miro) for the participant app component.
- Paste `http://localhost:3000/participant` in the `App URL` box in your participant app settings.
- Open a board and click the three dots (...) or the chevron (>>) on the left toolbar. You should see the Miro calendar app.

### Project Structure

Below is a directory of important files needed for this example.

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

## Using the app

Using both the facilitator and participant app is straightforward. Continue reading below to read a short description on how each of them work. \
[Watch a video to see how they work](http://www.youtube.com/watch?v=_HTZFf8bkNI).

### Facilitator

By opening the facilitator app, you'll be greeted with a modal that allows you to paste a YouTube URL in. After selecting the desired video, you're able to click the "Open Video for Participants" button, and in turn a modal will open on all of the participants boards that have the participant app installed.

As a facilitator, you can play, pause, and stop the video, go to a new point, as well as completely replace the video with a different one. \
Each of these actions is reflected in the participant app's modal.

### Participant

After installing the participant app, no further setup in required. It will work out of the box, and a modal will appear with a YouTube video whenever the facilitator of the room starts presenting.

## Deploying your app

When you're done developing your app, you will need to build and deploy your app before you can use it in production.

- Run `yarn run build` or `npm run build` to generate a static build of your project in `dist`.
- Host the built project on a service like [Heroku](https://www.heroku.com/), or [Glitch](https://glitch.com/).

If you get stuck or have questions, feel free to [join our Discord](https://bit.ly/miro-developers).
