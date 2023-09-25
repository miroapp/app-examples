import type { CustomAction, CustomEvent } from "@mirohq/websdk-types";

const registerAction = async () => {
  await miro.board.ui.on("custom:add-selfie", async (props: CustomEvent) => {
    const image = props.items.pop()!;
    await miro.board.ui.openModal({
      url: "capture.html?reference=" + image.id,
    });
  });

  await miro.board.ui.on("custom:update-selfie", async (props: CustomEvent) => {
    const [image] = props.items;
    await miro.board.ui.openModal({ url: "capture.html?image=" + image.id });
  });

  const addSelfieAction: CustomAction = {
    event: "add-selfie",
    ui: {
      label: "Take selfie",
      icon: "camera",
      position: 1,
    },
    predicate: {
      type: "image",
    },
  };

  const updateSelfieAction: CustomAction = {
    event: "update-selfie",
    ui: {
      label: "Update selfie",
      icon: "clock-counter-clockwise",
      position: 2,
    },
    predicate: {
      type: "image",
      "metadata.source": "selfie",
    },
  };

  await miro.board.experimental.action.register(addSelfieAction);
  await miro.board.experimental.action.register(updateSelfieAction);
};

export async function init() {
  miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openModal({ url: "capture.html" });
  });
  registerAction();
}

init();
