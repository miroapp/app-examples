# Miro REST Stickies with Tags

This sample app demonstrates the use of the Miro REST API's [Sticky Note and Tags endpoints](https://beta.developers.miro.com/docs/stickynote-1) to import external structured data (.csv) into Miro. It makes use of each of the available CRUD (create, read, update, delete) methods to add and manage stickies with tags on a Miro board.

Miro capabilities covered in this sample app:

1. [x] Miro Sticky Note items
2. [x] Miro Tag items
3. [x] CSV data —> Stickies with tags

## Prerequisites:

1. Create an [app in Miro](https://miro.com/app/settings/user-profile/apps)
2. Create a board in Miro that you'd like to import / create stickies to
3. `localtunnel` to host localhost online (see installation section below)

## Dependencies:

- [Localtunnel](https://github.com/localtunnel/localtunnel) (or similar, such as [ngrok](https://ngrok.com/download))
- [NodeJS](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/en/starter/installing.html)
- [Axios](https://www.npmjs.com/package/axios)
- [HandlebarsJS](https://handlebarsjs.com/)
- [Fast-CSV](https://www.npmjs.com/package/fast-csv)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## How to start

1. Clone or download repo
2. `cd` to root folder
3. Run `npm install` to install dependencies.
4. Create a copy of the .env.example file in the root folder or rename it .env, and ensure the following variables are set:

```
clientID={YOUR_CLIENT_ID}
clientSecret={YOUR_CLIENT_SECRET}
redirectURL={YOUR_REDIRECT_URL}
boardId={MIRO_BOARD_ID}
```

5. `cd` to `authorization` folder
6. Run `npm install` in the `authorization` folder to install dependencies
7. Create a copy of the .env.example file in the root folder or rename it .env, and ensure the following variables are set:

```
clientID={YOUR_CLIENT_ID}
clientSecret={YOUR_CLIENT_SECRET}
redirectURL={YOUR_REDIRECT_URL}
boardId={MIRO_BOARD_ID}
```

### Set up localtunnel for https environment / authorization

In this example, we will host our local environment over HTTPS using Localtunnel. (You can use other services such as ngrok as well.)

1. Install and run `localtunnel` by running `npx localtunnel --port 8000 -s reststickiestunnel` (include a custom subdomain to ensure your lt url persists) to generate your HTTPS URL for localhost
2. Copy this HTTPS URL and paste it in the Redirect URI for OAuth2.0 box in your Miro app settings
3. Paste this same HTTPS URL into your `.env redirectURL` variable (above)
4. From your desired Miro board, grab the board ID from the URL and paste it into your `.env boardId` variable (above)
5. From your Miro app settings, grab the Client ID and Client Secret. Paste this into your `.env clientId` and `clientSecret` variables (above)

## How to run the project

1. Open a new terminal in the root folder of the project
1. `cd` to the authorization folder
1. Run `npm run start` to start the server for the authorization flow on Port 3000
1. Open another new terminal in the root folder of the project
1. Run `npm run start` to start the server for the Handlebars app
1. Your express server console should reflect "The web server has started on port 8000" (or the port of your choice)
   (Make sure you leave both of these servers running)

## Folder structure

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
      └── authorizeApp.hbs <-- Handebars file to render authorization success page
      └── createCard.hbs <-- Handlebars file to render sticky creation page
      └── deleteCard.hbs <-- Handlebars file to render sticky deletion page
      └── updateCard.hbs <-- Handlebars file to render sticky update page
      └── uploadCSV.hbs <-- Handlebars file to render CSV upload page
      └── viewCard.hbs <-- Handebars file to render sticky list page
      └── home.hbs <-- main Handlebars file to render universal/root rendering
      └── layouts
            └── main.hbs <-- the Handlebars 'app' itself

```

### About the app

This is a backend app built on Node.js and Express.js, with Handlebars.js for rendering. We've used `localtunnel` for hosting our localhost port over HTTPS. Localtunnel exposes your local environment online so that you can more easily test. Per `localtunnel`, it's "Great for working with browser testing tools like browserling or external api callback services...which require a public url for callbacks."
