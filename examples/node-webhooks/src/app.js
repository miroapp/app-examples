import { config } from "dotenv";

import express from "express";
import cookieParser from "cookie-parser";

import miroMiddleware from "./miroMiddleware";

config();

const app = express();

app.use(cookieParser("<RANDOMLY-GENERATED-SECRET-STRING>"));
app.use(miroMiddleware);
app.use(express.json());

app.get("/auth/miro/callback", async (req, res) => {
  if (typeof req.query.code !== "string") {
    res.status(400);
    res.send("Missing code query parameter!");
    return;
  }
  await req.miro.exchangeCodeForAccessToken(req.cookies.id, req.query.code);
  res.redirect("/");
});

app.get("/", async (req, res) => {
  if (!(await req.miro.isAuthorized(req.cookies.id))) {
    res.redirect(req.miro.getAuthUrl());
    return;
  }

  const api = req.miro.as(req.cookies.id);

  res.header("content-type", "text/html");
  res.write("These are the boards that you have access to: <br/>");

  const allBoards = api.getAllBoards();
  for await (const board of allBoards) {
    res.write(`<a href="${board.viewLink}">${board.name}</a><br/>`);
  }
  res.send();
});

app.post("/", async (req, res) => {
  if (req.body.event) {
    console.log("Webhook event:");
    console.log(req.body.event);
  }

  if (req.body.challenge) {
    console.log("Challenge:", req.body.challenge);
    res.send(req.body);
    return;
  }
  res.send("OK");
});

if (import.meta.env.PROD) {
  app.listen(3000, () =>
    console.log("Started server on http://127.0.0.1:3000"),
  );
}

export const viteNodeApp = app;
