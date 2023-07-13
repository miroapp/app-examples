# Setup

This app has a paywall for a payed feature. To enable the payed feature, users need to pay a one time payment using Stripe.

## On Miro

1. [Sign in](https://miro.com/login/) to Miro, and then create a [Developer team](https://developers.miro.com/docs/create-a-developer-team) under your user account, if you haven't yet.
1. [Click here to create your app in Miro](https://miro.com/app/settings/user-profile/apps/?appTemplate=%7B%22appName%22%3A%22App+With+Payments%22%2C%22sdkUri%22%3A%22http%3A%2F%2Flocalhost%3A3000%22%2C%22redirectUris%22%3A%5B%22http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fredirect%2F%22%5D%2C%22scopes%22%3A%5B%22boards%3Aread%22%2C%22boards%3Awrite%22%5D%7D).
1. Configure the app:

   - Go to **Redirect URI for OAuth2.0**, click **Options**. for the localhost path. \
     From the drop-down menu select **Use this URI for SDK authorization**.

1. Rename the ['.env.example' file](.env.example) to `.env`
1. Open the [.env file](.env), and enter the app client ID and client secret that you can find on top of the app settings page

## On Stripe

1. [Create a account](https://dashboard.stripe.com/register) or [login](https://dashboard.stripe.com/login) on Stripe
2. Create a [payment link](https://dashboard.stripe.com/test/payment-links)
3. Update the link in the [PaywallNotice component](./components/PaywallNotice.tsx)
4. Add your [API keys](https://dashboard.stripe.com/apikeys) to the [.env file](.env)

Run `npm start` to start developing.

When your server is up and running:

- Go to [the dashboard on Miro.com](https://miro.com/app/dashboard).
- In the left-hand team selector, select your developer team and open any board, or create a new one.
- To start your app, click the app icon in the app toolbar on the left.

### Stripe test card

**CC**: `4242 4242 4242 4242`\
**Date**: Any valid date\
**CVC**: Any 3 digits\
More details on [the stripe docs](https://stripe.com/docs/testing).
