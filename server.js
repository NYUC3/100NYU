/*eslint no-console:0 */
'use strict';

// Object assign function
require('core-js/fn/object/assign');


const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  // console.log('Opening your system browser...');
  // open('http://localhost:' + config.port + '/webpack-dev-server/');
});

// const path = require('path');  
// const express = require('express');  
// const webpack = require('webpack');  
// const webpackMiddleware = require('webpack-dev-middleware'); 
// const webpackHotMiddleware = require('webpack-hot-middleware'); 
// const config = require('./webpack.config.js');

// const app = express();  
// const compiler = webpack(config);

// app.use(express.static(__dirname + '/src'));  
// app.use(express.static(__dirname + '/dist')); 
// app.use(webpackMiddleware(compiler));  
// app.use(webpackHotMiddleware(compiler));
// app.get('*', function response(req, res) {  
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// });

// app.listen(config.port);  
