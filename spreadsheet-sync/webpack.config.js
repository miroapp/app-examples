const webpack = require('webpack')

module.exports = {
	mode: 'development',

	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'main.js',
	},
	target: 'web',

	plugins: [new webpack.ProgressPlugin()],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [],
				use: 'babel-loader',
			},
		],
	},
}
