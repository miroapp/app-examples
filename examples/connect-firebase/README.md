## Connect a Miro app to a Firebase Backend

This project follows our guide _How to connect the Web SDK to a backend_, and it contains the finished code.\
Read through the guide for an in-depth walkthrough on setting this project up from scratch.

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information, visit our [developer documentation](https://developers.miro.com).

### How to connect to the Firebase backend

- Run `npm install` to install dependencies.
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

- Run `npm start` to start developing. \
  Your URL should be similar to this example:
  ```
  http://localhost:3000
  ```
- Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro).
- In the app manifest, paste the URL as the value of [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri).
- Open a board: you should see your app in the apps toolbar or in the apps panel.

### How to build the app

- Run `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### About the app

This app connects to a database backend hosted on Firebase to enable persistent data storage.

This app uses [Vite](https://vitejs.dev/). \
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
