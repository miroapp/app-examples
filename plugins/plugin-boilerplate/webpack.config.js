const path = require('path')

module.exports = {
	mode: 'none', // Tip! compile in 'production' mode before publish

	// Tip! Just delete not using files, but main.ts is required
	entry: {
		main: './src/main.ts',
		sidebar: './src/sidebar.tsx', // Example! It works with React.
		library: './src/library.ts',
		modal: './src/modal.ts'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.less', '.css']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}