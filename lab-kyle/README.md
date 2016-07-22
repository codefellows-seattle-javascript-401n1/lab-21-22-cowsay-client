![cf](https://i.imgur.com/7v5ASc8.png) lab 21-22 cowsay client
======

[![Build Status](https://travis-ci.org/codefellows-seattle-javascript-401n1/lab-21-22-cowsay-client.svg?branch=master)](https://travis-ci.org/codefellows-seattle-javascript-401n1/lab-21-22-cowsay-client)
[![Issues?](https://img.shields.io/badge/Issues%3F-Ask%20for%20Help!-55cbe0.svg)](https://github.com/codefellows/seattle-javascript-401n1/issues/new)

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Build Tool Instructions
* create a package.json that lists all your developer dependencies
 * create a `watch` npm script for running `webpack-dev-server --inline --hot`
 * create a `lint` npm script to lint your javscript code using eslint
* create a wepack config file
 * must output files into a build directy
 * must have a sass loader config, that uses the `extract-text-webpack-plugin`

# Directions
* Create these directories to organize your code: 
 * html
 * scss
 * scss/vendor
* create a **_theme.scss** partial 
 * add three color variables
* create a **base.scss** file 
 * import normalize
 * import \_theme
 * write some styles that use the color variables defined in \_theme
* create a **entry.js**
 * require your **index.html** and force webpack to use the `file-loader`
 * require your **base.scss**
 * setup angular and create a controller for adding cowsay logic

# Client Functionality
* create a page with a form and two pre tags
 * one pre tag should be a preview, showing the result of `cowsay.say` with two way data-binding to an input on the form
 * the second pre tag should be final view, populated with what ever the first pretag shows when ever the submit button on the form is triggered
 * feel free to add any features or styling you want

# Bonus
* **1pt** add a third button to the form that uses the `ng-click` directive
 * whenever this button is clicked it should reset the second pretag with the content it last showed
* **1pt** add a select menu that uses the `ng-repeat` directive
 * use the `ng-repeat` to populate the select menu with the names of all cowsay files
 * when a cowsay filename is selected from the menu, have both pre-tags use that cowfile


