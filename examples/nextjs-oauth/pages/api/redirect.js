import axios from "axios";
import { serialize } from "cookie";

export default function handler(req, res) {
  let access_token;
  let refresh_token;

  if (req.query.code) {
    let url = `https://api.miro.com/v1/oauth/token?grant_type=authorization_code&client_id=${process.env.clientID}&client_secret=${process.env.clientSecret}&code=${req.query.code}&redirect_uri=${process.env.redirectURL}`;

    async function grabToken() {
      try {
        let oauthResponse = await axios.post(url);

        access_token = oauthResponse.data.access_token;
        refresh_token = oauthResponse.data.refresh_token;

        if (access_token) {
          res
            .setHeader("Set-Cookie", [
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
            ])
            .redirect("/");
        }
      } catch (err) {
        console.log(`ERROR: ${err}`);
      }
    }
    return grabToken();
  }
}
