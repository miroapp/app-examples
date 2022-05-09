# Miro REST Stickies with Tags

This sample app demonstrates the use of the Miro REST API's [Sticky Note and Tags endpoints](https://beta.developers.miro.com/docs/stickynote-1) to import external structured data (.csv) into Miro. It makes use of each of the available CRUD (create, read, update, delete) methods to add and manage stickies with tags on a Miro board. 

Miro capabilities covered in this sample app:
- [x] Miro Sticky Note items
- [x] Miro Tag items
- [x] CSV data —> Stickies with tags

## Prerequisites:
- Create an [app in Miro](https://miro.com/app/settings/user-profile/apps)
- Create a board in Miro that you'd like to import / create stickies to

## Dependencies:
- Localtunnel, ngrok, or similar
- NodeJS
- ExpressJS
- Axios
- [HandlebarsJS](https://handlebarsjs.com/)
- [Fast-CSV](https://www.npmjs.com/package/fast-csv)
- Bootstrap
- Dotenv


## How to start

* Clone or download repo
* `cd` to root folder
* Run `npm install` to install dependencies.
* Create a .env file in the root folder, and set the following variables:
```
clientID={YOUR_CLIENT_ID)
clientSecret={YOUR_CLIENT_SECRET}
redirectURL={YOUR_REDIRECT_URL}
boardId={MIRO_BOARD_ID}
```

* `cd` to `authorization` folder
* Run `npm install` in the `authorization` folder to install dependencies
* Create a .env file in the authorization folder, and set the following variables:
```
clientID={YOUR_CLIENT_ID)
clientSecret={YOUR_CLIENT_SECRET}
redirectURL={YOUR_REDIRECT_URL}
boardId={MIRO_BOARD_ID}
``` 

### Set up localtunnel for https environment / authorization
In this example, we will host our local environment over HTTPS using Localtunnel. (You can use other services such as ngrok as well.)

* Install localtunnel (or your preferred service)
* Generate your HTTPS URL (if using localtunnel, lt --port 3000) for localhost
* Copy this HTTPS URL and paste it in the Redirect URI for OAuth2.0 box in your Miro app settings
* Paste this same HTTPS URL into your .env redirectURL variable (above)
* From your desired Miro board, grab the board ID from the URL and paste it into your .env boardId variable (above)
* From your Miro app settings, grab the Client ID and Client Secret. Paste this into your .env clientId and clientSecret variables (above)

## How to run the project
- From the root folder of the project, `cd` to the authorization folder
- Run `npm run start` to start the server for the authorization flow on Port 3000
- `cd` back to the root folder of the project
- Run `npm run start ` to start the server for the Handlebars app
- Your express server console should reflect "The web server has started on port 8000" (or the port of your choice)
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

This is a backend app built on Node.js and Express.js, with Handlebars.js for rendering. 