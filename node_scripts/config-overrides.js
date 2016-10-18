var paths = require('react-scripts/config/paths');
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

// change appIndexJs path to a tsx file
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

paths.appIndexJs = resolveApp('src/scripts/index.tsx');

module.exports = function override(config) {
  config.postcss = function () {
    var autoprefixer = require('autoprefixer')
    return [autoprefixer]
  }

  // allow loading of scss files
  config.module.loaders.push({
    test: /\.scss$/,
    include: [paths.appSrc, paths.appNodeModules],
    loaders: ["style", "css", "sass", "postcss"]
  });

  // allow loading of tsx / ts files
  config.module.loaders.push({
    test: /\.tsx?$/,
    include: [paths.appSrc, paths.appNodeModules],
    loaders: ["babel", "ts"],
    exclude: ['/node_modules/']
  });

  // add extensions
  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');

  // set path aliases  
  config.resolve.alias.lib = paths.appSrc + '/scripts';
  config.resolve.alias.scss = paths.appSrc + '/scss';
  config.resolve.alias.fonts = paths.appSrc + '/fonts';
  config.resolve.alias.img = paths.appSrc + '/img';

  // addon libraries
  config.resolve.alias.bolt = paths.appSrc + '/scripts/bolt';

  // externals
  if (config.externals === undefined) {
    config.externals = {};
  }
  config.externals.TweenMax = 'TweenMax';
  return config;
}