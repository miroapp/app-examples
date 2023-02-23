## Webhooks manager

This is the source code of [Webhook manager app](https://miro.com/marketplace/webhook-manager/).
The app is deployed on [Vercel](https://webhooks-manager-sepia.vercel.app/).

The app allows creation of webhooks for boards using a simple UI. It removes the need to interact with our REST API to set up webhooks, simplifying the process for developers that want to create webhooks quickly.

### How to start locally

1. [Sign in](https://miro.com/login/) to Miro, and then create a
   [Developer team](https://developers.miro.com/docs/create-a-developer-team)
   under your user account.

2. [Create an app in Miro](https://developers.miro.com/docs/build-your-first-hello-world-app#step-1-bootstrap-the-hello-world-app).

- Click the **Create new app** button.
- On the **Create new app** modal, give your app a name, assign it to your
  Developer team, and then click **Create**.

3. Configure the app:

- In your account profile, go to **Your apps**, and then select the app you just created to access its settings page.
- On the app settings page:
  - Go to **App Credentials**, and copy the app **Client ID** and **Client secret** values: you'll need to enter these values
    in step 4 below.
  - Then, open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**.
- In the app manifest editor, configure the app as follows:
  - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property. \
    It defines the entry point of the app, and it corresponds to the URL of the server that the app runs on.
  - [`redirectUris`](https://developers.miro.com/docs/app-manifest#redirecturis): assign `http://localhost:3000/api/redirect/` as a value for this property. \
    It defines the redirect URL that starts the OAuth 2.0 code grant flow for the REST API.
  - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
    To enable the app to read from and write to the board, add the following permissions:
    - `boards:read`
    - `boards:write`

1. Open the [`.env`](.env) file, and enter the app client ID and client secret
   values that you saved at the beginning of step 3 above.

   ```
   MIRO_CLIENT_ID={YOUR_CLIENT_ID)
   MIRO_CLIENT_SECRET={YOUR_CLIENT_SECRET}
   MIRO_REDIRECT_URL=http://localhost:3000/api/redirect/
   ```

2. Run `npm start` to start the local web server.

When your server is up and running:

1. Go to [Miro.com](https://miro.com).
2. In your developer team, open a board.
3. To start the app, click the app icon in the app toolbar on the left.

### Usage

The application uses webhook APIs to create, list, and delete webhooks. \
Webhooks are associated with the board and with the user who has the app open and running on the board.

[`./pages/api/webhook.ts`](./pages/api/webhook.ts) contains the example code to handle webhooks challenges. The endpoint logs the content of the received webhook.
