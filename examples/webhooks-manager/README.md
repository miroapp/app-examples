# Miro Webhook Manager

This fullstack app allows you to create Miro webhook subscriptions for boards through a simple UI which can be launched directly from a Miro board.

ℹ️ Subscriptions are created per user, per board. For more details on webhook endpoint requirements, see our [Webhooks documentation](https://developers.miro.com/reference/webhooks-overview).

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10800544/eb993044-370d-49de-b9a8-0f23267c30f2

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
- [Miro Node.js API Client](https://developers.miro.com/docs/miro-nodejs-api-client)
- [Miro Webhooks](https://developers.miro.com/reference/webhooks-overview)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
- All examples use `npm` as a package manager and `npx` as a package runner.
- You have a valid https endpoint to use for creating webhook subscriptions in Miro

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

> To view a developer tutorial
> that covers how to leverage Miro Webhooks using a test endpoint _without a UI_, see the [set up a test endpoint](https://developers.miro.com/docs/add-custom-actions-to-your-app) tutorial on Miro's Developer documentation. **Note**: This is separate from this Webhook Manager app.

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

4. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/1e6862de-8617-46ef-b265-97ff1cbfe8bf

5. Go to your developer team, and open your boards.
6. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say More apps.
7. Search for your app `Webhook Manager` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── pages
│  └── api <-- Directory that contains files for auth and redirect, as well as webhook configuration
│  └── _app.tsx
│  └── _document.tsx
│  └── index.tsx <-- Main app file
├── styles
└── initMiro.ts <-- Sets up a Miro instance in the NodeJS Client
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
