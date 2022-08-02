export default function handler(req, res) {
  res.redirect(
    "https://miro.com/oauth/authorize?response_type=code&client_id=" +
      process.env.clientID +
      "&redirect_uri=" +
      process.env.redirectURL
  );
}
