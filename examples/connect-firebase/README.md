# Miro Connect Firebase

This app demonstrates how to connect to a database backend hosted on Firebase to enable persistent data storage. This app uses the Miro Web SDK.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10800544/a0aaea4a-a95c-42f5-abb3-9590032a5b39

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
- [Drag and Drop](https://developers.miro.com/docs/add-drag-and-drop-to-your-app)

# 🛠️ Tools and Technologies <a name="tools"></a>

- JavaScript
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.
- You have a [Firebase account](https://firebase.google.com/) to use a real-time database

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a developer tutorial
> that covers the end to end flow for setting up a Firebase instance and connecting it to a Miro app from scratch, see [Connect the Miro Web SDK to a backend (Firebase)](https://developers.miro.com/docs/connect-the-miro-web-sdk-to-a-backend-firebase) tutorial on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

> ⚠️ For an end to end implementation, it's recommended to start with the associated Developer Tutorial: [Connect the Miro Web SDK to a backend (Firebase)](https://developers.miro.com/docs/connect-the-miro-web-sdk-to-a-backend-firebase). Below, find abbreviated steps that assume you've completed the Firebase configuration in the associated Developer Tutorial.

1. Run `npm install` to install dependencies.
2. Set up a Firebase backend, following the steps outlined in the [Connect the Miro Web SDK to a backend (Firebase)](https://developers.miro.com/docs/connect-the-miro-web-sdk-to-a-backend-firebase#set-up-a-firebase-backend-with-a-database) tutorial.
3. Open `src/app.js` and replace the `firebaseConfig` object with the settings from your Firebase project.

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

3. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows, and then click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Connect Firebase
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
```

5. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

5. Go to your developer team, and open your boards.
6. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say More apps.
7. Search for your app `Connect Firebase` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
│  └── assets
│  └── App.js <-- The main app. Contains logic for configuring the Firebase instance and pushing template details to Firebase.
│      index.js <-- Initializes app, and contains logic for opening the app panel.
├── app.html <-- The app UI itself. This is loaded on the board inside the 'appContainer'.
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
