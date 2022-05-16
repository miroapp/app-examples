# Connecting Miro to a Firebase Backend

This project follows our guide "How to connect the Web SDK to a backend", and contains the finished code. Read through the guide for an in-depth walkthrough on setting this project up from scratch.

## How to start:

- Run `yarn` or `npm install` to install dependencies
- Open `src/app.js`, and replace the `firebaseConfig` object with the settings from your Firebase project

```js
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-DOMAIN.firebaseapp.com",
  databaseURL: "https://YOUR-DOMAIN-rtdb.firebaseio.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-BUCKET.appspot.com",
  messagingSenderId: "YOUR-SENDER-ID",
  appId: "YOUR-APP-ID",
};
```

- Run `yarn start` or `npm start` to start developing, you should have a URL
  that looks like this

```
http://localhost:3000
```

- Paste the URL in `App URL` in your app settings
- open a board & you should see your app in the main toolbar when you click the
  three dots.

## How to build the app:

Run `yarn run build` or `npm run build` and this will generate a static output
inside `dist/` which you can host on static hosting service.

### About the app

This app is using [vite](https://vitejs.dev/) so you can check the documentation
if you want to modify `vite.config.js` configuration if needed.
