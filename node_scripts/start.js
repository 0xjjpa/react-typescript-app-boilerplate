var rewire = require('rewire');
var override = require('./config-overrides');
var defaults = rewire('react-scripts/scripts/start.js');
var config = require('react-scripts/config/webpack.config.dev');
config = override(defaults.__get__('config'));
