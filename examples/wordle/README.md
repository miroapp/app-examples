## Miro Wordle sample app

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information, visit our [developer documentation](https://developers.miro.com).

### How to start locally

- Run `npm install` to install dependencies.
- Run `npm start` to start developing. \
  Your URL should be similar to this example: \
  ```
  http://localhost:3000
  ```
- Paste the URL under **App URL** in your [app settings](https://developers.miro.com/docs/build-your-first-hello-world-app#step-3-create-your-app-in-miro).
- Open a board; you should see your app in the app toolbar or in the **Apps** panel.

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
│      main.tsx <-- Initializes app
│      └── lib
│         └── board.ts <-- Methods to create and update content on Miro's board.
│         └── word.ts <-- Methods to select word for the game and
check game statuses.
│      └── constants
│         └── validGuesses.ts <-- List of words that can be guesses in the game.
│         └── wordList.ts <-- List of words to pick from in the game.
├── app.html <-- The app itself. This is loaded on the board inside the 'appContainer'
└── index.html <-- The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
```

### About the app

This sample app shows you how to build the famous Wordle game in Miro. \
The game opens the Library panel allowing you to start a new game and enter your guesses. \
The game will create sticky notes and color them the same way Wordle does it. \
This demo app has been built in React off of the [`create-miro-app`](https://www.npmjs.com/package/create-miro-app) React/Typescript starter.

This app uses [Vite](https://vitejs.dev/). \
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
