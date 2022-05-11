# Sticky notes to shapes sample app

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- For more information about [converting sticky notes to shapes](https://beta.developers.miro.com/docs/converting-sticky-notes-to-shapes), visit our [developer documentation](https://beta.developers.miro.com).

## How to start

- Run `yarn` or `npm install` to install dependencies.
- Run `yarn start` or `npm start` to start developing. \
  Your URL should be similar to this example:

```
http://localhost:3000
```

- Paste this URL in the `App URL` box in your Miro app settings.
- Open a board and click the three dots (...) or the chevron (>>) on the left
  toolbar. You should see the Miro starter app.

## How to build the app

- Run `yarn run build` or `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

## Folder structure

```
.
├── src
│  └── index.js <-- The code for the entry point lives here. For this sample app, all the logic is contained here.
└── index.html <-- The app entry point. This is what you add to the App URL box in the Miro app settings.
```

### About the app

This sample app shows how you can select items on the board, and then click the app icon to change the selected sticky notes into shapes.

This app uses [Vite](https://vitejs.dev/).
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
