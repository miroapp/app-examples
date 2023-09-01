# Monetization with Stripe Miro App

This app shows how to implement monetization using a paywall with Stripe to ask users to pay for a feature. To enable the payed feature, users need to pay a one time payment using Stripe.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/dde1adbc-9b5c-477c-93cb-45a7d5d3696a

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Stripe Prerequisites](#stripeprerequisites)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [on(icon:click)](https://developers.miro.com/docs/ui_boardui#iconclick-event)
  - [openPanel(options)](https://developers.miro.com/docs/ui_boardui#openpanel)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- <b>You've installed the [Stripe CLI](https://stripe.com/docs/stripe-cli)</b>
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this app (including code explanations) see the [Monetization with Miro and Stripe tutorial](https://developers.miro.com/docs/monetization-with-miro-stripe) on Miro's Developer documentation.

# ✅ Stripe Prerequisites <a name="stripeprerequisites"></a>

1. [Create a account](https://dashboard.stripe.com/register) or [login](https://dashboard.stripe.com/login) on Stripe
2. Create a [payment link](https://dashboard.stripe.com/test/payment-links). From the `Payment links` page, click on `New`
   in the top right corner. Next, under `Product` click on the text input field add a test product, as shown in the screenshot below.

   ![add-new-product-stripe](https://github.com/miroapp/app-examples/assets/10428517/7603235c-c877-4d19-9f33-226c10ce0fb8)

Next, add in details such as the name of the product, a description, and the price of the product. When you are done, click on `Add Product` as shown in the screenshot below.

![add-product-details](https://github.com/miroapp/app-examples/assets/10428517/180fa093-31d8-48ba-836f-8b03c68cedec)

> <b>This is all test data, so you don't have to worry too much about the specifics.</b>

3. Once you click on `Add Product` it will take you back to the `Payment Links` page, and you should have a new `Link URL` as shown in the screenshot below.

Copy that new link and update it in the [Paywall Component file](https://github.com/miroapp/app-examples/blob/main/examples/monetization-with-stripe/components/PaywallNotice.tsx#L10).

4. For development, in your terminal run the following commands (you will need the [Stripe CLI installed](https://stripe.com/docs/stripe-cli)):
   1. `stripe login`
   2. `stripe listen --forward-to localhost:3000/api/payment-handler`
   3. Copy the webhook signing secret from console output. You will need this to update your `.env` file.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Rename the ['.env.example' file](.env.example) to `.env` and then add your [API keys](https://dashboard.stripe.com/apikeys). You will need to create a Miro app and then add in the client ID and client secret along with Stripe API keys.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:

   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property.
   - [`redirectUris`](https://developers.miro.com/docs/app-manifest?utm_source=app_manifest_editor#redirecturis): assign `http://localhost:3000/api/redirect/` as a value for this property.
     It defines the entry point of the app, and it corresponds to the URL of the server that the app runs on.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it.
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`

5. Go to **Redirect URI for OAuth2.0**, click **Options**. for the localhost path. \
   From the drop-down menu select **Use this URI for SDK authorization**.

6. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below.

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

7. Go to your developer team, and open your boards.
8. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
9. Search for your app `Monetization with Stripe` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
|  └── components
|     GenerallyAvailableFeature.tsx <-- React with features that you do not have to pay for.
|     PaidFeature.tsx <-- React file for the paid feature. It just places a sticky on the board.
|     PaywallNotice.tsx <-- React file for the frontend if the paywall. It has buttons to pay and bring you to Stripe.
│  └── pages
│      _app.tsx <-- Initializes React app.
│      _document.tsx <-- Initializes Next.js app.
│      index.tsx <-- Main logic for React app including authorization + app instructions.
│      └── api
│          └── payment-handler.ts <-- logic to store credentials of who has paid for a feature.
│          └── redirect.ts <-- logic to handle redirect URL + OAuth flow.
│  └── public
│      └── favicon.ico <-- Icon for the web app.
│  └── styles
│      └── globals.css <-- CSS styles for the app.
│  └── utils
│      └── storage.ts <-- Implementation of storage logic. Will create a file `store.json` with userID of who has paid.
└── initMiro.ts <-- This is where the Node Client is initialized.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
