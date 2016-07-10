'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

var app = angular.module('cowsayApp', []);

app.controller('CowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'put some text here!';
  $scope.cowsayFile = 'default';
  $scope.historyOfThingsIveSaidArray = [];

  $scope.say = function(){
    let text = $scope.cowsayText || 'no, for real, put something here!';
    return cowsay.say({text: text, f: $scope.cowsayFile});
  };

  $scope.done = function(){
    console.log('done');
    let text = $scope.cowsayText || 'no, for real, put something here!';
    $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
    $scope.historyOfThingsIveSaidArray.push($scope.result);
    console.log('history array', $scope.historyOfThingsIveSaidArray);
  };

  $scope.lastThingISaid = function(){
    console.log('lastThingISaid');
    var previousThing = $scope.historyOfThingsIveSaidArray.length - 1;
    let text = $scope.historyOfThingsIveSaidArray[previousThing - 1];
    // $scope.result = cowsay.say({text: text, f: $scope.cowsayFile});
    $scope.result = text;
    console.log('array post pop', $scope.historyOfThingsIveSaidArray);
  };

  cowsay.list(function(err, list){
    if (err) {
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });

}]);
