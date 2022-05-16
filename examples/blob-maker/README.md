# Blob maker app

**&nbsp;ℹ&nbsp;Note**:

- To make drag and drop available in this example, deploy the app to a publicly accessible location. \
  In this example, drag and drop functionality doesn't work if you serve the app on localhost.
- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- For more information about implementing [drag and drop](https://developers.miro.com/docs/add-drag-and-drop-to-your-app), visit our [developer documentation](https://developers.miro.com).

## How to start locally

- Run `yarn` or `npm install` to install dependencies
- Run `yarn start` or `npm start` to start developing, you should have a URL
  that looks like this

```
http://localhost:3000
```

- Paste the URL in `App URL` in your app settings
- open a board & you should see your app in the main toolbar when you click the
  three dots.

## How to start with Glitch

[Glitch Documentation](https://help.glitch.com/kb/article/20-importing-code-from-github/)

- Create a Glitch account if you do not have one already.
- Click New Project.
- You should be able to select the option "Import from Github".
- You can copy this app folder into a new github repo and use this url or you can use https://github.com/CharlieWinters/miro-blob-maker
- After the app starts up, it will have a unique url that will serve the app over https. Click "Preview" in the bottom bar and then "Preview in a new window".
- You should see "Great, your app is running locally!"; copy the URL.
- Paste the URL in `App URL` in your app settings
- Open a board; you should see your app in the main toolbar when you click the
  three dots.

## How to build the app

Run `yarn run build` or `npm run build` and this will generate a static output
inside `dist/` which you can host on static hosting service.

## Folder structure

```
.
├── src
│  ├── assets
│  │  └── style.css
│  ├── app.js      // The code for the app lives here
│  └── index.js    // The code for the app entry point lives here
├── app.html       // The app itself. It's loaded on the board inside the 'appContainer'
└── index.html     // The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
```

### About the app

This sample app shows how you can create dynamic blob SVGs on the fly, and drag and drop them onto a Miro board.
