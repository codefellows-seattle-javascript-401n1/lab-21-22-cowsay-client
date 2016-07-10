'use strict';

//webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

//npm mods
const angular = require('angular');
//app mods
const cowsay = require('cowsay-browser');
//module consts

var app = angular.module('cowsayApp', []);
//logic

app.controller('cowsayController', [ '$scope', function($scope){
  $scope.cowsayText = 'WAHT?';
  $scope.say = function(){
    let text = $scope.cowsayText || 'fill this in!';
    return cowsay.say({text: text});
  };
  $scope.done = function(){
    let text = $scope.cowsayText || 'fill this in!';
    $scope.result = cowsay.say({text: text});
  };
}]);
