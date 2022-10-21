## Miro REST sticky notes with tags

This sample app shows you how to use the [Miro Node.js client](https://www.npmjs.com/package/@mirohq/miro-api) to interact with the [Miro REST API](https://developers.miro.com/reference/api-reference). The app uses the available CRUD (create, read, update, delete) methods to add and manage sticky notes with tags on a Miro board.

Miro capabilities covered in this sample app:

1. [x] Miro sticky note items
2. [x] Miro tag items
3. [x] CSV data to Sticky notes with tags

### Prerequisites:

1. Create an [app in Miro](https://miro.com/app/settings/user-profile/apps).
2. Create a board in Miro that you'd like to import / create sticky notes to.
3. `localtunnel` to host `localhost` online (see [How to run the project](#how-to-run-the-project) below).

### Dependencies:

- [Miro Node.js client](https://www.npmjs.com/package/@mirohq/miro-api)
- [Localtunnel](https://github.com/localtunnel/localtunnel) or similar tool, such as [ngrok](https://ngrok.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Axios](https://www.npmjs.com/package/axios)
- [Handlebars](https://handlebarsjs.com/)
- [Fast-CSV](https://www.npmjs.com/package/fast-csv)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [Dotenv](https://www.npmjs.com/package/dotenv)

### Setup

1. Clone or download the repo.
2. `cd` to the root repo folder.
3. `npm install` to install dependencies.
4. Create a copy of the `.env.example` file in the root folder or rename it to `.env`, and ensure the following variables are set (see [How to run the project](#how-to-run-the-project) for more info):

```
clientID=<YOUR_CLIENT_ID>
clientSecret=<YOUR_CLIENT_SECRET>
redirectURL=<YOUR_REDIRECT_URL>
boardId=<MIRO_BOARD_ID>
```

### How to run the project

1. Open a new terminal in the root folder of the project.
1. Run `npm run start`
1. Your console should return `"The web server has started on port 8000", "Listening on localhost, port 3000"`, and your `localtunnel` address (https://mirotunnel.loca.lt/)
1. Copy your `localtunnel` address, and paste it in the **Redirect URI for OAuth 2.0** input field in your Miro app settings.
1. In your Miro app settings, copy **Client ID** and **Client secret**. Paste these details to your `.env` file `clientId` and `clientSecret` variables.
1. In your desired Miro board, copy the board ID from the URL, and paste it to your `.env` file `boardId` variable.
1. Finally, copy the original `localtunnel` address (https://mirotunnel.loca.lt/), and paste it to your `.env` file `redirectURL` variable.
1. To use the app, go to `http://localhost:8000/`.

ℹ️ To reinitialize your project's servers, it may be necessary to to restart the server. ℹ️

### Folder structure

```
.
├── package.json <-- The dependencies for the main app.js
└── app.js <-- The main Node.js script to run the Express server and render our Handlebars app
└── .env <-- File where you are storing your sensitive credentials
└── node_modules <-- Node modules that are installed based on dependencies
└── authorization
      └── auth.js
      └── package.json <-- The dependencies for auth.js
└── views
      └── authorizeApp.hbs <-- Handlebars file to render authorization success page
      └── createCard.hbs <-- Handlebars file to render sticky creation page
      └── deleteCard.hbs <-- Handlebars file to render sticky deletion page
      └── updateCard.hbs <-- Handlebars file to render sticky update page
      └── uploadCSV.hbs <-- Handlebars file to render CSV upload page
      └── viewCard.hbs <-- Handlebars file to render sticky list page
      └── home.hbs <-- main Handlebars file to render universal/root rendering
      └── layouts
            └── main.hbs <-- the Handlebars 'app' itself

```

### About the app

This is a backend app built on Node.js and Express.js, with Handlebars.js for rendering.\
We use Localtunnel for hosting our localhost port over HTTPS. Localtunnel exposes your local environment online so that you can more easily test. \
Per Localtunnel, it's "Great for working with browser testing tools like browserling or external API callback services [...] which require a public URL for callbacks."
