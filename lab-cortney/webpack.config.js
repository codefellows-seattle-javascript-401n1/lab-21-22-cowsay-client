'use strict';

// var webpack = require('webpack');
var ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  plugins: [
    new ExtractPlugin('bundle.css')
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract('style', 'css!sass')
      }
    ]
  }
};
