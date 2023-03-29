## Miro Wordle sample app

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information, visit our [developer documentation](https://developers.miro.com).

### About the app

This sample app shows you how to build the famous Wordle game in Miro. \
The game opens the Library panel allowing you to start a new game and enter your guesses. \
The game creates sticky notes and colors them the same way Wordle does it.

This app uses React and [Vite](https://vitejs.dev/), and it's based on the [`create-miro-app`](https://www.npmjs.com/package/create-miro-app) React/Typescript starter.

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
│  └── styles
│      └── style.css <-- CSS styles for the app.
│  └── App.tsx <-- The main app. Contains structure for the sidebar when launched.
│      main.tsx <-- Initializes app.
│      └── lib
│         └── board.ts <-- Methods to create and update content on Miro's board.
│         └── word.ts <-- Methods to select word for the game and
check game statuses.
│      └── constants
│         └── validGuesses.ts <-- List of words that can be guesses in the game.
│         └── wordList.ts <-- List of words to pick from in the game.
├── app.html <-- The app itself. This is loaded on the board inside the 'appContainer'.
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```

