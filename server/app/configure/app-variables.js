'use strict';

var path = require('path');

var rootPath = path.join(__dirname, '../../../');

var env = require(path.join(rootPath, './server/env'));

module.exports = function(app){
	app.setValue('env', env);
}