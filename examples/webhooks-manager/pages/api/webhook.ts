import initMiro from "../../initMiro";
import { NextApiRequest, NextApiResponse } from "next";

// handle webhook (used for testing)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  if (req.body.challenge) {
    res.send(req.body);
    return;
  }
  res.send("OK");
}
