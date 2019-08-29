const rp = require('request-promise')
const config = require('./config')

const oAuth = {
	getToken(code, clientId) {
		const uri = `${config.API_BASE}/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${
			config.CLIENT_SECRET
		}&code=${code}&redirect_uri=${config.BASE_URL}/oauth`
		const options = {method: 'POST', uri: uri}
		return rp(options)
			.then(res => JSON.parse(res))
			.catch((error) => {
				logError(options)
				throw error
			})
	}
}

const boards = {
	getAll(auth) {
		const options = addAuth(auth, {method: 'GET', uri: `${config.API_BASE}/accounts/${auth.account_id}/boards`})
		return rp(options)
			.then(res => JSON.parse(res))
			.catch((error) => {
				logError(options)
				throw error
			})
	},

	getById(auth, boardId) {
		const options = addAuth(auth, {method: 'POST', uri: `${config.API_BASE}/boards/${boardId}`})
		return rp(options)
			.then(res => JSON.parse(res))
			.catch((error) => {
				logError(options)
				throw error
			})
	},

	updateById(auth, boardId, options) {}
}

function addAuth(auth, options) {
	options.headers = {
		Authorization: `Bearer ${auth.user.accessToken}`
	}
	return options
}

function logError(options) {
	return err => {
		console.error(`\n\nError for ${options.uri}`)
		console.error(`Status code:`, err.statusCode)
		try {
			console.error(JSON.parse(err.error))
		} catch (e) {
			console.error(err.error)
		}
	}
}

module.exports = {
	oauth: oAuth,
	boards: boards
}
