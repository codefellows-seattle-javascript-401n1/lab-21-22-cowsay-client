'use strict';

// webpack
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm
let angular = require('angular');
const cowsay = require('cowsay-browser');

// app constants
const app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'write somehting here to make me talk!';
  $scope.say = function(){
    let text = $scope.cowsayText || '';
    return cowsay.say({text: text});
  };
}]);
