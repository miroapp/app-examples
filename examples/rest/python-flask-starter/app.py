import os, json
import requests
from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "yay v2"

# Grab the values from your .env file
load_dotenv()
miro_client_id = os.getenv("MIRO_CLIENT_ID")
miro_client_secret = os.getenv("MIRO_CLIENT_SECRET")
redirect_uri = os.getenv("redirect_uri")

# These values are accurate for the Miro REST API, as of Apr 12, 2022
miro_authorize_url = "https://miro.com/oauth/authorize"
miro_token_url = "https://api.miro.com/v1/oauth/token"
miro_boards_url = "https://api.miro.com/v2/boards"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login")
def login():
    # OAuth Step 1: Create authorization request link
    authorization_url = create_auth_url()

    # OAuth Step 2: Direct the user to your authorization request link
    return redirect(authorization_url)


@app.route("/callback")
def oauth_callback():
    # NOTE: At this point, the response from the user's authorization will be sent to your
    #    redirect URI, and you will be able to note the authorization code in the link.
    #    The link will look like:
    #      localhost/?code={CODE}&client_id={CLIENT_ID}&team_id={TEAM_ID}
    authorization_code = request.args.get("code")

    # OAuth Step 3: Exchange the authorization code for an access token
    access_token, refresh_token = create_token_request(authorization_code)
    session["user_access_token"] = access_token
    session["user_refresh_token"] = refresh_token

    return render_template("loggedin.html")


@app.route("/create_board")
def create_board():
    token = session.pop("user_access_token")
    create_response = make_api_call(token)
    status_code = create_response.status_code
    if status_code >= 200 and status_code < 300:
        response_data = json.loads(create_response.text)
        board_url = response_data["viewLink"]
        return redirect(board_url)
    return "uh oh, that didn't work"


def create_auth_url():
    """This function constructs and returns an authorization request link,
    as described in Step 1 of the Authorization documentation.
    """

    auth_url = miro_authorize_url + "?response_type=code"
    auth_url = auth_url + "&client_id=" + miro_client_id
    auth_url = auth_url + "&redirect_uri=" + redirect_uri
    return auth_url


def create_token_request(auth_code):
    """This function constructs an HTTP request to get an access token by exchanging
    the authorization code, as described in Step 3 of the Authorization documentation.
    """

    # Define the parameters of the body of the request
    data = {
        "grant_type": "authorization_code",
        "client_id": miro_client_id,
        "client_secret": miro_client_secret,
        "code": auth_code,
        "redirect_uri": redirect_uri,
    }

    # Issue the request using the `requests` library
    response = requests.request("POST", miro_token_url, data=data)
    print("The API response for your code exchange request: " + "\n" + response.text)

    # Parse the results using the `json` library, and return the tokens
    # NOTE: Your app will be responsible for securing and storing these values. See the
    #   Authorization documentation for more information.
    response_data = json.loads(response.text)
    return (response_data["access_token"], response_data["refresh_token"])


def make_api_call(access_token):
    """This function constructs an HTTP request to call the getBoard REST API endpoint,
    including the access token, as described in Step 4 of the authorization documentation.
    """

    # Define the payload of the Create Board API call, setting a name and a permissions policy.
    data = {
        "name": "Hello, world!",
        "policy": {
            "permissionsPolicy": {"copyAccess": "anyone"},
            "sharingPolicy": {
                "access": "private",
                "inviteToAccountAndBoardLinkAccess": "no_access",
                "organizationAccess": "private",
                "teamAccess": "private",
            },
        },
    }

    # Construct the request
    api_call_url = miro_boards_url
    headers = {
        "Authorization": "Bearer " + access_token,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    api_call_response = requests.post(api_call_url, json=data, headers=headers)
    print(api_call_response)
    return api_call_response


def refresh_token_request(refresh_token):
    """This function constructs an HTTP request to get a new access token by exchanging
    the refresh token, as described in Step 5 of the Authorization documentation.
    """

    # Define the parameters of the body of the request
    data = {
        "grant_type": "refresh_token",
        "client_id": miro_client_id,
        "client_secret": miro_client_secret,
        "refresh_token": user_refresh_token,
    }

    # Issue the request using the `requests` library
    refresh_response = requests.post(miro_token_url, data=data)
    print(
        "The API response for your refresh token exchange request: "
        + "\n"
        + refresh_response.text
    )

    # Parse the results using the `json` library, and return the tokens
    # NOTE: Your app will be responsible for securing and storing these values. See the
    #   Authorization documentation for more information.
    refresh_response_data = json.loads(refresh_response.text)
    return (
        refresh_response_data["access_token"],
        refresh_response_data["refresh_token"],
    )


if __name__ == "__main__":
    app.run()
