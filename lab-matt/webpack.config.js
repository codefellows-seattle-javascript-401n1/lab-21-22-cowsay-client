'use strict';

const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  plugins: [
    new ExtractText('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass!')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        },
        loader: 'babel'
      }
    ]
  }
};
