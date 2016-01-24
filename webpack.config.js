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
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.sass$/, loader: ExtractTextPlugin.extract('css!sass?indentedSyntax') }
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
