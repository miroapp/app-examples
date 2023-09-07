import initMiro from "../../initMiro";

// handle redirect with code and exchange it for the access token
export default async function handler(req, res) {
  const { miro, userId } = initMiro(req, res);

  // Make sure the code is in query parameters
  if (!req.query.code) {
    res.code(400);
    res.send("Missing code in the query");
    return;
  }

  await miro.exchangeCodeForAccessToken(userId, req.query.code);

  const boardId = req.query.state ?? "";
  res.redirect(`/panel?boardId=${boardId}`);
}
