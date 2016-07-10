'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// const $ = require('jquery');
const angular = require('angular');
const cowsay = require('cowsay-browser');

var app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'put some text here!';
  $scope.cowsayFile = 'default';

  $scope.say = function(){
    let text = $scope.cowsayText || 'no, for real, put something here!';
    return cowsay.say({text: text, f: $scope.cowsayFile});
  };

  $scope.done = function(){
    let text = $scope.cowsayText || 'no, for real, put something here!';
    $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
  };

  cowsay.list(function(err, list){
    if (err) {
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });

}]);
