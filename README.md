## Miro App Examples

[![Discord](https://discordapp.com/api/guilds/933103778855534614/widget.png?style=shield)](https://discord.gg/bh64hJVmS5)

<img alt="Miro Developer Platform" src="https://github.com/miroapp/app-examples/raw/main/assets/Banner.png" />

Welcome to Miro App Examples! In this repository you can find examples of apps built on top of the Miro Developer Platform 2.0.<br />
Make sure you visit our [developer documentation](https://developers.miro.com) to learn more.

**&nbsp;ℹ&nbsp;Note**:

- We recommend a Chromium-based web browser for local development with HTTP. \
  Safari enforces HTTPS; therefore, it doesn't allow localhost through HTTP.
- All examples use `npm` as a package manager and `npx` as a package runner. \
  If you prefer, you can install and use equivalent alternatives, such as `yarn` or `pnpm`.
- For more information, visit our [developer documentation](https://developers.miro.com).

### Miro Web SDK

The fastest way to bootstrap a new app is by using [`create-miro-app`](https://www.npmjs.com/package/create-miro-app).<br />
To get started, run the following command:

```shell
npx create-miro-app@latest
```

|                                                         | Description                                                                                                                                        |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
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

<p>&nbsp;</p>

### REST APIs

|                                                            | Description                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [python_oauth](examples/oauth/python)                      | This Python sample demonstrates how to implement the Oauth 2.0 authorization code flow in Miro.                                                                                                                                                                                                                 |
| [node_oauth](examples/oauth/node)                          | This Node.js sample demonstrates how to implement the Oauth 2.0 authorization code flow in Miro and make an API request to a Miro endpoint.                                                                                                                                                                     |
| [rest-stickies-csv](examples/rest-stickies-csv)            | This Node.js sample app uses server side rendering (Handlebars.js) to provide a lightweight, CRUD-oriented REST example in the browser for Miro's sticky notes and tags APIs.<br />It demonstrates a structured > unstructured use case via CSV import, creating Miro sticky notes with tags based on CSV data. |
| [python-flask-starter](examples/rest/python-flask-starter) | This Python/Flask boilerplate will allow to start using the Miro REST API in a few minutes.<br />This sample implements the full Miro authorization (OAuth 2.0 with refresh token) flow.                                                                                                                        |

<p>&nbsp;</p>

If you'd like to contribute your own app or idea, visit our [contributing guide](CONTRIBUTING.md) to get started.

_Interested in learning more? Feel free to join our [Developer Community](https://bit.ly/miro-developers) to chat with other Miro Developers!_
