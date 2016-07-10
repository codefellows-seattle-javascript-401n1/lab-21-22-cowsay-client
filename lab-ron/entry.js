'use strict';
// require webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
// npm modules
const angular = require('angular');
// app modules
const cowsay = require('cowsay-browser');
// module constants
var app = angular.module('cowsayApp', []);
// app logic

app.controller('CowsayController', [ '$scope', function($scope){
  $scope.cowsayText = 'This is Lab 21-22';
  $scope.cowsayFile = 'default';
  $scope.say = function(){
    let text = $scope.cowsayText || 'Enter your text here';
    return cowsay.say({text: text, f: $scope.cowsayFile});
  };

  $scope.done = function(){
    let text = $scope.cowsayText || 'Missing content';
    $scope.result = cowsay.say({text: text , f: $scope.cowsayFile});
  };

  cowsay.list(function(err, list) {
    if (err) {
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });
}]);
