## Connect a Miro app to a Firebase Backend

This project follows our guide _How to connect the Web SDK to a backend_, and it contains the finished code.\
Read through the guide for an in-depth walkthrough on setting this project up from scratch.

### How to connect to the Firebase backend

- Run `yarn` or `npm install` to install dependencies.
- Open `src/app.js`, and replace the `firebaseConfig` object with the settings from your Firebase project.

```js
const firebaseConfig = {
  apiKey: "<YOUR-API-KEY>",
  authDomain: "<YOUR-DOMAIN>.firebaseapp.com",
  databaseURL: "https://<YOUR-DOMAIN>-rtdb.firebaseio.com",
  projectId: "<YOUR-PROJECT-ID>",
  storageBucket: "<YOUR-BUCKET>.appspot.com",
  messagingSenderId: "<YOUR-SENDER-ID>",
  appId: "<YOUR-APP-ID>",
};
```

### How to start locally

- Run `yarn start` or `npm start` to start developing. \
  Your URL should be similar to this example: \
  ```
  http://localhost:3000
  ```
- Paste the URL under **App URL** in your [app settings](https://developers.miro.com/docs/build-your-first-hello-world-app#step-3-create-your-app-in-miro).
- Open a board; you should see your app in the app toolbar or in the **Apps** panel.

### How to build the app

- Run `yarn run build` or `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### About the app

This app connects to a database backend hosted on Firebase to enable persistent data storage.

This app uses [Vite](https://vitejs.dev/). \
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
