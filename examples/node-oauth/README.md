# OAuth 2.0 Node.js App Example

This app shows how to implement the OAuth 2.0 authorization code grant flow to make Miro REST API calls.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/d50d91d7-ef9d-43d9-bf3d-336e962cac3d

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Run the app with Ngrok](#ngrok)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro REST API](https://developers.miro.com/docs/web-sdk-reference)
  - [GET /boards/{board_id}](https://developers.miro.com/reference/get-specific-board)
  - [POST /oauth/token](https://developers.miro.com/reference/exchange-authorization-code-with-access-token)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/docs/intro)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Create a [new app in Miro](https://miro.com/app/settings/user-profile/apps)
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this topic see the [OAuth 2.0 Miro tutorial](https://developers.miro.com/docs/getting-started-with-oauth) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app with Ngrok <a name="ngrok"></a>

If you want to see how to run this app with a publicly available URL, please see the [README-ngrok.md](./README-ngrok.md). Otherwise, for localhost, just keep reading.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

⚠️ If you want to see how to ⚠️

1. Run `npm install` to install dependencies.

2. Rename the `.sample.env` file to `.env` and then fill in the values.

> To find your client ID and secret, go to `Your apps`, and then select the app you just created to access its settings page. On the app settings page, go to `App Credentials`, and copy the app Client ID and Client secret values.

> To find your `boardId` Go to your desired Miro board, copy the board ID from the URL, and paste it to your .env file boardId variable. For more info on how to get your board ID, see the [community question](https://community.miro.com/developer-platform-and-apis-57/where-can-i-find-board-id-3154).

> The `redirectURL` is `http://localhost:3000/`. Your `.env` should look like the following when you are done (make sure to fill
> in your own clientID and clientSecret):

```
clientID=12345678910
clientSecret=12345678910abcdefg
redirectURL=http://localhost:3000/
boardId=abcdefghik=
```

3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, copy and paste the following yaml code:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: OAuth2.0 with NodeJS
redirectUris:
  - http://localhost:3000/
scopes:
  - boards:read
```

4. Run `npm run start` to start the server.

5. Go to `http://localhost:3000/` in your browser. This will redirect you to the Miro OAuth page. Select
   a dev team and then click on `Add` to complete the installation of the app.

6. You should now see `Hello, World!` and `Miro API Response:` in your browser. You should also see the API response in your
   browser. Great job! You've completed this app example!

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── package.json <-- App dependencies that are installed for the project.
└── index.js <-- The main Node.js script to run the OAuth and API request flow.
└── .env <-- A file you create, where you store sensitive credentials (client ID, client secret).
└── .sample.env <-- A file you can use as the template for your .env file.
└── node_modules <-- Node.js modules that are installed based on dependencies.
└── app-manifest.yaml <-- Yaml code to configure your Miro App. This is used in App Settings -> Manifest.
└── README-ngrok.md <-- README for how to use a publicly-available redirect URL with ngrok.

```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
