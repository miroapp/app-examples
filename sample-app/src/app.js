require('dotenv-safe').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mustacheExpress = require('mustache-express')

const api = require('./api')
const db = require('./db')

const app = express()
const port = 3000

app.engine('html', mustacheExpress())
app.use(cors())
app.use('/static', express.static('static'))
app.set('view engine', 'html')
app.set('views', __dirname + '/../views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index', {
    baseUrl: process.env.BASE_URL,
    oauthUrl: `https://miro.com/oauth/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.BASE_URL}/oauth`,
  })
})

app.get('/oauth', async (req, res) => {
  const response = await api.oauth.getToken(req.query.code, req.query.client_id)
  console.log('/oauth/ response = ', response)
  if (response) {
    db.addAuthorization(response)
  }
  res.send('App has been installed, open <br>response: ' + JSON.stringify(response))
})

app.get('/boards-list/', async (req, res) => {
  const auth = db.getAuthorizations()[0]
  if (auth) {
    api.boards
      .getAll(auth)
      .then((data) => {
        res.send(JSON.stringify(data))
      })
      .catch((error) => {
        res.send(error)
      })
  } else {
    res.send('You are not authorized yet')
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  db.init()
})
