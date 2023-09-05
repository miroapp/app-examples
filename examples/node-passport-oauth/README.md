# OAuth2.0 and Passport.js Miro App Example

This app shows Miro's OAuth2.0 flow using the passport library to authenticate users.

# 👨🏻‍💻 App Demo

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

- [Miro REST API](https://developers.miro.com/docs/web-sdk-reference)
  - [GET /boards](https://developers.miro.com/reference/get-boards)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Express](https://expressjs.com/)
- [Passport.js](https://www.passportjs.org/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Create a [new app in Miro](https://miro.com/app/settings/user-profile/apps)
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `npm install` to install dependencies.

2. Go to [index.mjs lines 33-34](https://github.com/miroapp/app-examples/blob/main/examples/node-passport-oauth/index.mjs#L33-L34)
   and add in your apps `clientID` and `clientSecret` variables. Save the file with the updated variables.

3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, copy and paste the following yaml code:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Node Passport
redirectUris:
  - http://localhost:4000/auth/miro/callback
scopes:
  - boards:read
```

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── package.json <-- App dependencies that are installed for the project.
└── index.mjs <-- The main Node.js script to run the PassportJS auth flow.
└── app-manifest.yaml <-- Yaml code to configure your Miro App. This is used in App Settings -> Manifest.
└── node_modules <-- Node.js modules that are installed based on dependencies.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
