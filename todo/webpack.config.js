var Webpack           = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  devtool : 'source-map',

  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    'webpack/hot/dev-server',
    './src/index.jsx'
  ],

  output: {
    filename: 'assets/js/application.js',
    path: __dirname,
    publicPath: '/',
    devtoolModuleFilenameTemplate: '[resource-path]'
  },

  resolve: {
    extensions: [ '', '.js', '.jsx', '.json', '.scss', '.svg' ],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src', 'src/components', 'assets', 'lib' ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("assets/css/application.css", {
      disable: process.env.NODE_ENV !== 'production'
    })
  ],

  node: {
    console: false,
    process: false,
    global: true,
    Buffer: false,
    __filename: 'mock',
    __dirname: 'mock'
  },

  postcss: [
    require('autoprefixer-core'),
    require('css-mqpacker'),
    require('csswring')
  ],

  module: {
    loaders: [
      {
        test    : /\.s*(c|a)ss$/,
        loader  : ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'react-hot!source-map!babel?experimental'
      },
      {
        test    : /\.json$/,
        loader  : 'json'
      },
      {
        test    : /\.(svg)$/,
        loader  : 'raw'
      },
    ],
    postLoaders: [
      {
        test    : /\.jsx*$/,
        loader  : 'envify-loader'
      }
    ]
  }
}
