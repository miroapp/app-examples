import express from "express";
import session from "express-session";
import passport from "passport";
import fetch from "node-fetch";
import OAuth2Strategy from "passport-oauth2";

const app = express();
const port = process.env.PORT || 4000;

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: false }),
);
app.use(passport.initialize());
app.use(passport.session());

// passport configuration

const users = {};

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, users[id]);
});

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: "https://miro.com/oauth/authorize",
      tokenURL: "https://api.miro.com/v1/oauth/token",
      clientID: "",
      clientSecret: "",
      callbackURL: `http://localhost:${port}/auth/miro/callback`,
    },
    async function (accessToken, refreshToken, params, _, cb) {
      console.log({ accessToken, refreshToken, params });

      // store the access and refresh tokens in a database for later use
      const user = { id: params.user_id, accessToken: accessToken };
      users[user.id] = user;

      cb(null, user);
    },
  ),
);

// configure passport authorentication route (this should match the return URL in App settings)

app.get(
  "/auth/miro/callback",
  passport.authenticate("oauth2", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  },
);

app.get("/", async function (req, res) {
  if (!req.user) {
    res.json({
      goto: "/auth/miro/callback",
    });
    return;
  }

  // use user's miro access token to call the API
  const boardsResponse = await fetch(`https://api.miro.com/v2/boards/`, {
    headers: { Authorization: `Bearer ${req.user.accessToken}` },
  });

  const boards = await boardsResponse.json();

  res.json(boards);
});

app.listen(port, "localhost");
