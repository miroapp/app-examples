# Miro Breakout rooms

This example shows you how leverage collaborative and real-time features, including sessions and real-time events and storage.

# 👨🏻‍💻 App Demo


https://github.com/miroapp/app-examples/assets/7162412/e03987e3-f85b-48ab-86b8-f4314c3c5e76


# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
- [Collaborative sessions](https://developers.miro.com/docs/websdk-reference-session)
- [Attention Management](https://developers.miro.com/docs/websdk-reference-collaboration)
- [Real-time events](https://developers.miro.com/docs/websdk-reference-events)
- [Real-time storage](https://developers.miro.com/docs/websdk-reference-storage)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Miro Design System](https://www.npmjs.com/package/@mirohq/design-system)

**Note**: Miro Design System can be installed from [npmjs](https://www.npmjs.com/) but it is internally supported only, you can use this example as guidance, but the team is working on public documentation, but with no ETA. Feel free to use [Mirotone](https://www.mirotone.xyz/css) in the meanwhile.

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a more in depth developer tutorial
> of this app (including code explanations) see the [custom actions tutorial](https://developers.miro.com/docs/add-custom-actions-to-your-app) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Run `npm install` to install dependencies.
2. Run `npm start` to start developing. \
   Your URL should be similar to this example:
   ```
   http://localhost:3000
   ```
3. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows:

   - [`sdkUri`](https://developers.miro.com/docs/app-manifest#sdkuri): assign `http://localhost:3000` as a value for this property. \
     It defines the entry point of the app, and it corresponds to the URL of the server that the app runs on.
   - [`scopes`](https://developers.miro.com/docs/app-manifest#scopes): add the permission scopes that users need to grant the app when they install it. \
     To enable the app to read from and write to the board, add the following permissions:
     - `boards:read`
     - `boards:write`
     - `identity:read`

#### Example of app yaml

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Breakout rooms
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
  - identity:read
```

4. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

5. Go to your developer team, and open your boards.
6. Click on the app icon on the left sidebar.

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── components
│   ├── Avatar
│   │   ├── Avatar.css
│   │   ├── Avatar.tsx
│   │   └── index.tsx
│   ├── BreakoutManager <-- Main React component displayed in the panel to facilitators
│   ├── BreakoutStarter <-- Component displayed when no rooms were configured
│   ├── RoomConfig <-- Component displayed for each configured room
│   ├── Timer <-- Timer controller component
│   ├── WaitingList <-- Component with unassigned users in the sessiin.
│   ├── WaitingRoom <-- Page displayed to participants while facilitator prepares the session.
│   ├── app.tsx <-- The app typescript entrypoint used in the panel.
│   ├── hooks.tsx <-- React hooks used in the app, including useCurrentUser, useBreakout, useTimer and some others.
│   ├── index.ts <-- The app main typescript entrypoint, rendered inside the headless iframe.
│   ├── types.ts <-- The app typescript types.
│   └── utils.ts <-- General code utilities, such as formatting and converting time in different units.
├── app.html  <-- The app content displayed in the content when user clicks on the app icon on Miro boards.
├── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.

```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
