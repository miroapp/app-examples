# Python Flask starter

This Python/Flask boilerplate will allow to start using the Miro REST API in a few minutes.

## How to start

- Install the project dependencies: run `pip3 install -r requirements.txt`
- Copy the environment file to add your credentials: `cp sample.env .env`
- Edit `.env` to include your Client ID and Client Secret (please follow [this guide](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app) about how to create a developer app). Note that this demo application works only with [refresh tokens](https://developers.miro.com/reference/authorization-flow-for-expiring-tokens).
- Add `http://127.0.0.1:5000/callback` as a registered redirect URL in your app settings:
  - Go to [App settings](https://miro.com/app/settings/user-profile/apps)
  - Add `http://127.0.0.1:5000/callback` to the `Redirect URI for OAuth2.0:
    <img src="https://user-images.githubusercontent.com/713173/163155037-6f70fb9e-d3e9-42f4-b130-a5b82a606b86.png" align="center"/>
- Make sure you enable the `boards.read` and `boards.write` scopes

<img src="https://user-images.githubusercontent.com/713173/163156247-c3e64be2-ed40-4bf1-a8f0-6a084b1fa0c7.png" align="center"/>

- Run the app with `python3 app.py`
- Open the page http://127.0.0.1:5000

## Folder structure

```
.
├── sample.env <-- template to store credentials
│  └── templates <-- contains the 2 web pages used for the app
├── app.py <-- The app itself
└── requirements.txt <-- python libraries used to build this demo app
```

### About the app

This sample app shows how you can use the Miro REST API. It implements the full OAuth2 flow and calls the [Create Miro board API endpoint](https://developers.miro.com/reference/create-board).

This app uses [Flask](https://flask.palletsprojects.com/en/2.1.x/) and [Python](https://www.python.org/).
