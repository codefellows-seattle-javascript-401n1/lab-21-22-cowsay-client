'use strict';

//webpack asset. is copying the below into the build directory//
require('!!file?name=[name].[ext]!./html/index.html');


require('./scss/base.scss'); //leave ext on sass file//

//npm module//
const angular = require('angular');
// const cowsay = require('cowsay-browser');

//defining a module. using an empty array because we are not using other angular modules that are dependent//
var app = angular.module('cowsayApp', []);

//fetching the same module from the angular cache//
const app = angular.module('cowsayApp');


// $().ready(function() {
//   $('.cowsay').html('<pre>' + cowsay.say({text: 'This cow says more than MOO'}) + '</pre>');
// });

console.log('webpack is working');
