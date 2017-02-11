const CleanWebpackPlugin = require('clean-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const {ctx, DEV} = require('./common');

module.exports = {
  prepareProd(config) {
    if (!DEV) {
      config.plugins = [
        new CleanWebpackPlugin(`${ctx}/dist`, {root: ctx}),
        ...config.plugins//,
        // new BabiliPlugin({
        //   removeConsole: true,
        //   removeDebugger: true
        // }, {
        //   comments: false,
        //   sourceMap: false
        // })
      ];
    }
  }
};
