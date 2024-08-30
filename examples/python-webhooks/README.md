# Python Webhooks

This app shows how to get webhook events on your Miro board using Python and Flask.

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

- [Miro Node Client Library with Python](https://miroapp.github.io/api-clients/python/miro_api.html)
  - [miro.exchangeCodeForAccessToken()](https://miroapp.github.io/api-clients/python/miro_api.html#Miro.exchange_code_for_access_token)
  - [miro.isAuthorized()](https://miroapp.github.io/api-clients/python/miro_api.html#Miro.is_authorized)
  - [miro.getAuthUrl()](https://miroapp.github.io/api-clients/python/miro_api.html#Miro.get_auth_url)
  - [api.get_all_boards()](https://miroapp.github.io/api-clients/python/miro_api/api_extended.html#MiroApiExtended.get_all_boards)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Python](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Python](https://www.python.org/) 3.9 or a later version.
- Your development environment includes [pip](https://www.python.org/) 24.0 or a later version.
- Your development environment includes [ngrok](https://ngrok.com/) or something similar.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this app (including code explanations) see the [Getting started with Miro webhooks using Python tutorial](https://developers.miro.com/docs/getting-started-with-webhooks-python) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

0. It is recommended to use a virtual env to run this app example. Go to where you .venv is and then activate it with the
   `source ./bin/activate` command. Read more about venvs [here](https://docs.python.org/3/library/venv.html).

1. Create a new Miro app on [developers.miro.com](https://developers.miro.com/). This will take you to the app settings page. There you
   will find the `MIRO_CLIENT_ID` and `MIRO_CLIENT_SECRET` to be added to your `.env` file.Ensure that your app URL is `http://localhost:5000` since that is what port Flask will be running on. Ensure that `boards:read` scope is checked,
   and then go ahead and install the app on your developer team. You will get an **access token** which you will need later to
   authenticate the creation of your webhook subscription.

2. In a new terminal session, run:

```
ngrok http 5000
```

This will output something like this:

```
Forwarding https:<your-ngrok-url> -> http://localhost:5000
```

The `https:<your-ngrok-url>` is your `MIRO_REDIRECT_URL` to be used in the `.env` file and then later when calling the API to create a webhook subscription.

3. Rename the `.sample.env` file to `.env` and then add in your `MIRO_CLIENT_ID` and `MIRO_CLIENT_SECRET` from your [developers.miro.com](https://developers.miro.com/) app settings page. Use the `forwarding URL` from the previous step for the `MIRO_REDIRECT_URL` in the .env file. Save the file as `.env` with your new variables.

4. Run `pip install -r requirements.txt` to install dependencies.

5. Run `flask --app app run` to start the server. Your server should be running on port 5000.

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
├── app.py - main logic to receive webhooks and start the server
├── .sample.env <-- File with sample env variables. Need to rename to .env and then add in your variables.
├── app-manifest.yaml <-- File with sample manifest file for easy copy paste into your developer app settings manifest.
├── requirements.txt <-- File with libraries which the project depends on, including versions.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
