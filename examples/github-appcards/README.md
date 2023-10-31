# GitHub App Cards Miro app

This full-stack example shows how to build an integration with GitHub that syncs data between GitHub issues and Miro app cards.

🚨 🚨 🚨
Only deprecated "Classic" GitHub projects work with this app. This means that you cannot connect this app to your own repo unless you have a deprecated "Classic" GitHub project. 🚨 🚨 🚨

This app is meant to show the basic concepts behind 2-way sync, but is in no way a working solution. This is intended for simple demo purposes to show a simple 2-way sync with free services like Netlify, Supabase, and Miro.

This app involves setting up different tools such as Netlify for deploying your app, Supabase for storing access tokens and
GitHub for using GitHub actions to detech any changes in your projects. It takes 30-40 minutes to configure.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/70e7c32e-7206-42f7-b64d-1fc089599330

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Associated Video Tutorial](#video)
- [Database Configuration](#database)
- [Netlify Configuration](#netlify)
- [Miro App Configuration](#miro)
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

# 📖 Associated Video Tutorial <a name="video"></a>

> To view a more in depth developer tutorial in video format, you can watch the YouTube video below. This video explains how to build a 2-way data sync integrations with GitHub projects (classic) and Miro. It goes through demo videos, architecture diagrams, and code examples to teach you the fundamentals around building a 2-way data sync integration.

[![Build a 2-way sync with GitHub and Miro using App Cards](https://img.youtube.com/vi/ed_7TzPO0d4/0.jpg)](https://youtu.be/ed_7TzPO0d4)

# Database Configuration <a name="database"></a>

1. Create a database in Supabase. First you may need to create an Org.
2. Go into your dashboard and into your project and to the `table editor`.
3. Click on `Create a new table`
4. Name this table `auth` and add in the following columns, with the respective `Format` as shown in the screenshot below. Note that capitalization is important for the table name. This table will hold access_tokens to be able to call the Miro REST API to sync changes which happen in the GitHub project. Disable Row Level security.

This is the schema for the `auth` table - make sure it is exactly the same to ensure this code works.

![auth-table-schema](https://github.com/miroapp/app-examples/assets/10428517/d816df58-0208-4fa1-ba1c-08ac82b67aac)

This is what the `auth` table should look like once it's been updated.

![auth-database-configuration](https://github.com/miroapp/app-examples/assets/10428517/bbbcefcf-0621-4f6f-812d-021ae4aab047)

6. Click on `Create a new table` and name this table `card-mapping` and add in the following columns, with the respective `Format` as shown in the screenshot below. This table will hold the app card ID from Miro and the GitHub issue ID along with the MiroUserId.

This is the schema for the `card-mapping` table - make sure it is exactly the same to ensure this code works.

![card-mapping-table-schema](https://github.com/miroapp/app-examples/assets/10428517/f38bb7b1-8c3c-4f27-ab14-6ba9e2300b4e)

This is what the `card-mapping` table should look like once it's been updated.

![card-mapping-database-configuration](https://github.com/miroapp/app-examples/assets/10428517/8eadeeb0-ab7a-4239-9961-c3dfcc038d1f)

8. Click on `Edit column` for the `miroUserId` in the `card-mapping` table, and then add in the following `Foreign Key Relation` as shown in the screenshot below.

<img width="423" alt="supabase-foreign-key-config-2" src="https://github.com/miroapp/app-examples/assets/10428517/1f103542-79b4-47d8-973b-01c32d7a1113">

7. Once you save the `Foreign Key Relation` your `miroUserId` from the `card-mapping` table should look something like the screenshot below. Click `Save`. We need this to be able to associate the miroUserId with a access_token so we can invoke the Miro REST API.

![supabase-foreign-key-config-summary](https://github.com/miroapp/app-examples/assets/10428517/3670da24-12be-4302-853f-0f24d45063b9)

# ☁️ Netlify Configuration <a name="netlify"></a>

The code in this repo contains three different functions which are meant to be serverless functions:

- netlify/functions/[authorize.js](netlify/functions/authorize.js)
- netlify/functions/[issues.js](netlify/functions/issues.js)
- netlify/functions/[project-cards.js](netlify/functions/project-cards.js)

<b>[authorize.js](netlify/functions/authorize.js)</b> is going to run when you share your app with someone and then go through the OAuth flow.

<b>[issues.js](netlify/functions/issues.js)</b> is going to run when you update the title or description of an issue. We have a GitHub action which will do this, defined in `.github/workflows/issues.yml`. You will need to update the [GitHub Action URL](https://github.com/miroapp/app-examples/blob/main/examples/github-appcards/.github/workflows/issues.yml#L11) to point to your deployed Netlify function. It should look something like `https://miro-github.netlify.app/.netlify/functions/issues`.

<b>[project-cards.js](netlify/functions/project-cards.js)</b> is going to run when you move a card to a different column i.e. if you move a card from `To Do` to `Done`. We have a GitHub action which will do this, defined in `.github/workflows/project-cards.yml`. You will need to update the [GitHub Action URL](https://github.com/miroapp/app-examples/blob/main/examples/github-appcards/.github/workflows/project-cards.yml#L13) to point to your deployed Netlify function. It should look something like `https://miro-github.netlify.app/.netlify/functions/project-cards`.

Now we will show you step by step how to set this up for free with Netlify. <i>When you deploy your site with Netlify, it will
automatically generate those functions since Netlify is looking for serverless functions in the `netlify/functions` directory</i>.

1. Go to your Netlify account and auth with your GitHub account.
2. Download the `github-appcards` repo by going to developers.miro.com and then scrolling down to `Create apps using samples`. Then find GitHub App Cards and click on the `Download source code as .zip`. Unzip the files. Rename the project to `github-appcards`.
   ![download-source-code](https://github.com/miroapp/app-examples/assets/10428517/42edc852-3c2d-4f1d-bce7-a2ec4d7c7cb5)

3. Create a new GitHub repo, and push up your `github-appcards` project which you just downloaded to it. You can use the following commands to do so:

```
cd github-appcards
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/<your-github-username>/<your-new-github-repo-which-will-hold-github-appcards-code>
git push -u origin main
```

4. At this point, you should have a personal repo which has the [GitHub-appcards code](https://github.com/miroapp/app-examples/tree/main/examples/github-appcards) in it. We will use this repo as a way to
   deploy this app with Netlify.

5. Go into Netlify, login, and from the `Team overview` section, click on `Add new site` -> `Import an existing project` -> `Deploy with GitHub` and then
   authenticate into GitHub and select this project which you just created which holds the GitHub app cards code. Select the `main` branch and `Deploy`

6. Once the deploy is complete, you app should be deployed to `<site-name>.netlify.app`. For example, mine was `https://peaceful-fairy-c2e727.netlify.app`
   as shown in the screenshot below. I will use the `https://peaceful-fairy-c2e727.netlify.app` as the example for how to connect your Miro app to the
   Netlify app but just understand that your URL will be different.

   <img width="708" alt="netlify-app-name" src="https://github.com/miroapp/app-examples/assets/10428517/efc7d228-af74-4771-9028-c701ad55efc4">

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

<b> Make sure to change `sdkUri`, `redirectUris`, and `redirectUriForSdk` with your site name. </b>

3. From the `Redirect URI for OAuth2.0` section in app settings, click on `Options` and make sure `Use this URI for SDK authorization` is checked,
   as shown in the screenshot below.

<img width="812" alt="use-redirect-url-for-sdk-auth" src="https://github.com/miroapp/app-examples/assets/10428517/1bae05ad-f0c6-451c-9373-7c52cae856d2">

5. Rename the `.sample.env` file at the base of the `github-appcards` repo to `.env` and fill in the values as detailed in the comments. Note,
   your `redirectUriForSdk` on your app settings should be the same as the `MIRO_REDIRECT_URI` in your env variables. Below, I have used the
   `peaceful-fairy` example to show how you should fill in this env file. Note that you must use your own deployed app base name and then it should end in `.netlify/functions/authorize` for the `MIRO_REDIRECT_URI`.

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
# Login to your account, then go down to Project Settings -> API -> URL.
# Your connection should look like `https://ahnvcdiskdadfgbljsdm.supabase.co
VITE_DATABASE_URL=

# Enter the API key of the Supabase project with the database that the app uses for data persistence here.
# For more information, see:
# Login to your account, then go down to Project Settings -> API -> Project API keys -> anon public.
VITE_DATABASE_PUBLIC_KEY=

# Enter the base URL of the hosting service your app runs on here.
# If you're developing locally, it can be 'localhost'.
# Netlify example: https://peaceful-fairy-c2e727.netlify.app/
VITE_BASE_URL=

# Enter the client secret of your app here.
# To retrieve the client secret, go to https://miro.com/app/settings/user-profile/
# Select 'Your apps', and then the app whose secret you want to retrieve.
# The app client secret is under 'App Credentials' > 'Client secret'.
MIRO_CLIENT_SECRET=

# Enter the OAuth code grant flow redirect URI for your app here.
# For more information, see:
# https://developers.miro.com/docs/getting-started-with-oauth
# Netlify example: https://peaceful-fairy-c2e727.netlify.app/.netlify/functions/authorize
MIRO_REDIRECT_URI=
```

6. Once you have filled this in, go back to your Netlify deploys and click on `Site configuration` -> then click on `Environment variables` ->
   `Add a variable` -> `import from a .env file` and then just copy and paste the content and click on `Import variables`.

7. Trigger a new deploy.

<b>Make sure your URLs have https:// at the beginning, otherwise the OAuth flow will not work.</b>
Also make sure that your MIRO_REDIRECT_URI ends in `.netlify/functions/authorize`.

8. Lastly, you will need to change the URL in the GitHub action to point to your own deployed serverless functions. Point your GitHub action for `issues` to point to your `issues` endpoint from your serverless functions. The same should be done for `project-cards`.
   Go to [.github/workflows/issues.yml](.github/workflows/issues.yml) and change the URL on [line 11](.github/workflows/issues.yml#L11).
   Go to [.github/workflows/project-cards.yml](.github/workflows/project-cards.yml) and change the URL [on line 13](.github/workflows/project-cards.yml#L13).

# 🏃🏽‍♂️ Run the app <a name="run"></a>

1. Go back to your app home page, and under the `Share app` section, click on `Copy` and paste the URL in your browser. Install the app on a dev team.

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

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
