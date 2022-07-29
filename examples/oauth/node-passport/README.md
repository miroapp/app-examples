## Example of Miro OAuth2 flow with passport library

This sample app demonstrates the use of the Miro OAuth2 flow using the [passport](https://www.passportjs.org) library to authenticate users.

### Prerequisites:

1. Create an [app in Miro](https://miro.com/app/settings/user-profile/apps).
2. Add the following App Return URL: `http://localhost:4000/auth/miro/callback`.

### Setup

1. Clone or download the repo.
2. `cd` to this example folder.
3. `npm install` to install dependencies.
4. Add missing `clientID` and `clientSecret` variables in the OAuth2Strategy configuration.
5. `npm start` to start the example app.
