import axios from "axios";
import { serialize } from "cookie";

export default function handler(req, res) {
  let access_token = req.cookies.miro_access_token;
  let refresh_token = req.cookies.miro_refresh_token;

  // User is signed in
  if (access_token && refresh_token) {
    return res.json({ authenticated: true });
  }

  // User is not signed in
  if (access_token === undefined && refresh_token === undefined) {
    return res.json({ authenticated: false });
  }

  // User signed in before, but access token expired
  if (access_token === undefined) {
    let url = `https://api.miro.com/v1/oauth/token?grant_type=refresh_token&client_id=${process.env.clientID}&client_secret=${process.env.clientSecret}&refresh_token=${refresh_token}`;

    async function refreshToken() {
      try {
        let oauthResponse = await axios.post(url);

        access_token = oauthResponse.data.access_token;
        refresh_token = oauthResponse.data.refresh_token;

        if (access_token) {
          res.setHeader("Set-Cookie", [
            serialize("miro_access_token", access_token, {
              httpOnly: true,
              sameSite: "None",
              secure: true,
              maxAge: 3600,
            }),
            serialize("miro_refresh_token", refresh_token, {
              httpOnly: true,
              sameSite: "None",
              secure: true,
            }),
          ]);
        }
        res.json({ authenticated: true });
      } catch (err) {
        console.log(`ERROR: ${err}`);
      }
    }

    return refreshToken();
  }

  res.json({ authenticated: false });
}
