const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LocalTunnelPlugin = require('webpack-plugin-localtunnel')
const pkg = require('./package.json')

const subdomain = `${require('os').userInfo().username}-${pkg.name}`.replace(/(\s|\.)+/g, '-').toLowerCase()

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

const entries = {
  index: './src/index.ts',
  app: './src/app.tsx',
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  bail: isProduction,
  target: isDevelopment ? 'web' : 'browserslist',
  devServer: {
    noInfo: true,
    disableHostCheck: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    isDevelopment &&
      new LocalTunnelPlugin({
        subdomain,
      }),
    ...Object.keys(entries).map((entry) => {
      const sharedHtmlSettings = {
        chunks: [entry],
        inject: 'body',
        meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        template: `./src/${entry}.html`,
      }

      return new HtmlWebpackPlugin({...sharedHtmlSettings, ...(entry === 'index' ? {} : {filename: `${entry}.html`})})
    }),
  ].filter(Boolean),
}
