## GitHub app cards

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
- Paste the URL under **App URL** in your [app settings](https://developers.miro.com/docs/build-your-first-hello-world-app#step-3-create-your-app-in-miro).
- Open a board; you should see your app in the app toolbar or in the **Apps** panel.

### How to build the app

- Run `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### Folder structure

The strcuture below outlines the most important files in the project used for it's core functionality.

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
│      index.ts <-- Initializes app, and contains logic ffor opening the app from the sidebar and expanding an app card.
│      modal.tsx <-- The main entry for the modal that appears when selecting a GitHub issue to import.
├── app.html <-- The app itself. This is loaded on the board inside 'app.tsx'
├── appcard-modal.html <-- The app card modal itself. This is loaded on the board inside the 'appcard-modal.tsx'
├── index.html <-- The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
└── modal.html <-- The modal itself. This is loaded on the board inside the 'modal.tsx'
```

## Required Environment Variables

```.env
VITE_GH_ACCESS_TOKEN=
VITE_SUPABASE_PASSWORD=
VITE_DATABASE_URL=
VITE_DATABASE_PUBLIC_KEY=
VITE_BASE_URL=
VITE_MIRO_API_TOKEN=
MIRO_CLIENT_SECRET=
MIRO_REDIRECT_URI=
```

### About the app

This sample app demonstrates how a 2 way sync flow could work with GitHub Projects.

This example was built in React off of the [`create-miro-app`](https://www.npmjs.com/package/create-miro-app) React/Typescript starter. This app uses [Vite](https://vitejs.dev/). If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
