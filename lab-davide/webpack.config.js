'use strict';

// the begining of the webpack config will remain the same. Variations will exist on config//
// based on the tool trying to be built here//
module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js', //this is the filename that will be used after rendering//
    path: 'build' //if run webpack and this directory does not exist, will be created//
  },
  module: {
    loaders: [   //these loaders run bttm to top, right to left
      {
        test: /\.scss$/,
        loader: 'style!css!sass!'
      }
    ]
  }
};
