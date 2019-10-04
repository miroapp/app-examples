# Prototyping plugin 
With this plugin users can build interactive prototypes like in InVision or Overflow.
Very comprehensive example for a lot of SDK capabilities, including experimental features.

# How feature works

<img src="proto.gif" />

# How to build
- Run `npm install`
- Run `npm run build` or `npm run watch` to compile app
- Run _http-server_ in `dist` folder: `http-server -p 8081`
- Run _ngrok_ for https: `ngrok http 8081`
- Replace APP_ID in config file to your _App ID_. You can get _App Id_ in app settings.
- Get https url from _ngrok_ and paste it in `iframe url` in your app settings.    
