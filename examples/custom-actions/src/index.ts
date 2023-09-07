import type { CustomAction, CustomEvent, Frame } from "@mirohq/websdk-types";

const actionHandler = (action: string) => async (props: CustomEvent) => {
  const content = props.items.map((w) => w.id).join(" - ");
  const message = `Clicked on ${action} => ${content}`;
  await miro.board.notifications.showInfo(message);
};

export async function init() {
  await miro.board.ui.on(
    "custom:translate-content",
    actionHandler("translate-content"),
  );
  await miro.board.ui.on(
    "custom:align-to-grid",
    actionHandler("align-to-grid"),
  );

  const translateAction: CustomAction = {
    event: "translate-content",
    ui: {
      label: {
        en: "Translate content",
        de: "Traduzir conteúdo",
        es: "Traducir contenido",
      },
      icon: "chat-two",
      description: {
        en: "Translate the content of your element",
        de: "Übersetzen Sie den Inhalt Ihres Elements",
        es: "Traduce el contenido de tu elemento",
      },
      position: 1,
    },
    predicate: {
      $or: [
        // Matching multiple types
        {
          type: "preview",
        },
        {
          type: "frame",
        },
        {
          type: "text",
        },
        {
          type: "card",
        },
        {
          type: "sticky_note",
        },
        // Matching nested properties with dot notation
        {
          type: "shape",
          shape: "circle",
          "style.color": "#1a1a1a",
        },
        // Images that have landscape aspect ratio
        {
          type: "image",
          $where: "this.width > this.height",
        },
        // Embed widget with a given URL matching the Regex
        { type: "embed", url: { $regex: ".*vimeo.com.*" } },
        // App owned app_card
        { type: "app_card", owned: true },
        // Connectors with both start and end connected to them
        {
          type: "connector",
          start: {
            $exists: true,
          },
          end: {
            $exists: true,
          },
        },
      ],
    },
  };

  await miro.board.ui.on("custom:active-action", (props: CustomEvent) => {
    props.items.map((w) => w.setMetadata("status", "active"));
  });
  await miro.board.ui.on("custom:inactive-action", (props: CustomEvent) => {
    props.items.map((w) => w.setMetadata("status", "inactive"));
  });

  const activeAction: CustomAction = {
    event: "active-action",
    ui: {
      label: "Activate",
      icon: "chat-dashes-lines-two",
      description: "Set card to active",
      position: 1,
    },
    predicate: {
      type: "card",
      $or: [
        {
          "metadata.status": {
            $exists: false,
          },
        },
        {
          "metadata.status": "inactive",
        },
      ],
    },
  };

  const inactiveAction: CustomAction = {
    event: "inactive-action",
    ui: {
      label: "Inactivate",
      icon: "chat-lines-cross",
      description: "Set card to inactive",
      position: 1,
    },
    predicate: {
      type: "card",
      "metadata.status": "active",
    },
  };

  const votingHandler = async (props: CustomEvent) => {
    const voting = await miro.board.experimental.getVotingResults();
    const boardInfo = await miro.board.getInfo();

    if (!voting.length) {
      await miro.board.notifications.showInfo("No voting results available");
    }

    const votingWithResults = voting.filter((v) => v.results.length > 0);
    const [parent] = props.items as Frame[];

    votingWithResults.map(async (voting) => {
      const title = await miro.board.createText({
        x: parent.x,
        y: parent.y,
        width: 500,
        content: voting.title,
        style: {
          fontSize: 80,
        },
      });

      await parent.add(title);
      title.x = 400;
      title.y = 200;

      await title.sync();

      const itemsResult = voting.results.map(async (item, i) => {
        try {
          const boardItem = await miro.board.createStickyNote({
            x: parent.x,
            y: parent.y,
            content: `Item: ${item.itemId} => Votes: ${item.count}`,
            linkedTo: `/app/board/${boardInfo.id}/?moveToWidget=${item.itemId}`,
          });

          await parent.add(boardItem);
          boardItem.x = 200 * (i + 1);
          boardItem.y = 400;
          await boardItem.sync();
        } catch (error) {
          console.error(error);
        }
      });

      await Promise.allSettled(itemsResult);

      await miro.board.viewport.zoomTo([parent]);
    });
  };

  await miro.board.ui.on("custom:get-voting-results", votingHandler);

  const votingResults = {
    event: "get-voting-results",
    ui: {
      label: "Get voting results",
      icon: "trophy",
      description: "Create sticky notes with voting results",
    },
    predicate: {
      type: "frame",
    },
  };

  await miro.board.experimental.action.register(activeAction);
  await miro.board.experimental.action.register(inactiveAction);
  await miro.board.experimental.action.register(translateAction);
  await miro.board.experimental.action.register(votingResults);
}

init();
