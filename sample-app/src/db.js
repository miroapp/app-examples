require('dotenv-safe').config()

const fs = require('fs')

let dbInstance = []

function initDB() {
  fs.readFile(process.env.DB_FILE_NAME, function (err, buf) {
    try {
      dbInstance = JSON.parse(buf.toString())
      console.log(`DB has ${dbInstance.length} authorizations`)
    } catch (e) {
      console.error(e)
      saveDBToFile()
    }
  })
}

function saveDBToFile() {
  fs.writeFile(process.env.DB_FILE_NAME, JSON.stringify(dbInstance, null, '\t'), function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Data saved')
    }
  })
}

module.exports = {
  init: initDB,
  addAuthorization: function (auth) {
    dbInstance = dbInstance.filter((dbAuth) => dbAuth.account_id !== auth.account_id && dbAuth.user_id !== auth.user_id)
    dbInstance.push(auth)
    saveDBToFile()
  },
  getAuthorizations() {
    return dbInstance
  },
}
