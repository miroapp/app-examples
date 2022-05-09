// This auth.js script is used to authorize the end user and pass their access_token to `./app.js`

// For the full guide on Miro's OAuth 2.0 flow, please see the documentation here:
// https://beta.developers.miro.com/docs/getting-started-with-oauth 


// Require sensitive environment variables (Client ID, Client Secret, Miro Board ID)
require('dotenv/config');

// Require Axios for handling HTTP requests to Miro /oauth and Miro API endpoints
const axios = require('axios');

// Require ExpressJS for local server
const express = require('express');
const app = express();

// Call Express server
app.get('/', (req, res) => {

    // ---> #1: 
    // ---> If an authorization `code` has not already been retrieved from the redirect URL after Miro authorization screen, proceed to #2 (Redirect to Miro authorization URL). Else, proceed to #3 (Requesting access_token/refresh_token pair, using `code`).

    let access_token;
    let refresh_token;

    if (req.query.code) {

        // #3: 
        // ---> Request `access_token` and `refresh_token` pair by making a request to Miro /oauth endpoint. 
        // ---> Required parameters include `grant_type`, `client_id`, `client_secret`, `code`, and `redirect_uri`.
        // ---> See full details in Miro documentation here: https://beta.developers.miro.com/docs/getting-started-with-oauth#step-3

        let url = `https://api.miro.com/v1/oauth/token?grant_type=authorization_code&client_id=${process.env.clientID}&client_secret=${process.env.clientSecret}&code=${req.query.code}&redirect_uri=${process.env.redirectURL}`

        async function grabToken() {
            try {
                let oauthResponse = await axios.post(url);
                
                // Console log accesss_token and reference_token:
                console.log(`access_token: ${oauthResponse.data.access_token}`)
                console.log(`refresh_token: ${oauthResponse.data.refresh_token}`)

                // Set global variable for access_token and refresh_token values
                access_token = oauthResponse.data.access_token;
                refresh_token = oauthResponse.data.refresh_token;
                
                // Specify Miro API request URL
                let requestUrl = `https://api.miro.com/v2/boards/${process.env.boardId}`
                
                
                // #4:
                // ---> If `access_token` was successfully retrieved, send an API request to any Miro endpoint that contains the same permissions as your OAuth 2.0 app, with `access_token` as value for Bearer Token. 
                // ---> (See permissions under user profile > apps: https://miro.com/app/settings/user-profile/apps)
                if (access_token) {
                    // API request options
                    let config = {
                        method: 'get',
                        url: requestUrl,
                        headers: { 
                        'Authorization': `Bearer ${access_token}`
                        }
                    }
                    async function callMiro(){
                        try {
                            let response = await axios(config);
                            console.log(JSON.stringify(response.data));
                                res.redirect(`http://localhost:8000/authorized?${access_token}`)
                        } catch (err) {console.log(`ERROR: ${err}`)}
                    }
                    callMiro();
                    }  
            } catch (err) {console.log(`ERROR: ${err}`)}
        }        
        return grabToken();
    }
    // ---> #2: 
    // ---> If no authorization code is present, redirect to Miro OAuth to authorize retrieve new `code`.
    res.redirect('https://miro.com/oauth/authorize?response_type=code&client_id=' + process.env.clientID + '&redirect_uri=' + process.env.redirectURL)

})
// Run express server on Localhost 3000
app.listen(3000, () => console.log(`Listening on Localhost 3000`))