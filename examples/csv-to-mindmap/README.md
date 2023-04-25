## Import data from CSV and create mind map on a Miro board

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information about the [CSV to mind map importer](https://developers.miro.com/docs/create-mind-map-from-csv) app, visit our [developer documentation](https://developers.miro.com).

### About the app

This app shows how to import data from a CSV file and create a mind map on a Miro board.
This app is bootstrapped using [create-miro-app](https://www.npmjs.com/package/create-miro-app). It uses React, Typescript, and Vite.

To modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).

### How to start locally

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. Open the [app-manifest.yml file](https://github.com/miroapp/app-examples/blob/mindmap-app-updates/examples/csv-to-mindmap-importer/app-manifest.yml) and copy the contents. 
4. On the app settings page, click *Edit in Manifest* to open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro). Paste the contents you copied in step 3 into the app manifest editor. \
5. Open a board: you should see your app in the apps toolbar or in the apps panel.

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
