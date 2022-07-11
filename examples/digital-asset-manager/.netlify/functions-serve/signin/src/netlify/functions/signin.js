// netlify/functions/signin.js
exports.handler = async (event, context, callback) => {
  const authorizationURL = `${process.env.BASE_URL}/v6/authentication/oauth2/auth?client_id=${process.env.CLIENT_ID}&scope=offline%20asset%3Aread&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&state=state`;
  const response = {
    statusCode: 302,
    headers: {
      Location: authorizationURL,
      "Cache-Control": "no-cache",
    },
    body: "",
  };
  return callback(null, response);
};
//# sourceMappingURL=signin.js.map
