## Render Miro board as HTML

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information, visit our [developer documentation](https://developers.miro.com).

### How to use the app

This app shows how to use the Miro API to generate HTML pages from Miro boards. This enables creating multi-page website mockups quickly.

The initial screen prompts you to connect your Miro account. After signing in, you can see the list of boards under your team.

On the board, each frame represents an HTML page. To view a specific frame, use its title in the URL. \
By default, either a frame named `index`, or the first created frame are used. \
In the app, URLs are in the following format: `/{boardId}/{frameTitle}`.

You can use [connectors](https://developers.miro.com/docs/connector_intro) to link items from one frame to items in a different frame. This generates HTML links to the page containing the target item.

### How to start locally

1. [Sign in](https://miro.com/login/) to Miro, and then create a
   [Developer team](https://developers.miro.com/docs/create-a-developer-team)
   under your user account.
2. [Create and configure an app in Miro](https://developers.miro.com/docs/manually-create-an-app).
3. Configure the app:
   - In your account profile, go to **Your apps**, and then select the app you just created to access its configuration page.
   - On the app configuration page, go to **App Credentials**, and copy the app **Client ID** and **Client secret** values: you'll need to enter these values in step 4 below.
   - Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
     In the app manifest editor, configure the app as follows:
     - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property. \
       It defines the entry point of the app, and it corresponds to the URL of the server that the app runs on.
     - [`redirectUris`](https://developers.miro.com/docs/app-manifest#redirecturis) and [`redirectUriForSdk`](https://developers.miro.com/docs/app-manifest#redirecturiforsdk): assign `http://localhost:3000/api/redirect/` as a value for these properties. \
       The [redirect URI](https://developers.miro.com/reference/ne-create-authorization-request-link) points to the page that you intend to load after a successful user authorization.
     - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
       To enable the app to read from and write to the board, add the following permissions:
       - `boards:read`
       - `boards:write`
4. Open the [`.env`](.env) file, and enter the app client ID and client secret
   values that you saved at the beginning of step 3 above.
5. Run `npm start` to start developing.

When your server is up and running:

- Go to [Miro.com](https://miro.com).
- In your developer team, open a board.
- To start your app, click the app icon in the app toolbar on the left.
