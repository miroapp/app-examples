# Miro calendar sample app

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- For more information about [building a calendar](https://beta.developers.miro.com/docs/building-a-calendar-app-in-miro), visit our [developer documentation](https://beta.developers.miro.com).

## How to start

- Run `yarn` or `npm install` to install dependencies.
- Run `yarn start` or `npm start` to start developing. \
  Your URL should be similar to this example:

```
http://localhost:3000
```

- Paste this URL in the `App URL` box in your Miro app settings.
- Open a board and click the three dots (...) or the chevron (>>) on the left
  toolbar. You should see the Miro calendar app.

## How to build the app

- Run `yarn run build` or `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

## Folder structure

```
.
├── src
│  └── styles
│      └── style.css <-- CSS styles for the app.
│  └── App.tsx <-- The main app. Contains strucutre for the sidebar when launched.
│      main.tsx <-- Initializes app
│      useCalendar.ts <-- Functions to generate a calendar
├── app.html <-- The app itself. This is loaded on the board inside the 'appContainer'
└── index.html <-- The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
```

### About the app

This sample app shows how you can generate a calendar consisting of Frames and Text. Built in React off of the [`create-miro-app`](https://www.npmjs.com/package/create-miro-app) React/Typescript starter.

This app uses [Vite](https://vitejs.dev/).
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
