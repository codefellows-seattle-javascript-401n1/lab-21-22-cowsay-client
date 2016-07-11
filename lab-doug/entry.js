//webpack assets (html|images|css|scss)
/**
 * we are designating a specific loader for this file because we do not want this file to be loaded as part of the bundle.
 * The double "!!" tells webpack to ignore the default loader and use the loader specified here instead.
 * "file" is shorthand for the name of the loader: file-loader.
 * "?" specifies that a query with a key/value pair is to be executed.
 * The "name" key indicates that you want to assign a name to the output file.
 * [name].[ext] specifies that the output file will have the same filename and extension as the original file.
 * The single "!" indicates the end of the configurations for the loader
 * everything after the last bang, is the path to the file we want to load.
 */
//require webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
/**
 * the config for scss loader is already included in the webpack.config.js file
 * By requiring this, we will pass the base.css file to the loader specified for scss files in webpack.config.js and the output will be the bundle.css
 */
require('./scss/base.scss');
//npm modules
const angular = require('angular');
const cowsay = require('cowsay-browser');
//module constants
const app = angular.module('cowsayApp', []);
//app logic
/**
 * app - description
 *
 * @param  {string} 'cowsayController' registering a controller name with the app
 * @param  {string} ['$scope'        a list of dependencies for the controller
 * @param  {variable} function($scope)  a list of parameters listed in the same order as the dependencies in the line above
 * @return {value}                    returns the result of cowsay.say method  with "text" as parameter
 */
app.controller('cowsayController', ['$scope', function($scope){
  $scope.cowsayText = 'default text for cow';
  $scope.say = function(){
    var text = $scope.cowsayText || '';
    return cowsay.say({text: text});
  };
  $scope.finalSay = function(text){
    // var text = $scope.cowsayText || '';
    return cowsay.say({text: text});
  };
}]);
