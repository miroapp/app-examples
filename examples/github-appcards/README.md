## GitHub app cards

This full-stack example shows how to build an integration with GitHub that syncs data between GitHub issues and Miro app cards.

💡 Check the complete tutorial: [Enable 2-way sync between app cards and GitHub cards](https://developers.miro.com/docs/enable-2-way-sync-between-app-cards-and-github-cards)

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information about implementing [drag and drop](https://developers.miro.com/docs/add-drag-and-drop-to-your-app), visit our [developer documentation](https://developers.miro.com).

### How to start locally

- Run `npm install` to install dependencies.
- Add a `.env` file with the required environment variables (See section at bottom)
- Run `npm start` to start developing. \
  Your URL should be similar to this example:
  ```
  http://localhost:3000
  ```
- Paste the URL under **App URL** in your [app settings](https://developers.miro.com/docs/build-your-first-hello-world-app#step-2-create-your-app-in-miro).
- Open a board; you should see your app in the app toolbar or in the **Apps** panel.

### How to build the app

- Run `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### Folder structure

The structure below outlines the most important files in the project used for its core functionality.

```
.
├── .github
├── netlify
├── src
│  └── assets
│      └── style.css <-- CSS styles for the app.
|  └── components <-- Folder of all UI components used in the app.
|  └── utils
│      └── github.ts <-- Utility functions for interacting with the GitHub API
│          miro.ts <-- Utility functions for interacting with the Miro Web SDK & API
│          supabase.ts <-- Main entry for interacting with Supabase
│  └── app.tsx <-- The main entry. Contains structure for the sidebar when launched.
│      appcard-modal.tsx <-- The main entry for the modal that appears when an app card is expanded.
│      constants.ts <-- A collection of static variables used throughout the app.
│      index.ts <-- Initializes app, and contains logic for opening the app from the sidebar and expanding an app card.
│      modal.tsx <-- The main entry for the modal that appears when selecting a GitHub issue to import.
├── app.html <-- The app itself. This is loaded on the board inside 'app.tsx'
├── appcard-modal.html <-- The app card modal itself. This is loaded on the board inside the 'appcard-modal.tsx'
├── index.html <-- The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
└── modal.html <-- The modal itself. This is loaded on the board inside the 'modal.tsx'
```

## Required Environment Variables

To run the app, Vite loads an `.env` file with the [environment variables](https://vitejs.dev/guide/env-and-mode.html#env-files).
Use the commented example below to create your `.env` file.

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
# For more information, see:
# https://developers.miro.com/docs/build-your-first-hello-world-app#step-3-configure-your-app-in-miro
MIRO_CLIENT_SECRET=

# Enter the OAuth code grant flow redirect URI for your app here.
# For more information, see:
# https://developers.miro.com/docs/getting-started-with-oauth
# https://developers.miro.com/reference/authorization-flow-for-expiring-access-tokens
MIRO_REDIRECT_URI=
```

### About the app

This sample app demonstrates how a 2-way sync flow works with GitHub Projects.

This example was built in React off of the [`create-miro-app`](https://www.npmjs.com/package/create-miro-app) React/Typescript starter. \
This app uses [Vite](https://vitejs.dev/). If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
