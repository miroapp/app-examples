## GitHub issues importer app

This example shows how to import issues from GitHub to a board with custom fields using Miro API

<img src="images/run-app.gif" alt="run-app" />

## Common setup

Clone the repo and install the dependencies

```bash
git clone https://github.com/miroapp/app-examples.git
cd app-examples/github-issue-importer
```

```bash
npm install
```

## Configuration

```bash
cp .env.example .env
```

Add `GITHUB_TOKEN` & `MIRO_TOKEN` to `.env` file

- `github-token` - GitHub token with reading issues permissions, e.g. with `repo` scope.
- `miro-token` - miro token with `boards:write` scope.

All configuration properties are stored within `appConfig` object:

```javascript
const appConfig = {
  boardId: '',
  inboxFrameId: '',
}
```

Properties which should be configured:

- `board-id` - board id for which `miro-token` has access to.
- `frame-id` - frame id which will hold the created widgets.

> **How to get frame id?**
>
> Click on "Copy link" as shown in the screenshot below:
>
> <img src="images/tip-copy-link-to-widget.png" alt="copy-link-to-widget-screenshot" />
>
> The copied link would have frame id within `moveToWidget` query param, e.g.
> `https://miro.com/app/board/<board-id>/?moveToWidget=3074457346806294028`

## Run

To import data onto the board, run the following

```bash
npm start
```
