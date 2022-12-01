## Sticky notes to shapes sample app

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information about [converting sticky notes to shapes](https://developers.miro.com/docs/converting-sticky-notes-to-shapes), visit our [developer documentation](https://developers.miro.com).

### How to start locally

- Run `npm install` to install dependencies.
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

```
.
├── src
│  └── index.js <-- The code for the entry point lives here. For this sample app, all the logic is contained here.
└── index.html <-- The app entry point. This is what you add to the App URL box in the Miro app settings.
```

### About the app

This sample app shows how you can select items on the board, and then click the app icon to change the selected sticky notes into shapes.

This app uses [Vite](https://vitejs.dev/). \
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
