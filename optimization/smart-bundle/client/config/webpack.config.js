const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  mode: NODE_ENV,
  entry: [    
    path.resolve(__dirname, '../src/index.js')
  ],
  devtool: NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      path.resolve(__dirname, '../dist')
    ]),
    new HTMLWebpackPlugin({
      template: require.resolve('../public/index.html'),
      filename: 'index.html'
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      cache: true
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true
      })
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/modern')
  }
};
