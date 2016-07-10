'use strict';

//webpack assets(html|images|css/scss|*)//


//npm modules
const $ = require('jquery');

//app modules
//app logic

//basically is copying the below into the build directory//
require('!!file?name=[name].[ext]!./html/index.html');
console.log('webpack is working');
