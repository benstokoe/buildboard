var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './js/app'
  ],
  output: {
    path: '/dist/',
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('css!sass?indentedSyntax') },
      { test: /\.(svg|woff2|eot|ttf|woff)$/, loader: 'url-loader?limit=100000'  }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/app.css')
  ]
};
