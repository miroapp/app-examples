import initMiro from "../../initMiro";
import { NextApiRequest, NextApiResponse } from "next";

// Handle the redirect with code, and exchange it for the access token
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { miro } = initMiro(req, res);

  // Make sure the code is in query parameters
  if (typeof req.query.code !== "string") {
    res.status(400);
    res.send("Missing code in the query");
    return;
  }

  await miro.exchangeCodeForAccessToken("", req.query.code);
  res.redirect("/");
}
