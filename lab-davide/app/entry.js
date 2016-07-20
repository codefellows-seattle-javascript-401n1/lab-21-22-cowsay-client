'use strict';

// webpack is copying the below into the build directory//
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss'); //leave ext on sass file//

//npm module//
const angular = require('angular');
const cowsay = require('cowsay-browser');

//defining a module. using an empty array because we are not using other angular modules that are dependent   on this module//
var app = angular.module('cowsayApp', []);

//$scope is a injectible predefined piece of functionality that we can add to a controller//
app.controller('cowsayController', [ '$scope', function($scope) {
  $scope.cowsayText = 'Cows fall from the sky from trying to jump over the moon';
  $scope.cowsayFile = 'default';

  $scope.say = function() {
    let text = $scope.cowsayText || 'Please fill this out, thx moo!';
    return cowsay.say({text: text, f: $scope.cowsayFile});
  };

  $scope.done = function() {
    let text = $scope.cowsayText || 'Please fill this out, thx moo!';
    $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
  };

  cowsay.list(function(err, list) {
    if(err) {
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });
}]);
