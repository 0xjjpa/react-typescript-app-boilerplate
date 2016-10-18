var rewire = require('rewire');
var override = require('./config-overrides');
var defaults = rewire('react-scripts/scripts/build.js');
var config = require('react-scripts/config/webpack.config.prod');
config = override(defaults.__get__('config'));