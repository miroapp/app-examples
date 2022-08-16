from flask import Flask, render_template, url_for, redirect
import requests
from authlib.integrations.flask_client import OAuth

app = Flask(__name__)
oauth = OAuth(app)

app.config["GITHUB_CLIENT_ID"] = "YOUR-GITHUB-CLIENT-ID"
app.config["GITHUB_CLIENT_SECRET"] = "YOUR-GITHUB-CLIENT-SECRET"
app.config["MIRO_ACCESS_TOKEN"] = "YOUR-MIRO-ACCESS-TOKEN"


github = oauth.register(
    name="github",
    client_id=app.config["GITHUB_CLIENT_ID"],
    client_secret=app.config["GITHUB_CLIENT_SECRET"],
    access_token_url="https://github.com/login/oauth/access_token",
    access_token_params=None,
    authorize_url="https://github.com/login/oauth/authorize",
    authorize_params=None,
    api_base_url="https://api.github.com",
    client_kwargs={"scope": "(no scope)"},
)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login/github")
def github_login():
    github = oauth.create_client("github")
    redirect_uri = url_for("github_authorize", _external=True)
    return github.authorize_redirect(redirect_uri)


@app.route("/github/login/authorize")
def github_authorize():
    github = oauth.create_client("github")
    token = github.authorize_access_token()
    resp = github.get("user").json()
    name = resp.get("name")
    location = resp.get("location")
    image_url = resp.get("avatar_url")
    public_gist = str(resp.get("public_gists"))
    public_repos = str(resp.get("public_repos"))
    created_at = resp.get("created_at")

    url = "https://api.miro.com/v2/boards/<your-board-id>/cards"

    payload = {
        "data": {
            "title": f"GitHub account info for {name}",
            "description": f"This account, which was created at {created_at}, belongs to {name}, an individual based in {location}. This owner has {public_gist} gists and {public_repos} repos. Get this avatar here: {image_url}",
        },
        "style": {"cardTheme": "#00FF00"},
        "position": {"origin": "center", "x": 0, "y": 0},
    }
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + app.config["MIRO_ACCESS_TOKEN"],
    }

    response = requests.post(url, json=payload, headers=headers)

    print(f"\n{response.text}\n")

    return "You are successfully logged in using GitHub"
