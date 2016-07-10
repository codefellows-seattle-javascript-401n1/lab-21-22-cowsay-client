'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var babel = require('babel');

module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: babel,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
