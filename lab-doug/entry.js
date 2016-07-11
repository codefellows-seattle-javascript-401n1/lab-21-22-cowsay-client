'use strict';

//webpack assets (html|images|css|scss)
require('!!file?name=[name].[ext]!./app/html/index.html');
require('./app/scss/base.scss');
//npm modules
require('angular');
require('cowsay-browser');
//module constants
require('./app/app.module.js');
// //app logic
require('./app/cowsay.controller.js');
