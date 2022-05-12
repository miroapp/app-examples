# Miro App Examples

[![Discord](https://discordapp.com/api/guilds/933103778855534614/widget.png?style=shield)](https://discord.gg/bh64hJVmS5)

<img alt="Miro" src="https://github.com/miroapp/app-examples/raw/main/assets/Banner.png" />

Welcome to Miro App Examples! In this repository you can find examples of apps built on top of Miro's Developer Platform 2.0.<br />
Make sure you visit our [developer documentation](https://beta.developers.miro.com) or read our [official blog post](https://miro.com/blog/developer-platform-beta) to learn more.

## Web SDK

The fastest way to bootstrap a new app is by using [`create-miro-app`](https://www.npmjs.com/package/create-miro-app).<br />
To get started, run the following command:

```shell
npx create-miro-app

// or

yarn create miro-app
```

|                                                         | Description                                                                                                                                        |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [drag-and-drop](examples/drag-and-drop)                 | This example show you how to drag and drop images from your app onto the board.                                                                    |
| [stickynotes-to-shapes](examples/stickynotes-to-shapes) | This example allows you to select several stickies, click the plugin button in the bottom bar, and replace any selected stickies with shapes.      |
| [template-builder](examples/template-builder)           | This example shows how to create and position on the board multiple widgets of different types and render create custom interfaces in the library. |
| [calendar](examples/calendar)                           | This example shows you how to add a calendar made with shapes and text for a given month and year.                                                 |
| [wordle](examples/wordle)                               | This example shows you how to create a wordle-like game using Miro's Web SDK.                                                                      |
| [blob-maker](examples/blob-maker)                       | This example shows you how to create a drag and drop blobmaker using Miro's Web SDK.                                                               |
| [youtube-room](examples/youtube-room)                   | This example shows you how to sync a Youtube player across multiple users through Socket.IO.                                                       |

<p>&nbsp;</p>

## REST API

|                                       | Description                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [python_oauth](examples/oauth/python) | This python sample demonstrates how to implement the Oauth 2.0 authorization code flow in Miro.                                            |
| [node_oauth](examples/oauth/node)     | This NodeJS sample demonstrates how to implement the Oauth 2.0 authorization code flow in Miro and make an API request to a Miro endpoint. |

<p>&nbsp;</p>

If you'd like to contribute your own app or idea, visit our [contributing guide](CONTRIBUTING.md) to get started.

_Interested in learning more? Feel free to join our [Developer Community](https://bit.ly/miro-developers) to chat with other Miro Developers!_
