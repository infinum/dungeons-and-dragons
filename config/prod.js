const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const {ctx, DEV} = require('./common');

module.exports = {
  prepareProd(config) {
    if (!DEV) {
      config.plugins = [
        new CleanWebpackPlugin(`${ctx}/dist`, {root: ctx}),
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
          acorn: true,
          'screw-ie8': true,
          beautify: false,
          compress: {
            warnings: false
          },
          comments: false
        })
        // ,new BundleAnalyzerPlugin()
      ];
    }
  }
};
