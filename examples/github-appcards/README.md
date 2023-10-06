# GitHub App Cards Miro app

This full-stack example shows how to build an integration with GitHub that syncs data between GitHub issues and Miro app cards.

⚠️ Only deprecated "Classic" GitHub projects work with this app. This means that you cannot connect this app to your own repo unless you have a deprecated "Classic" GitHub project. This is why all of the issues are fetched / stored in this
[public Miro classic GitHub project](https://github.com/bishopwm/github-cards/projects/1). ⚠️

<b>This app is meant to show the basic concepts behind 2-way sync, but is in no way a working solution. This is intended for
simple demo purposes to show a simple 2-way sync with free services like Netlify, Supabase, and Miro.</b>

<b>This app involves setting up different tools such as Netlify for deploying your app, Supabase for storing access tokens and
GitHub for using GitHub actions to detech any changes in your projects. It takes 30-40 minutes to configure.</b>

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/e2c7b34a-e97d-453e-b64b-f72d0bda643b

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Database Configuration](#database)
- [Netlify Configuration](#netlify)
- [Miro App Configuration](#netlify)
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
- [Supabase](https://supabase.com/)
- [Vite](https://vitejs.dev/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- GitHub Account and [access token](https://github.com/settings/tokens).
- [Supabase account](https://supabase.com/) and database.
- [Netlify account](https://www.netlify.com/).

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this app (including code explanations) see the [GitHub app cards 2-way sync tutorial](https://developers.miro.com/docs/enable-2-way-sync-between-app-cards-and-github-cards) on Miro's Developer documentation.

# Database Configuration <a name="database"></a>

1. Create a database in Supabase. First you may need to create an Org.
2. Go into your dashboard and into your project and to the `table editor`.
3. Click on `Create a new table`
4. Name this table `Auth` and add in the following columns, with the respective `Format` as shown in the screenshot below. This table will hold access_tokens to be able to call the Miro REST API to sync changes which happen in the GitHub project.
5. Click on `Create a new table` and name this table `card-mapping` and add in the following columns, with the respective `Format` as shown in the screenshot below. This table will hold the app card ID from Miro and the GitHub issue ID along with the MiroUserId.
6. Click on `Edit column` for the `miroUserId` in the `card-mapping` table, and then add in the following `Foreign Key Relation` as
   shown in the screenshot below.
7. Once you save the `Foreign Key Relation` your `miroUserId` from the `card-mapping` table should look something like the screenshot below. Click `Save`. We need this to be able to associate the miroUserId with a access_token so we can invoke the Miro REST API.

# ☁️ Netlify Configuration <a name="netlify"></a>

1. Go to your Netlify account and auth with your GitHub account.
2. Clone the [app-examples GitHub repo](https://github.com/miroapp/app-examples).
3. Make a new directory to hold your deployed project: `mkdir GitHub-app-cards-deployed`.
4. Copy and paste this code into a new location by using the following command: `cp -rf app-examples/examples/github-appcards GitHub-app-cards-deployed/`
5. Create a new GitHub repo, and push up your `GitHub-app-cards-deployed` project to it. You can use the following commands to do so:

```
cd GitHub-app-cards-deployed/github-appcards
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/<your-github-username>/<your-new-github-repo-which-will-hold-github-appcards-code>
git push -u origin main
```

6. At this point, you should have a personal repo which has the GitHub-appcards code in it. We will use this repo as a way to
   deploy this app with Netlify.

7. Go into Netlify, login, and from the `Team overview` section, click on `Add new site` -> `Import an existing project` -> `Deploy with GitHub` and then
   authenticate into GitHub and select this project which you just created which holds the GitHub app cards code. Select the `main` branch and `Deploy`

8. Once the deploy is complete, you app should be deployed to `<site-name>.netlify.app`. For example, mine was `https://peaceful-fairy-c2e727.netlify.app`
   as shown in the screenshot below. <b>I will use the `https://peaceful-fairy-c2e727.netlify.app` as the example for how to connect your Miro app to the
   Netlify app but just understand that your URL will be different. </b>

# ☁️ Miro App Configuration <a name="miro"></a>

1. Now, let's create a new Miro app on `developer.miro.com`.
2. Once you've created the app, from the app setting page, click on `edit in Manifest` and paste in the following:

```yaml
appName: GitHub App Cards
sdkVersion: SDK_V2
sdkUri: https://peaceful-fairy-c2e727.netlify.app
boardPicker:
  allowedDomains: []
redirectUris:
  - https://peaceful-fairy-c2e727.netlify.app/.netlify/functions/authorize
redirectUriForSdk: https://peaceful-fairy-c2e727.netlify.app/.netlify/functions/authorize
scopes:
  - boards:write
  - boards:read
icons:
  colored: ""
  outline: ""
```

> Make sure to change `sdkUri`, `redirectUris`, and `redirectUriForSdk` with your site name.

3. From the `Redirect URI for OAuth2.0` section in app settings, click on `Options` and make sure `Use this URI for SDK authorization` is checked,
   as shown in the screenshot below.

4. Click on `Install app and get OAuth token`.

5. Rename the `.sample.env` file at the base of the `github-appcards` repo to `.env` and fill in the values as detailed in the comments. Note,
   your `redirectUriForSdk` on your app settings should be the same as the `MIRO_REDIRECT_URI` in your env variables.

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

6. Once you have filled this in, go back to your Netlify deploys and click on `Site configuration` -> then click on `Environment variables` ->
   `Add a variable` -> `import from a .env file` and then just copy and paste the content and click on `Import variables`.

7. Go to `.github/workflows/issues.yml` and change the URL to be your base app name. i.e. for mine it looks like
   `url: "https://peaceful-fairy-c2e727.netlify.app/.netlify/functions/issues"` since my base app name is `https://peaceful-fairy-c2e727.netlify.app`.
   Then do the same for the `project-cards` file. It should be changed to `url: "https://peaceful-fairy-c2e727.netlify.app/.netlify/functions/project-cards"`.

8. Once you've made these two changes, commit these changes and push them up to the main branch:

```
git add .
git commit -m "added netlify functions to GitHub actions"
git push
```

9. This will trigger a new deploy automatically.

<b>Make sure your URLs have https:// at the beginning, otherwise the OAuth flow will not work.</b>

# 🏃🏽‍♂️ Run the app <a name="run"></a>

1. Go back to your app home page, and under the `Share app` section, click on `Copy` and paste the URL in your browser. Install the app on a dev team. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

<b>Make sure your redirect URLs and `VITE_BASE_URL` have https:// at the beginning, otherwise the OAuth flow will not work.</b>

2. Go to your developer team, and open your boards.
3. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
4. Search for your app `GitHub App Cards` or whatever you chose to name it. Click on your app to use it, as shown in the video below. <b>In the video we search for a different app, but the process is the same regardless of the app.</b>

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
