# Create Miro App

## How to start:

- Run `yarn` or `npm install` to install dependencies
- Run `yarn start` or `npm start` to start developing, you should have a URL
  that looks like this

```
http://localhost:3000
```

- This application serves two different apps for Miro.
- There is a facilitor app which runs on `http://localhost:3000/facilitator`.
- There is a participant app which runs on `http://localhost:3000/participant`
- Create two apps in Miro for the facilitator and participant applications.
- Paste the facilitator URL in `App URL` in your facilitator app settings.
- Paste the participant URL in `App URL` in your participant app settings.
- open a board & you should see your apps in the main toolbar when you click the
  three dots.

## How to build the app:

Run `yarn run build` or `npm run build` and this will generate a static output
inside `dist/` which you can host on static hosting service.

### About the app

This app consists of two applications.

The facilitator app allows facilitators to control the participant app.

The facilitator can choose a youtube video and open it on participant boards.

The controls on the facilitator will also control the open app on the participant side.

[![IMAGE ALT TEXT](http://img.youtube.com/vi/_HTZFf8bkNI/0.jpg)](http://www.youtube.com/watch?v=_HTZFf8bkNI "How to use the youtube room app")
