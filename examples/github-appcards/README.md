# GitHub App Cards Miro app

This full-stack example shows how to build an integration with GitHub that syncs data between GitHub issues and Miro app cards.

⚠️ Only deprecated "Classic" GitHub projects work with this app. This means that you cannot connect this app to your own repo unless you have a deprecated "Classic" GitHub project. This is why all of the issues are fetched / stored in this
[public Miro classic GitHub project](https://github.com/bishopwm/github-cards/projects/1). ⚠️

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/e2c7b34a-e97d-453e-b64b-f72d0bda643b

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

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [miro.board.getById()](https://developers.miro.com/docs/board_board#getbyid)
  - [miro.board.ui.openPanel(options)](https://developers.miro.com/docs/ui_boardui#openpanel)
  - [miro.board.ui.closeModal()](https://developers.miro.com/docs/ui_boardui#closemodal)
  - [miro.board.createAppCard()](https://developers.miro.com/docs/websdk-reference-board#createappcard)
  - [miro.board.getInfo()](https://developers.miro.com/docs/websdk-reference-board#getinfo)
  - [miro.board.viewport.zoomTo()](https://developers.miro.com/docs/websdk-reference-viewport#zoomto)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [Netlify](https://www.netlify.com/)
- [Vite](https://vitejs.dev/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- GitHub Account and [access token](https://github.com/settings/tokens).
- [Supabase account](https://supabase.com/) and database.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this app (including code explanations) see the [GitHub app cards 2-way sync tutorial](https://developers.miro.com/docs/enable-2-way-sync-between-app-cards-and-github-cards) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Create a `.env` file and add in the associated env variables as documented below:

```.env
# Generate an access token in GitHub, and enter the value here.
# To generate the access token, go to https://github.com/settings/tokens
VITE_GH_ACCESS_TOKEN=

# In Supabase, you create a Postgres database, and you assign it a password.
# Enter the password of the created database in Supabase here.
# For more information, see:
# https://supabase.com/docs/guides/database/managing-passwords
VITE_SUPABASE_PASSWORD=

# Enter the URL of the Supabase database that the app uses for data persistence here.
# For more information, see:
# https://supabase.com/docs/guides/database
VITE_DATABASE_URL=

# Enter the API key of the Supabase project with the database that the app uses for data persistence here.
# For more information, see:
# https://supabase.com/docs/guides/api#api-url-and-keys
VITE_DATABASE_PUBLIC_KEY=

# Enter the base URL of the hosting service your app runs on here.
# If you're developing locally, it can be 'localhost'.
VITE_BASE_URL=

# Enter the client secret of your app here.
# To retrieve the client secret, go to https://miro.com/app/settings/user-profile/
# Select 'Your apps', and then the app whose secret you want to retrieve.
# The app client secret is under 'App Credentials' > 'Client secret'.
MIRO_CLIENT_SECRET=

# Enter the OAuth code grant flow redirect URI for your app here.
# For more information, see:
# https://developers.miro.com/docs/getting-started-with-oauth
# https://developers.miro.com/reference/authorization-flow-for-expiring-access-tokens
MIRO_REDIRECT_URI=
```

2. Run `npm install` to install dependencies.
3. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows and then `click save`.

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: GitHub App Cards
sdkUri: "http://localhost:3000"
redirectUris:
  - http://localhost:3000/authorize
scopes:
  - boards:read
  - boards:write
```

5. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

6. Go to your developer team, and open your boards.
7. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
8. Search for your app `GitHub App Cards` or whatever you chose to name it. Click on your app to use it, as shown in the video below. <b>In the video we search for a different app, but the process is the same regardless of the app.</b>

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── .github
├── netlify
├── src
│  └── assets
│      └── style.css <-- CSS styles for the app.
|  └── components <-- Folder of all UI components used in the app.
|  └── utils
│      └── github.ts <-- Utility functions for interacting with the GitHub API.
│          miro.ts <-- Utility functions for interacting with the Miro Web SDK and REST API.
│          supabase.ts <-- Main entry for interacting with Supabase.
│  └── app.tsx <-- The main entry. Contains structure for the sidebar when launched.
│      appcard-modal.tsx <-- The main entry for the modal that appears when an app card is expanded.
│      constants.ts <-- A collection of static variables used throughout the app.
│      index.ts <-- Initializes app, and contains logic for opening the app from the sidebar and expanding an app card.
│      modal.tsx <-- The main entry for the modal that appears when selecting a GitHub issue to import.
├── app.html <-- The app itself. This is loaded on the board inside 'app.tsx'.
├── appcard-modal.html <-- The app card modal itself. This is loaded on the board inside the 'appcard-modal.tsx'.
├── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
└── modal.html <-- The modal itself. This is loaded on the board inside the 'modal.tsx'.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
