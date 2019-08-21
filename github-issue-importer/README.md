> This example show how to import issues from GitHub to a board with custom fields through Miro API

## Common setup

Clone the repo and install the dependencies

```bash
git clone https://github.com/miroapp/app-examples.git
cd github-issues-importer
```

```bash
npm install
```

## Configuration

All configuration data is stored within `config.js`.

Properties which should be configured:
- `github-token` - github token with read issues permissions, e.g. with `repo` scope;
- `miro-token` - miro token with `boards:write` scope;
- `board-id` - board for which `miro-token` user has access to;
- `frame-id` - frame id which will held the created widgets;

```json
{
    github: {
        token: 'github-token',
    },
    miro: {
        token: 'miro-token',
        boardId: 'board-id',
        inboxFrameId: 'frame-id'
    }
}
```

> **Tip: how to get frame id?**
> 
> Click on "Copy link" as shown on the screenshot below:
>
> <img src="tip-copy-link-to-widget.png" alt="copy-link-to-widget-screenshot" />
>
> Copied link would have frame id within moveToWidget query parameter, 
> e.g. https://miro.com/app/board/<board-id>/?moveToWidget=**3074457346806294028**

## Run

To start importing data into the board, run the following

```bash
npm run start
```

<img src="run-app.gif" alt="run-app" />
