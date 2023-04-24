## CSV to mind map importer

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information about the [CSV to mind map importer](https://developers.miro.com/docs/create-mind-map-from-csv) app, visit our [developer documentation](https://developers.miro.com).

### About the app

This app shows how to import data from a CSV file and create a mind map in a Miro board.
This app is bootstrapped using [create-miro-app](https://www.npmjs.com/package/create-miro-app). It uses React, Typescript, and Vite.

To modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).

### How to start locally

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:
   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property. \
     It defines the entry point of the app, and it corresponds to the URL of the server that the app runs on.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`
4. Open a board: you should see your app in the apps toolbar or in the apps panel.

### How to build the app

- Run `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### Folder structure

```
.
├── src
|  ├── example-data // Example CSV data 
│  ├── assets
│  │  └── style.css
│  ├── app.tsx     // The code for the app lives here
│  ├── index.ts    // The code for the app entry point lives here
│  └── utils.ts    // Utilities for loading CSV files
├── app.html       // The app itself. It's loaded on the board inside the 'appContainer'
└── index.html     // The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
```
