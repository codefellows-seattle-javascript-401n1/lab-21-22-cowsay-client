'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');
/**
 * app - description
 *
 * @param  {string} 'cowsayController' registering a controller name with the app
 * @param  {string} ['$scope'        a list of dependencies for the controller
 * @param  {variable} function($scope)  a list of parameters listed in the same order as the dependencies in the line above
 * @return {value}                    returns the result of cowsay.say method  with "text" as parameter
 */

angular.module('cowsayApp').controller('cowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'default text for cow';
  $scope.say = function(){
    var text = $scope.cowsayText || '';
    return cowsay.say({text: text});
  };
  $scope.finalCow = '';
  $scope.finalSay = function(){
    $scope.finalCow =  cowsay.say({text: $scope.cowsayText });
  };

  //the second pre tag should be final view, populated with what ever the first pretag shows when ever the submit button on the form is triggered
}]);
