'use strict';
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'And so it begins';
  $scope.cowsayFile = 'ghostbusters';
  $scope.say = function() {
    let text = $scope.cowsayText || 'Please add some text trolls';
    $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
  };
  cowsay.list(function(err, list) {
    if(err) {
      $scope.cowFiles = ['ghostbusters'];
      return;
    }
    $scope.cowFiles = list;
  });
}]);
