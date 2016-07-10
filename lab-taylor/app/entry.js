'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'Cowabung, dude.';
  $scope.cowsayFile = 'default';
  $scope.previousCow = '';

  $scope.finalize = function(text, file) {
    text = text || '';
    file = file || 'default';
    $scope.previousCow = $scope.finalCow || '';
    return $scope.finalCow = cowsay.say({text: text, f: file});
  };

  $scope.say = function() {
    let text = $scope.cowsayText || '';
    return $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
  };

  $scope.resetCow = function() {
    return $scope.finalCow = $scope.previousCow || '';
  };

  cowsay.list((err, list) => {
    if (err) { return $scope.cowFiles = ['default'];}
    return $scope.cowFiles = list;
  });
}]);
