# How to start!

You can use _plugin-boilerplate_ project which already includes:
- TypeScript
- Webpack 
- ReactJS
- LESS
- HelloWorld code

Of course, you can use only pure js, then start from 6 point:

1. Copy `plugin-boilerplate` folder with new name
2. Add new folder name in `published-plugins.json`
3. Run in terminal `cd plugins/yours_plugin_folder`
4. Run `npm install` to install dependencies
5. Run `npm run build` or `npm run watch` to compile app
6. Now open plugin in app
    - In first terminal run _http-server_ in root rep folder: `http-server -p 8081 --cors`
    - In second terminal run _ngrok_ for https: `ngrok http 8081`
    - Get https-url from _ngrok_ and paste it in cookie _basePluginsURL_
    - Enable feature flag "AWESOME_PLUGINS": `https://realtimeboard.com/app/dashboard/?featuresOn=AWESOME_PLUGINS`
    - Enable your plugin in board -> settings -> awesome-plugin sidebar
    - Good luck! 🏊
    
