'use strict';

//webpack assets (html|images|css|scss)
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
//npm modules
require('angular');
require('cowsay-browser');
//module constants
require('./app.module.js');
// //app logic
require('./cowsay.controller.js');
