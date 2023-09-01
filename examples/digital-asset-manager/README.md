# Miro Digital Asset Manager

This app shows how to implement a digital asset manager (DAM). Make the images, logos, and other assets you need available directly in a Miro board.

# 👨🏻‍💻 App Demo
https://github.com/miroapp/app-examples/assets/10800544/5eb60feb-1378-4691-a9dd-46a70003f81c







# 📒 Table of Contents
* [Included Features](#features)
* [Tools and Technologies](#tools)
* [Prerequisites](#prerequisites)
* [Associated Developer Tutorial](#tutorial)
* [Run the app locally](#run)
* [Folder Structure](#folder)
* [License](#license)

# ⚙️ Included Features <a name="features"></a>
* [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
    * [drop event](https://developers.miro.com/docs/ui_boardui#drop-event) 
    * [openPanel(options)](https://developers.miro.com/docs/ui_boardui#openpanel)
    * [draggable elements](https://developers.miro.com/docs/add-drag-and-drop-to-your-app#add-draggable-elements-to-the-app-panel)
    * [Search and filter](https://developers.miro.com/docs/adding-search-and-filter-to-an-sdk-app)
* [Mirotone.xyz](https://www.mirotone.xyz/)


  
# 🛠️ Tools and Technologies <a name="tools"></a>
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [React Router](https://reactrouter.com/en/main)
* [Bynder API](https://developer-docs.bynder.com/api)
* [Netlify](https://www.netlify.com/)
* [Netlify Functions](https://docs.netlify.com/functions/overview/)

# ✅ Prerequisites <a name="prerequisites"></a>
* You have a [Miro account](https://miro.com/signup/).
* You're [signed in to Miro](https://miro.com/login/).
* Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
* Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.
* You have a Digital Asset Manager (such as [Bynder](https://www.bynder.com/)) and a [Netlify](https://www.netlify.com/) account.
* All examples use `npm` as a package manager and `npx` as a package runner.

# 📖 Associated Developer Tutorials <a name="tutorial"></a>
> To view a more in depth developer tutorial
of this app (including code explanations) see the [digital asset manager tutorial](https://developers.miro.com/docs/integrate-a-digital-asset-manager-in-miro) and [search and filter tutorial](https://developers.miro.com/docs/adding-search-and-filter-to-an-sdk-app) on Miro's Developer documentation.

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

4. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below.

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/horeaporutiu/app-examples-template/assets/10428517/456108e8-7d9b-4067-94bb-e5511c736a23

5. Go to your developer team, and open your boards.
6. Click on the plus icon from the bottom section of your left sidebar. If you hover over it, it will say `More apps`.
7. Search for your app `Digital Asset Manager` or whatever you chose to name it. Click on your app to use it, as shown in the video below.

https://github.com/horeaporutiu/app-examples-template/assets/10428517/b23d9c4c-e785-43f9-a72e-fa5d82c7b019

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── netlify/functions <-- contains netlify functions
├── src 
│  └── assets
│  └── components
│  └── panel
│  └── utils
│  └── styles
├── netlify.toml
├── tscongif.json
├── viteconfig.json
└── index.html <-- The app entry point. This is the value you assign to 'sdkUri' in the app manifest file.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>
If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>
[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
