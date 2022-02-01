# Miro Wordle sample app

## How to start:

- Run `yarn` or `npm install` to install dependencies.
- Run `yarn start` or `npm start` to start developing. \
  Your URL should be similar to this example:

```
http://localhost:3000
```

- Paste this URL in the `App URL` box in your Miro app settings.
- Open a board and click the three dots (...) or the chevron (>>) on the left
  toolbar. You should see the Miro Wordle app.

## How to build the app:

- Run `yarn run build` or `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

## Folder structure

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

This sample app shows you how to build the famous Worlde game in Miro. The game opens the Library panel allowing you to start a new game and enter your guesses. The game will create sticky notes and color them the same way Wordle does it. This demo app has been built in React off of the [`create-miro-app`](https://www.npmjs.com/package/create-miro-app) React/Typescript starter.

This app uses [Vite](https://vitejs.dev/).
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
