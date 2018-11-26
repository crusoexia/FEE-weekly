const path = require('path');
const baseConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  ...baseConfig,
  entry: [
    path.resolve(__dirname, '../src/index.js'),
    path.resolve(__dirname, './polyfill.js')
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true
      })
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/legacy')
  }
}
