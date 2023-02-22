## Miro Asset Search

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information about implementing [drag and drop](https://developers.miro.com/docs/add-drag-and-drop-to-your-app), visit our [developer documentation](https://developers.miro.com).

### How to start locally

- Run `npm install` to install dependencies.
- Run `npm start` to start developing. \
  Your URL should be similar to this example:
  ```
  http://localhost:3000
  ```
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
│  └── components
│      └── Input.tsx <-- Styled input used to search through assets.
│  └── styles
│      └── style.css <-- CSS styles for the app.
│  └── App.tsx <-- The main app. Contains structure for the sidebar when launched. This file also contains logic for fetching images from [The Noun Project](https://thenounproject.com/).
│      main.tsx <-- Initializes app, and contains logic for dropping image onto the board.
├── app.html <-- The app itself. This is loaded on the board inside the 'appContainer'.
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```

### About the app

This sample app shows how you can search through images and then drag and drop them onto a Miro board. \
Built in React off of the [`create-miro-app`](https://www.npmjs.com/package/create-miro-app) React/Typescript starter.

This app uses [Vite](https://vitejs.dev/). \
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
