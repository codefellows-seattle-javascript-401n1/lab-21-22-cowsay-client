'use strict';

const extractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  plugins: [
    new extractPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: extractPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.otf$/,
        loader: 'url-loader?name=scss/fonts.[name].[ext]'
      }
    ]
  }
};
