# Python Flask starter

This Python/Flask boilerplate will allow to start using the Miro REST API in a few minutes.

## How to start

1. Install the project dependenciesAwes: run `pip3 install -r requirements.txt`
2. Create your `.env` file by copying the template, and use it to store your credentials: \
   ```
   cp sample.env .env
   ```
3. In your account profile, go to **Your apps**, and then select the app you just created to access its settings page. \
   On the app settings page:
   - Go to **App Credentials**, and copy the app **Client ID** and **Client secret** values. \
     Paste these details to your `.env` file `clientId` and `clientSecret` variables.
4. Then, open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:

   - [`redirectUris`](https://developers.miro.com/docs/app-manifest#redirecturis): assign `http://127.0.0.1:5000/callback` as a value for this property. \
     It defines the redirect URL that starts the OAuth 2.0 code grant flow for the REST API.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`

5. Run the app with `python3 app.py`
6. Open the page at `http://127.0.0.1:5000`

ℹ️ Note:

- This demo application works only with [refresh tokens](https://developers.miro.com/reference/authorization-flow-for-expiring-tokens).

## Folder structure

```
.
├── sample.env <-- Template environment file to store env vars and credentials.
│  └── templates <-- Contains the 2 web pages used for the app.
├── app.py <-- The app itself.
└── requirements.txt <-- Python libraries used to build the app.
```

### About the app

This sample app shows how you can use the Miro REST API. \
It implements the full OAuth2 flow and calls the [Create Miro board API endpoint](https://developers.miro.com/reference/create-board).

This app uses [Flask](https://flask.palletsprojects.com/en/2.1.x/) and [Python](https://www.python.org/).
