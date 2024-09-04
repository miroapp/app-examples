# Node Webhooks

This app demonstrates how to receive webhook events from your Miro board using Node.js and Express.js. By following this guide, you will set up a local environment, create a webhook subscription, and test receiving events when changes are made on your Miro board.

# 👨🏻‍💻 App Demo

https://github.com/user-attachments/assets/1448b658-9e6f-4652-8300-6cebbf081f7a

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Node Client Library with Express SDK](https://miroapp.github.io/api-clients/node/index.html)
  - [miro.exchangeCodeForAccessToken()](https://miroapp.github.io/api-clients/node/classes/index.Miro.html#exchangeCodeForAccessToken)
  - [miro.isAuthorized()](https://miroapp.github.io/api-clients/node/classes/index.Miro.html#isAuthorized)
  - [miro.getAuthUrl()](https://miroapp.github.io/api-clients/node/classes/index.Miro.html#getAuthUrl)
  - [miro.as()](https://miroapp.github.io/api-clients/node/classes/index.Miro.html#as)
  - [api.getAllBoards()](https://miroapp.github.io/api-clients/node/classes/index.MiroApi.html#getAllBoards)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version, and npm.
- Your development environment includes [ngrok](https://ngrok.com/) or something similar.

# 📖 Associated developer tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial of this app including code explanations, see [Getting started with webhooks](https://developers.miro.com/docs/getting-started-with-webhooks) on Miro's developer portal.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. **Create a Miro app** on [developers.miro.com](https://developers.miro.com/). This will take you to the app settings page, where you will find the `MIRO_CLIENT_ID` and `MIRO_CLIENT_SECRET`. These need to be added to your `.env` file.
   
   - Ensure the `boards:read` scope is checked.
   - Install the app on your developer team. You will get an **access token**, which is required later to authenticate your webhook subscription.

2. In a new terminal session, run:

```
ngrok http 3000
```

This will output something like this:

```
Forwarding https:<your-ngrok-url> -> http://localhost:3000
```

The `https:<your-ngrok-url>` is your `MIRO_REDIRECT_URL` to be used in the `.env` file and then later when calling the API to create a webhook subscription.

3. Rename the `.sample.env` file to `.env` and then add in your `MIRO_CLIENT_ID` and `MIRO_CLIENT_SECRET` from your [developers.miro.com](https://developers.miro.com/) app settings page. Use the `forwarding URL` from the previous step for the `MIRO_REDIRECT_URL` in the .env file. Save the file as `.env` with your new variables.

4. Run `npm i` to install dependencies.

5. Run `npm start` to start the dev server.

6. Go to your developer team, and open the board you want to receive webhook events for.

7. In a separate browser tab, open up the API Exporer for the [Create Webhook Subscription endpoint](https://developers.miro.com/reference/create-board-subscription).

8. Provide the following information in the API Explorer:

> **Access Token**: Once you get the access token after installing your app on a developer team (from step 4 above), you can add the access token to the Authorization section of the API reference page.
>
> **boardId:** Get the board ID of the board you want to receive notifications for. This board should be in the same team where you installed the app. You can find board ID in the URL when you go to your board: https://miro.com/app/board/<boardId>.
>
> **callbackUrl:** This is the URL where you will receive events. It should be the same as `MIRO_REDIRECT_URL` in `.env`.

9. Select Try It! to run the API request right from the browser. If you get a 201 response, you are ready to receive events!

10. Next, go to to the same board which you referenced in the request above, and create a sticky. You should now receive a webhook event! To learn more about the events you can expect to receive,

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── src
│  └── app.js - main logic to receive webhooks and start the server
│  └── miroMiddleware.css <-- Middleware file to setup OAuth
├── .sample.env <-- File with sample env variables. Need to rename to .env and then add in your variables.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
