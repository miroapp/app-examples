## Blob maker app

**&nbsp;ℹ&nbsp;Note**:

- To make drag and drop available in this example, deploy the app to a publicly accessible location. \
  In this example, drag and drop functionality doesn't work if you serve the app on localhost.
- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information about implementing [drag and drop](https://developers.miro.com/docs/add-drag-and-drop-to-your-app), visit our [developer documentation](https://developers.miro.com).

### About the app

This app shows how to create dynamic blob SVGs on the fly, which you can then drag and drop to a Miro board. This app uses the Miro Web SDK.

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

### How to start with Glitch

[Glitch Documentation](https://help.glitch.com/kb/article/20-importing-code-from-github/)

- Create a Glitch account if you do not have one already.
- Click **New Project**.
- You should be able to select the option **Import from GitHub**.
- You can copy this app folder into a new GitHub repo and use this URL, or you can use [https://github.com/CharlieWinters/miro-blob-maker](https://github.com/CharlieWinters/miro-blob-maker).
- After the app starts up, it will have a unique URL that will serve the app over HTTPS. \
  Click **Preview** in the bottom bar, and then **Preview in a new window**.
- You should see **Great, your app is running locally!**. \
  Copy the URL.
- Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro).
- In the app manifest, paste the URL as the value of [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri).
- Open a board: you should see your app in the apps toolbar or in the apps panel.

### How to build the app

- Run `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

### Folder structure

```
.
├── src
│  ├── assets
│  │  └── style.css
│  ├── app.js      // The code for the app lives here.
│  └── index.js    // The code for the app entry point lives here.
├── app.html       // The app itself. It's loaded on the board inside the 'appContainer'.
└── index.html     // The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```
