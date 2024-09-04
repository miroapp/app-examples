# Python Webhooks

This app demonstrates how to receive webhook events from your Miro board using Python and Flask. By following this guide, you will set up a local environment, create a webhook subscription, and test receiving events when changes are made on your Miro board.

# 👨🏻‍💻 App Demo

https://github.com/user-attachments/assets/0ccffb46-daab-4fc9-8ff8-f5720237f75a

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

# 📖 Associated developer tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial of this app including code explanations, see [Getting started with Miro webhooks using Python](https://developers.miro.com/docs/getting-started-with-webhooks-python) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

> It is recommended to use a virtual environment to run this app example. Go to where you `.venv` is located and then run `source ./bin/activate` command. Read more about venvs [here](https://docs.python.org/3/library/venv.html).

1. Create a new Miro app on [developers.miro.com](https://developers.miro.com/). This will take you to the app settings page. There you will find the `MIRO_CLIENT_ID` and `MIRO_CLIENT_SECRET` to be added to your `.env` file. Ensure that your app URL is `http://localhost:5000` since that is what port Flask will be running on.
   
   - Ensure the `boards:read` scope is selected.
   - Install the app on your developer team. You will get an **access token** which you will need later to authenticate the creation of your webhook subscription.

2. In a new terminal window, run:


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
