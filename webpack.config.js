var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sliding Puzzle',
      template: './src/template.html',
      filename: 'index.html'
    }),
    new ExtractTextWebpackPlugin('css/main.css')
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};