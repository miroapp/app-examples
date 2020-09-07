const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'development',

	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'main.js',
	},

	plugins: [new webpack.ProgressPlugin()],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [],
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	optimization: {
		minimizer: [new TerserPlugin()],
	},
}
