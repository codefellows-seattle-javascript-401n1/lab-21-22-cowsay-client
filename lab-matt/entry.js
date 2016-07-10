'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const app = angular.module('cowsayApp', []);


app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'with I had something better to say...';
  $scope.cowsayFile = 'default';
  $scope.say = function(){
    $scope.result = cowsay.say({
      text: $scope.cowsayText || 'full this out please',
      f: $scope.cowsayFile
    });
  };
  $scope.final = function(){
    $scope.prevCow = $scope.finalResult || '';
    $scope.finalResult = $scope.result || '';

  };

  $scope.previous = function(){
    console.log($scope.finalResult);
    $scope.finalResult = $scope.prevCow || '';
  };

  cowsay.list(function(err, list){
    if(err){
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });
}]);
