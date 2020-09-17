require('dotenv-safe').config()

const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const app = express()

app.use(bodyParser.json())

const port = 8000
const slackToken = process.env.SLACK_TOKEN
const miroToken = process.env.MIRO_TOKEN

app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})

app.post('/', (req, response) => {
  // https://api.slack.com/events/url_verification
  const payload = req.body
  if (payload.type === 'url_verification') {
    response.send(payload.challenge)
  } else {
    response.send()
    handleEvent(payload.event)
  }
})

async function handleEvent(event) {
  if (event.type === 'member_joined_channel') {
    const email = await getSlackUserEmail(event.user)
    const account = await getMiroAccount()
    const inviteResponse = await inviteUser(email, account)
    inviteResponse.forEach((resp) => console.log(`${resp.user.name} has been added to ${resp.account.name}`))
  }

  if (event.type === 'member_left_channel') {
    const email = await getSlackUserEmail(event.user)
    const account = await getMiroAccount()
    const connection = await findConnectionByEmail(email, account)
    const deleted = await deleteUserConnection(connection)
    if (deleted) {
      console.log(`${connection.user.name} has been deleted from ${account.name}`)
    }
  }
}

function getSlackUserEmail(userId) {
  const options = {
    headers: {Authorization: `Bearer ${slackToken}`},
  }
  return fetch(`https://slack.com/api/users.info?user=${userId}`, options)
    .then((res) => res.json())
    .then((json) => json.user.profile.email)
}

function getMiroAccount() {
  const options = {
    headers: {Authorization: `Bearer ${miroToken}`},
  }
  return fetch('https://api.miro.com/v1/oauth-token', options)
    .then((res) => res.json())
    .then((json) => json.account)
}

function inviteUser(email, account) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${miroToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({emails: [email]}),
  }
  return fetch(`https://api.miro.com/v1/accounts/${account.id}/invite`, options).then((res) => res.json())
}

function findConnectionByEmail(email, account) {
  const options = {
    headers: {Authorization: `Bearer ${miroToken}`},
  }
  return fetch(
    `https://api.miro.com/v1/accounts/${account.id}/user-connections?fields=user{name,email}&limit=100`,
    options,
  )
    .then((res) => res.json())
    .then((json) => json.data.find((el) => el.user.email === email))
}

function deleteUserConnection(connection) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${miroToken}`,
    },
  }
  return fetch(`https://api.miro.com/v1/account-user-connections/${connection.id}`, options).then((res) => res.ok)
}
