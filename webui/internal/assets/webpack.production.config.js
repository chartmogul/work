var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: APP_DIR + '/index.js',
  output: { path: BUILD_DIR, filename: 'work.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&camelCase&-url&localIdentName=[hash:base64:5]-[local]'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?[#a-z_]+)?$/,
        loader: 'url'
      }
    ]
  }
};
