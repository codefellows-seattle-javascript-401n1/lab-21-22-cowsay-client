'use strict';

// webpack
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm
const angular = require('angular');
const cowsay = require('cowsay-browser');

// app constants
const app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'you can make me talk!';
  $scope.cowsayFile = 'default';
  $scope.say = function(){
    let text = $scope.cowsayText || 'Write something here!';
    return cowsay.say({text: text, f: $scope.cowsayFile});
  };

  $scope.done = function(){
    let text = $scope.cowsayText || 'write something here!';
    $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
  };

  cowsay.list(function(err, list) {
    if (err) {
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });
}]);
