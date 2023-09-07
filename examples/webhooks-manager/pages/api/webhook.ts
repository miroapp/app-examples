import { NextApiRequest, NextApiResponse } from "next";

// Handle webhook (for testing purposes)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.body);

  if (req.body.challenge) {
    res.send(req.body);
    return;
  }
  res.send("OK");
}
