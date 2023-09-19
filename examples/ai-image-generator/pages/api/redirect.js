import initMiro from "../../initMiro";

// handle redirect with code and exchange it for the access token
export default async function handler(req, res) {
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
