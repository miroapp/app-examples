Boilerplate project already includes:

- TypeScript
- Webpack
- ReactJS

## How to use:

- Run `npm install` or `yarn` to install dependencies
- Run `npm start` or `yarn start` to start developing, you should have a URL that looks like this

- (Optional) change the `subdomain` inside [`webpack.config.js`](./webpack.config.js) (default is app name + your computer `username`)

<!-- prettier-ignore-start-->
```js
const pkg = require('./package.json')

const subdomain = `${require('os').userInfo().username}-${pkg.name}`.replace(/(\s|\.)+/g, '-').toLowerCase()
```
<!-- prettier-ignore-end-->

> First time you open the URL you will see a page from [localtunnel](https://loca.lt/) asking you to click continue.
> This check will happen every 7 days per domain. Feel free to remove localtunnel if you want. But you have to serve your app over https, that's a requirement.

```
https://<subdomain>.loca.lt
```

- Paste the URL in `web-plugin url` in your app settings
- open a board & you should see your app in the main toolbar when you click the
  three dots.

## How to build the app:

Run `npm run build` or `yarn run build`
