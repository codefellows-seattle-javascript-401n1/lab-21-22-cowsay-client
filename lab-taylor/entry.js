'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'Cowabung, dude.';
  $scope.cowsayFile = 'default';
  $scope.say = function() {
    let text = $scope.cowsayText || '';
    return $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
  };

  cowsay.list((err, list) => {
    if (err) { return $scope.cowFiles = ['default'];}
    return $scope.cowFiles = list;
  });
}]);
