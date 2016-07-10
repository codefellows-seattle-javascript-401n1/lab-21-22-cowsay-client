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
      }
    ]
  }
};
