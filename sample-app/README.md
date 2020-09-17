# Sample Miro app

Handy playground for playing with Miro Board API and Web-plugins.

### How to use

1. Run `npm install`
2. Run `cp .env.example .env`
3. Run `npm run ngrok` in another terminal
4. Edit `.env` file:
   - Set BASE_URL from ngrok
   - Set CLIENT_ID from the App settings
   - Set CLIENT_SECRET from the App settings
5. Run `npm run start`
6. Open app landing (url from ngrok, like https://--------.ngrok.io)
7. Configure web-plugin — set iframe url in App settings
8. Explore it

Note: remove comments and ' from the .env file before trying to run this sample or it will add them into the Oath call and it will display "application not found" page

### How it works

`app.js` is the entry point

`api.js` contains methods for work with API

`db.js` is simple DataBase which works with file database.txt
