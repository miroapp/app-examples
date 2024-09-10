## Miro App Examples

[![Discord](https://discordapp.com/api/guilds/933103778855534614/widget.png?style=shield)](https://discord.gg/bh64hJVmS5)

<img alt="Miro Developer Platform" src="https://github.com/miroapp/app-examples/raw/main/assets/Banner.png" />

Welcome to Miro App Examples! In this repository you can find examples of apps built on top of the Miro Developer Platform 2.0. \
Make sure you visit our [developer documentation](https://developers.miro.com) to learn more.

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information, visit our [developer documentation](https://developers.miro.com).

### App configuration

All examples include an [`app-manifest.yaml` file](https://developers.miro.com/docs/app-manifest) to quickly configure the example app.

- Go to [App settings](https://miro.com/app/settings/user-profile/apps).
- Click **Edit in manifest**.
- Paste the YAML configuration, and click **Save**.

### Get started

The fastest way to bootstrap a new app is by using [`create-miro-app`](https://www.npmjs.com/package/create-miro-app). \
To get started, run the following command:

```shell
npx create-miro-app@latest
```

### Miro Web SDK

|                                                         | Description                                                                                                                                        |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [csv-to-mindmap](examples/csv-to-mindmap)               | Import data from CSV and create mind map on a Miro board                                                                                           |
| [drag-and-drop](examples/drag-and-drop)                 | This example shows you how to drag and drop images from your app onto the board.                                                                   |
| [asset-search](examples/asset-search)                   | This example shows you how to filter and search through assets by name and/or multiple tags.                                                       |
| [digital-asset-manager](examples/digital-asset-manager) | This example shows you how to build a digital asset manager using Bynder's API.                                                                    |
| [connect-firebase](examples/connect-firebase)           | This example shows you how to connect an SDK app to a Firebase backend.                                                                            |
| [stickynotes-to-shapes](examples/stickynotes-to-shapes) | This example allows you to select several stickies, click the plugin button in the bottom bar, and replace any selected stickies with shapes.      |
| [template-builder](examples/template-builder)           | This example shows how to create and position on the board multiple widgets of different types and render create custom interfaces in the library. |
| [calendar](examples/calendar)                           | This example shows you how to add a calendar made with shapes and text for a given month and year.                                                 |
| [wordle](examples/wordle)                               | This example shows you how to create a Wordle-like game using the Miro Web SDK.                                                                    |
| [blob-maker](examples/blob-maker)                       | This example shows you how to create a drag and drop blobmaker using Miro's Web SDK.                                                               |
| [youtube-room](examples/youtube-room)                   | This example shows you how to sync a YouTube player across multiple users through Socket.IO.                                                       |
| [custom-actions](examples/custom-actions)               | This example shows you how register [custom actions](https://developers.miro.com/docs/add-custom-actions-to-your-app) in the item context menu.    |
| [breakout-rooms](examples/breakout-rooms)               | This example shows you how use collaborative features (real-time storage, events, sessions, etc)                                                   |

<p>&nbsp;</p>

### REST APIs

|                                                                   | Description                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [node-oauth](examples/node-oauth)                                 | This Node.js sample demonstrates how to implement the Oauth 2.0 authorization code flow in Miro and make an API request to a Miro endpoint.                                                                                                                                                                     |
| [node-passport-oauth](examples/node-passport-oauth)               | This Node.js sample demonstrates how to implement the Oauth 2.0 authorization code flow in Miro and make an API request to a Miro endpoint using [Passport.js](https://www.passportjs.org/).                                                                                                                    |
| [nextjs-oauth](examples/nextjs-oauth)                             | This app demonstrates how to implement the Oauth 2.0 authorization code flow from Miro into a client side application built with Next.js.                                                                                                                                                                       |
| [node-stickies-csv](examples/node-stickies-csv)                   | This Node.js sample app uses server side rendering (Handlebars.js) to provide a lightweight, CRUD-oriented REST example in the browser for Miro's sticky notes and tags APIs.<br />It demonstrates a structured > unstructured use case via CSV import, creating Miro sticky notes with tags based on CSV data. |
| [python-flask-starter-with-oauth](examples/python-flask-starter-with-oauth)             | This Python/Flask boilerplate will allow to start using the Miro REST API in a few minutes.<br />This sample implements the full Miro authorization (OAuth 2.0 with refresh token) flow.                                                                                                                        |
| [enterprise-team-management](examples/enterprise-team-management) | This Node.js sample demonstrates how to manage teams and organizations within Miro using Miro's REST API.<br />ℹ️ _This example requires an Enterprise plan subscription and an [Enterprise Team account](https://miro.com/enterprise/)._                                                                       |

<p>&nbsp;</p>

### Full-stack apps

|                                                               | Description                                                                                                                               |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [monetization-with-stripe](examples/monetization-with-stripe) | This full-stack example shows how use Stripe to add a paywall for certain features in your app.                                           |
| [html-preview](examples/html-preview/)                        | Use the Miro API to generate HTML pages from Miro boards. Each frame on the board produces an HTML page.                                  |
| [github-appcards](examples/github-appcards)                   | This full-stack example shows how to build an integration with GitHub that syncs data between GitHub issues and Miro app cards.           |
| [plant-uml](https://github.com/miroapp/miro-plantuml)         | This full-stack example shows how to import [Plant UML](https://plantuml.com/) diagrams into Miro as editable board items.                |
| [nextjs](examples/nextjs-full-stack)                          | This full-stack example shows a Next.js application that uploads a camera image to the Miro board using Web SDK and REST API integration. |
| [webhooks-manager](examples/webhooks-manager/)                | This full-stack example demonstrates how to interact with the webhooks API, and how to handle the webhooks challenge.                     |

<p>&nbsp;</p>

If you'd like to contribute your own app or idea, visit our [contributing guide](CONTRIBUTING.md) to get started.

💡 _Interested in learning more? Feel free to join our [Developer Community](https://bit.ly/miro-developers) to chat with other Miro Developers!_
