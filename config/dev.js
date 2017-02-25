const webpack = require('webpack');

const {appConfig, ctx, DEV} = require('./common');

module.exports = {
  devServer: DEV ? {
    clientLogLevel: 'warning',
    contentBase: `${ctx}/dist`,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: appConfig.port,
    overlay: true,
    stats: {
      colors: true,
      hash: true,
      timings: true,
      chunks: false,
      progres: true
    }
  } : {},
  devtool: DEV ? 'cheap-module-source-map' : false,
  prepareDev(config) {
    if (DEV) {
      config.entry.app.unshift(
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server'//,
        // 'react-hot-loader/patch'
      );
      config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      );
    }
  }
};
