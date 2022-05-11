# Miro App Examples

[![Discord](https://discordapp.com/api/guilds/933103778855534614/widget.png?style=shield)](https://discord.gg/bh64hJVmS5)

<img alt="Miro Developer Platform" src="https://github.com/miroapp/app-examples/raw/main/assets/Banner.png" />

Welcome to Miro App Examples! In this repository you can find examples of apps built on top of the Miro Developer Platform 2.0.<br />
Make sure you visit our [developer documentation](https://beta.developers.miro.com) to learn more.

## Miro Web SDK

The fastest way to bootstrap a new app is by using [`create-miro-app`](https://www.npmjs.com/package/create-miro-app).<br />
To get started, run the following command:

```shell
npx create-miro-app

// or

yarn create miro-app
```

|                                                         | Description                                                                                                                                        |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [drag-and-drop](examples/drag-and-drop)                 | This app example allows dragging and dropping images from your app onto the board.                                                                    |
| [stickynotes-to-shapes](examples/stickynotes-to-shapes) | This app example allows selecting several sticky notes on the board, clicking the app button in the app toolbar, and replacing the selected sticky notes with shapes.      |
| [template-builder](examples/template-builder)           | This app example creates and positions on the board multiple items of different types and it helps create and render custom interfaces in the library. |
| [calendar](examples/calendar)                           | This app example adds a calendar made with shapes and text for a given month and year.                                                 |
| [wordle](examples/wordle)                               | This app example creates a Wordle-like game using the Miro Web SDK.                                                                      |
| [blob-maker](examples/blob-maker)                       | This app example creates a drag-and-drop blobmaker using the Miro Web SDK.                                                               |
| [youtube-room](examples/youtube-room)                   | This app example syncs a YouTube player across multiple users through Socket.IO.                                                       |

<p>&nbsp;</p>

## Miro REST API

|                                       | Description                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [python_oauth](examples/oauth/python) | This Python app example implements the OAuth 2.0 authorization code flow in Miro.                                            |
| [node_oauth](examples/oauth/node)     | This Node.js app example implements the OAuth 2.0 authorization code flow in Miro, and it makes an API request to a Miro endpoint. |

<p>&nbsp;</p>

If you'd like to contribute your own app or idea, visit our [contributing guide](CONTRIBUTING.md) to get started.

_Interested in learning more? Feel free to join our [Developer Community](https://bit.ly/miro-developers) to chat with other Miro Developers!_
