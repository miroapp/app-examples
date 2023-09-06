# OAuth2.0 and Next.js Miro App Example

This app shows Miro's OAuth2.0 flow from Miro to a client-side app built with Next.js.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/cdda8f44-bf25-420e-ae84-7ad96dba9f52

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
  - [POST /oauth/token](https://developers.miro.com/reference/exchange-authorization-code-with-access-token)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Create a [new app in Miro](https://miro.com/app/settings/user-profile/apps)
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `yarn install` to install dependencies.

2. Rename the `.sample.env` file to `.env` and then add in your clientID, client Secret, and keep the redirect URL the same.

3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, copy and paste the following yaml code:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: NextJS OAuth
sdkUri: "http://localhost:3000"
redirectUris:
  - http://localhost:3000/api/redirect/
scopes:
  - boards:read
  - boards:write
```

4. Run `yarn dev`.

5. Once your server is up and running, go to http://localhost:3000/ in your browser.
   If the project is running successfully, you should see a Sign in button in the UI. Then go through the OAuth flow.
   If all went well, you should see `Signed in Successfully`. Great job!

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── package.json <-- The dependencies for the app.
└── .env <-- A file will create, where you store sensitive credentials (client ID, client secret).
└── .sample.env <-- A file with a template to store store sensitive credentials (client ID, client secret).
└── node_modules <-- Node.js modules that are installed based on dependencies.
└── pages
        └── api
            └── authenticate.js <-- Checks user auth status.
            └── redirect.js <-- Handles redirect after successful authorization to get access token.
            └── signin.js <-- Handles OAuth authorization.
    └── _app.js <-- Main _app.js file for Next.js app.
    └── _document.js <-- Next.js import file.
    └── index.js <-- Main index.js file for basic UI functions.
└── public
    └── favicon.ico <-- App icon for the browser tab.
└── styles
    └── globals.css <-- CSS styling.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
