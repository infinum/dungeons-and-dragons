const webpackConfig = require('../webpack.config');

module.exports = {
  context: webpackConfig.context,
  module: {
    loaders: webpackConfig.module.rules
  },
  externals: webpackConfig.externals,
  resolve: {
    root: `${webpackConfig.context}/app`
  }
};