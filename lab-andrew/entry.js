'use strict';
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
var app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'And so it begins';
  $scope.cowsayFile = 'ghostbusters';
  $scope.prev = [];
  $scope.count = 0;
  $scope.say = function() {
    $scope.result = cowsay.say({text: $scope.cowsayText, f: $scope.cowsayFile});
    return cowsay.say({text: $scope.cowsayText, f: $scope.cowsayFile});
  };
  $scope.finalize = function() {
    console.log($scope.result);
    $scope.finalizeResult = $scope.result || '';
    $scope.prev.push($scope.result);
    $scope.count++;
  };
  $scope.previous = function() {
    if($scope.prev.length === 0) {
      $scope.finalizeResult = $scope.prev[0];
      $scope.count = 0;
    }
    $scope.prev.pop();
    $scope.finalizeResult = $scope.prev[$scope.prev.length - 1] || '';
    $scope.count--;
  };
  cowsay.list(function(err, list) {
    if(err) {
      $scope.cowFiles = ['ghostbusters'];
      return;
    }
    $scope.cowFiles = list;
  });
}]);
