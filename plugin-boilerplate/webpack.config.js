const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const localtunnel = require('localtunnel')

const subdomain = `${require('os').userInfo().username}-${require('os').hostname()}`
  .replace(/(\s|\.)+/g, '-')
  .toLowerCase()

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

const entries = {
  index: './src/index.ts',
  app: './src/app.tsx',
}

/*
 * This is a custom plugin that uses localtunnel to create a `https` tunnel
 * to allow you to use this URL while you are developing locally
 */
class LocalTunnelPlugin {
  PLUGIN_NAME = 'LocalTunnel'

  tunnelCreated = false

  constructor(options = {}) {
    this.options = options
    this.border = '-'.repeat(
      process.stdout.columns - (this.PLUGIN_NAME.length + 9), // <i> [LocalTunnel]
    )
  }

  generateLog = (logger) => (url) => {
    logger.info(this.border)
    logger.info(`tunnel created: ${url}`)
    logger.info(this.border)
  }

  apply = async (compiler) => {
    if (!compiler.options.devServer || this.tunnelCreated) return

    const logger = compiler.getInfrastructureLogger(this.PLUGIN_NAME)
    const createLog = this.generateLog(logger)

    try {
      this.tunnelCreated = true
      const options = {
        port: compiler.options.devServer.port,
        ...this.options,
      }

      const tunnel = await localtunnel(options)

      if (tunnel.clientId !== options.subdomain) {
        logger.error(`tunnel https://${options.subdomain}.loca.it is not available`)
        createLog(tunnel.url)
      } else {
        createLog(tunnel.url)
      }
    } catch (e) {
      this.tunnelCreated = false
      logger.error('can not create tunnel', e)
    }
  }
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  bail: isProduction,
  target: isDevelopment ? 'web' : 'browserslist',
  devServer: {
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
