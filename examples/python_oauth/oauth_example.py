""" This sample demonstrates how to implement the Oauth 2.0 authorization code flow in Miro.
    For a detailed explanation of this process, see the guide in our documentation:
    https://beta.developers.miro.com/docs/getting-started-with-oauth
"""
import requests, json

# Update these with the values for your app, found in the developer portal. Note that the Miro board
#   you choose will need to be one of the boards associated with the team you choose in the Miro
#   authorization dialog shown in Step 2.
redirect_uri = "{YOUR REDIRECT URI}"
client_id = "{YOUR CLIENT ID}"
client_secret = "{YOUR CLIENT SECRET}"
miro_board_id = "{YOUR TEST BOARD ID}"

# These values are accurate for the Miro REST API, as of Jan 26, 2022
miro_authorize_url = "https://miro.com/oauth/authorize"
miro_token_url = "https://api.miro.com/v1/oauth/token"
miro_get_board_url = "https://api.miro.com/v2/boards/"

def main():
  # Step 1: Create authorization request link
  authorization_url = create_auth_url()

  # Step 2: Direct the user to your authorization request link
  print("Copy and paste the following url into your browser: " + "\n" + authorization_url)

  # NOTE: At this point, the response from the user's authorization will be sent to your
  #    redirect URI. If you do not currently have one set up, you can use "http://localhost".
  #    After clicking through the authentication dialog, your browser will attempt to redirect
  #    to localhost, and you will be able to note the authorization code in the link.
  #    The link will look like:
  #      localhost/?code={CODE}&client_id={CLIENT_ID}&team_id={TEAM_ID}
  authorization_code = input("Input the auth code here: ")

  # Step 3: Exchange the authorization code for an access token
  access_token, refresh_token = create_token_request(authorization_code)

  # Step 4: Use the access token for REST API requests
  make_api_call(access_token)

  # Step 5: Request a new access token using the refresh token 
  access_token, refresh_token = refresh_token_request(refresh_token)

  print("Congratulations on completing a successful OAuth 2.0 authorization code flow :)")

###
###
###

""" This function constructs and returns an authorization request link,
      as described in Step 1 of the Authorization documentation.
"""
def create_auth_url():
  auth_url = miro_authorize_url + "?response_type=code"
  auth_url = auth_url + "&client_id=" + client_id
  auth_url = auth_url + "&redirect_uri=" + redirect_uri
  return auth_url


""" This function constructs an HTTP request to get an access token by exchanging
      the authorization code, as described in Step 3 of the Authorization documentation.
"""
def create_token_request(auth_code):
  # Define the parameters of the body of the request
  data = {
      "grant_type" : "authorization_code",
      "client_id" : client_id,
      "client_secret" : client_secret,
      "code" : auth_code,
      "redirect_uri" : redirect_uri
  }
  
  # Issue the request using the `requests` library
  response = requests.request("POST", miro_token_url, data=data)
  print("The API response for your code exchange request: " + "\n" + response.text)
  
  # Parse the results using the `json` library, and return the tokens
  # NOTE: Your app will be responsible for securing and storing these values. See the
  #   Authorization documentation for more information.
  response_data = json.loads(response.text)
  return (response_data["access_token"], response_data["refresh_token"])


""" This function constructs an HTTP request to call the getBoard
      REST API endpoint, including the access token, as described 
      in Step 4 of the authorization documentation.
"""
def make_api_call(access_token):
  api_call_url = miro_get_board_url + miro_board_id
  headers = {"Authorization": "Bearer " + access_token}
  api_call_response = requests.get(api_call_url, headers=headers)
  print(api_call_response.text)


""" This function constructs an HTTP request to get a new access token by exchanging
      the refresh token, as described in Step 5 of the Authorization documentation.
"""
def refresh_token_request(refresh_token):
  # Define the parameters of the body of the request
  data = {
      "grant_type" : "refresh_token",
      "client_id" : client_id,
      "client_secret" : client_secret,
      "refresh_token" : refresh_token
  }

  # Issue the request using the `requests` library
  refresh_response = requests.request("POST", miro_token_url, data=data)
  print("The API response for your refresh token exchange request: " + "\n" + refresh_response.text)

  # Parse the results using the `json` library, and return the tokens
  # NOTE: Your app will be responsible for securing and storing these values. See the
  #   Authorization documentation for more information.
  refresh_response_data = json.loads(refresh_response.text)
  return (refresh_response_data["access_token"], refresh_response_data["refresh_token"])


###
###
###

main()