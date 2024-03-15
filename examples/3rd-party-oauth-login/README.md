# 3rd Party OAuth Login

This app allows you to login to a 3rd party service using (you will need to provide OAuth URL) and tracks the logged in status via local storage.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/fef43c9f-d528-4787-8c66-c94e0f88a03d

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
  - [miro.board.ui.openPanel(options)](https://developers.miro.com/docs/ui_boardui#openpanel)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en)
- [Vite](https://vitejs.dev/)
- [ngrok](https://ngrok.com/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. Run `npm install` in the `backend` directory.
4. Run `node app.js` in the `backend` directory.
5. If you need to use something like Ngrok for your redirectURL (I had to do this to go through the OAuth process for my Slack app) run `ngrok http 4000`.
6. Your ngrok forwarding address should look something like: `https://bced-81-59-0-206.ngrok-free.app`. Then your <b>redirect URL</b> in the other service (for me it was in the App Settings in Slack) should be:
   `https://bced-81-59-0-206.ngrok-free.app/redirect`
7. Go into `src/backend` and fill in the `.sample.env` file with your OAuthURL, clientId, and clientSecret and
   rename it to `.env` and then save the file.

> For me, I had to go into my Slack App settings -> Basic Settings for the clientId and ClientSecret. I had to go to App Settings -> Manage Distribution and then check all the boxes, and then I was able to find the "Sharable URL" that I used as my "redirectURL". Also this likely requires the app to have some scopes, so you would have to add that in the OAuth and permission page of the app settings.

8. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   > In the app manifest editor, configure the app as follows, and then click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: 3rd Party Oauth Login
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
```

9. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

10. Go to your developer team, and open your boards.
11. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
12. Search for your app `3rd-party-oauth-login` or whatever you chose to name it. Click on your app to use it, as shown in the video below. <b>In the video we search for a different app, but the process is the same regardless of the app.</b>

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src <-- main logic for the app
│  └── app.js <-- handles the button clicks and front end interaction
│  └── index.js <-- handles clicking on app icon in Miro
│      └── style.css <-- CSS styles for the app.
│  └── backend <-- The node.js express backend
│      └── app.js <-- handles redirect and also passes OAuth URL to front end
│      └── .sample.env <-- Env variable for your OAuth URL. rename it to .env
└── index.html <-- The app entry point.
└── app.html <-- The app entry point.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
