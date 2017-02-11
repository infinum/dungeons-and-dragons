const CleanWebpackPlugin = require('clean-webpack-plugin');

const {ctx, DEV} = require('./common');

module.exports = {
  prepareProd(config) {
    if (!DEV) {
      config.plugins = [
        new CleanWebpackPlugin(`${ctx}/dist`),
        ...config.plugins
      ];
    }
  }
};
