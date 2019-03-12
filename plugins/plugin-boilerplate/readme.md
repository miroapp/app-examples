Boilerplate project already includes:
- TypeScript
- Webpack 
- ReactJS
- LESS
- HelloWorld code

## How to use:

1. Copy `plugin-boilerplate` folder with new name
2. Add new folder name in `published-plugins.json`
3. Run in terminal `cd plugins/yours_plugin_folder`
4. Run `npm install` to install dependencies
5. Run `npm run build` or `npm run watch` to compile app
6. Now open plugin in app
    - In first terminal run _http-server_ in root rep folder: `http-server -p 8081`
    - In second terminal run _ngrok_ for https: `ngrok http 8081`
    - Get https-url from _ngrok_ and paste it in `iframe url` in your app settings.    
