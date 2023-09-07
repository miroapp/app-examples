# Miro Flask Python Starter with OAuth

This app shows how to implement the OAuth2.0 flow and call the Miro REST API's [Create Board](https://developers.miro.com/reference/create-board) endpoint, using Flask / Python.

# 👨🏻‍💻 App Demo
https://github.com/miroapp/app-examples/assets/10800544/767dba77-c3dd-40b0-b6d7-9b216f0fb0b8

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro REST API](https://developers.miro.com/reference/api-reference)
- [Miro OAuth2.0](https://developers.miro.com/docs/getting-started-with-oauth)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [Flask](https://flask.palletsprojects.com/en/2.1.x/)
- [Python](https://www.python.org/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- You have the latest versions of Flask and Python installed.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>
1. Install the project dependenciesAwes by running `pip3 install -r requirements.txt`
2. Create your `.env` file by copying the template, and use it to store your credentials: 
   ```
   cp sample.env .env
   ```
3. In your account profile, go to **Your apps**, and then select the app you just created to access its settings page. \
   On the app settings page:
   - Go to **App Credentials**, and copy the app **Client ID** and **Client secret** values.
   - Paste these details to your `.env` file's `clientID` and `clientSecret` variables.
4. From your App Settings page, open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:

   - [`redirectUris`](https://developers.miro.com/docs/app-manifest#redirecturis): assign `http://127.0.0.1:5000/callback` as a value for this property. \
     It defines the redirect URL that starts the OAuth 2.0 code grant flow for the REST API.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`\
\
Hit **Save**.

5. Run the app with `python3 app.py`
6. Open the page at `http://127.0.0.1:5000`

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── templates
│  └── index.html <-- The html view for users who have not yet authorized Miro
│  └── loggedin.html <-- The html view for users who have authorized Miro
│
├── app.py <-- The python script. This script runs Miro's OAuth flow and calls the Miro REST API.
├── sample.env <-- Sample .env file to show format of environment variables
└── requirements.txt <-- The python requirements file
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).