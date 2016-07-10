'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');

const cowsay = require('cowsay-browser');

var app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'I say the coolest things!';
  $scope.cowsayFile = 'default';
  $scope.say = function(){
    let text = $scope.cowsayText || 'Fill this out';
    return cowsay.say({text: text, f: $scope.cowsayFile});
  };

  $scope.done = function(){
    let text = $scope.cowsayText || 'fill this out!';
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
