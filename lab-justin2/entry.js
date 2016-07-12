'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

let app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'Sunday Lab sucks';
  $scope.cowsayFile = 'default';

  cowsay.list(function(err, list){
    if(err) {
      $scope.cowFiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });

  $scope.say = function(){
    let text = $scope.cowsayText || 'fill them UP!';
    return cowsay.say({text: text, f:$scope.cowsayFile});
  };

  $scope.done = function(){
    let text = $scope.cowsayText || 'told ya fill them !P!!';
    $scope.preresult = $scope.result;
    $scope.result = cowsay.say({text: text, f:$scope.cowsayFile});
  };
//Bonus feature;
  $scope.reset = function(){
    $scope.result = $scope.preresult;
  };

  cowsay.list(function(err, list){
    if (err){
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });

}]);
