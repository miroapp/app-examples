import initMiro from "../../initMiro";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (typeof req.body.url !== "string") {
    res.status(400);
    res.send("Missing webhook 'url' in the body");
    return;
  }

  const { miro } = initMiro(req, res);

  if (req.method === "DELETE") {
    try {
      const miroRes = await miro
        .as("")
        ._api.call(
          "DELETE",
          `/v2-experimental/webhooks/subscriptions/${req.body.url}`,
        );
      res.send(miroRes.body);
    } catch (err) {
      res.status(500).send({
        error: "Failed to delete the webhook",
      });
    }
    return;
  }

  if (typeof req.body.boardId !== "string") {
    res.status(400);
    res.send("Missing 'boardId' in the body");
    return;
  }

  const params = {
    boardId: req.body.boardId,
    callbackUrl: req.body.url,
    status: "enabled",
  };
  try {
    const miroRes = await miro
      .as("")
      ._api.call(
        "POST",
        "/v2-experimental/webhooks/board_subscriptions",
        JSON.stringify(params),
      );
    res.send(miroRes.body);
  } catch (err) {
    res.status(400).send({
      error:
        "Failed to add subscription. Make sure that the URL is valid and the challenge is handled correctly (see instructions below).",
    });
  }
}
