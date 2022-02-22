# YouTube Room

This Miro Web SDK app shows you how you can sync multiple YouTube players across different user sessions. This example utilises an [Express server](https://expressjs.com/) and [Socket.IO](https://socket.io/)—a library for implemeting a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) in web applications. This might be useful for teachers, workshop presenters, and others looking to broadcast a video to multiple users on the same board.

## How it works

This example contains 2 separate apps that are connected by a WebSocket. There is a facilitator app, and a participant app. Each one serves differnet purposes for the funcationality of the YouTube room.

### Facilitator

This app is meant to only be installed by 1 user, the facilitator of the Miro board. It contains the funcationality to start, update, or chagne a YouTube video, that will in turn be broadcasted and synced across all of the participants.

### Participant

This app can be installed by multiple users. It contains the functiaonlity that keeps the YouTube player in sync with the facilitator.

## Getting Started

> Developing this app requires you to create 2 separate apps, and test them across different user sessions.
>
> We reccomend opening two browser sessions with different users to test the full functionailty of this app.

- Run `yarn` or `npm install` to install dependencies
- Run `yarn start` or `npm start` to start developing. Your app should be available on a url that looks something like this:

```
http://localhost:3000
```

- [Create a new Miro app](https://developers.miro.com/docs/create-your-app-in-miro) for the Facilitator part of the app.
- Paste `http://localhost:3000/facilitator` in the `App URL` box in your Facilitator app settings.
- [Create a new Miro app](https://developers.miro.com/docs/create-your-app-in-miro) for the Participant part of the app.
- Paste `http://localhost:3000/participant` in the `App URL` box in your Participant app settings.
- Open a board and click the three dots (...) or the chevron (>>) on the left
  toolbar. You should see the Miro calendar app.

### Project Structure

Below is a directory of important files needed for this example.

```
.
├── src
│  └── assets
│      └── style.css <-- CSS styles for the app.
│  └── facilitator-modal.js <-- Connects to the WebSocket, and syncronizes other Participant apps.
│      facilitator.js <-- Initializes the Facilitator app in Miro
│      participant-modal.js <-- Connects to the WebSocket, and syncronizes the YouTube player to the Facilitator.
│      participant.js <-- Initializs the Participant app in Miro
├── facilitator-modal.html <-- The HTML for the Facilitator modal
├── facilitator.html <-- The HTML for the Facilitator app
├── participant-modal.html <-- The HTML for the Participant modal
├── participant.html <-- The HTML for the Participant app
└── server.js <-- The main server. This serves the HTML for both apps. It also initites the WebSocket.
```

## Using the app

Using both the Facilitator and Participant app is straightforward. Continue reading below to read a short description on how each of them work. If you'd like to see a video on how they work, you can find one [here](http://www.youtube.com/watch?v=_HTZFf8bkNI)!

### Facilitator

By opening the Facilitator app, you'll be greeted with a modal that allows you to paste a YouTube URL in. After selecting the desired video, you're able to click the "Open Video for Participants" button, and in turn a modal will open on all of the participants boards that have the Participant app installed.

As a Faciliatator, you're also able to pause the video, scub to a new point, or even change the video entirely. All of these actions will be reflected in the participant's modal.

### Participant

After installing the Participant app, no further setup in required. It will work out of the box, and a modal will appear with a YouTube video whenever the Facilitator of the room starts presenting.

## Deploying your app

When you're done developing your app, you will need to build and deploy your app before you can use it in production.

- Run `yarn run build` or `npm run build` to genrate a static build of your project in `dist`.
- Host built project on a service like [Heroku](https://www.heroku.com/), or [Glitch](https://glitch.com/).

> Don't forget that if you're using this app, that there are 2 separate endpoints you will need to use, meaning you will need to create 2 separate apps (Facilitator and Participant).

If you get stuck or have questions, feel free to [join our Discord](https://bit.ly/miro-developers).
