# Prototyping plugin

With this plugin users can build interactive prototypes like in InVision or Overflow. Very comprehensive example for a
lot of SDK capabilities, including experimental features.

Install and play Prototyping plugin for your user by this link:

https://miro.com/oauth/authorize/?response_type=token&client_id=3074457346759443169&redirect_uri=/

_This plugin was created for demo purpose, it does not ready for production usage._

# How feature works

<img src="proto.gif" />

# How to build

- Run `npm install`
- Run `npm run build` or `npm run watch` to compile app
- Run serve the app `npx serve -p 8081`
- Run `ngrok` using `npx ngrok http 8081`
- Replace APP*ID in config file to your \_App ID*. You can get _App Id_ in app settings.
- Get https url from _ngrok_ and paste it in `iframe url` in your app settings.
