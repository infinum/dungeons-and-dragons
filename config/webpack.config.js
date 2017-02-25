const {ctx, DEV} = require('./common');
const {devServer, devtool, prepareDev} = require('./dev');
const {entry, output} = require('./io');
const plugins = require('./plugins');
const {prepareProd} = require('./prod');
const rules = require('./rules');

const config = {
  context: ctx,
  cache: true,
  entry,
  output,
  plugins,
  devServer,
  devtool,
  module: {rules},
  resolve: {
    modules: [
      `${ctx}/app`,
      `${ctx}/app/styles`,
      'node_modules'
    ],
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css', '.json'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  performance: {
    hints: DEV ? false : 'warning'
  },
  stats: !DEV,
  externals: {
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  }
};

prepareDev(config);
prepareProd(config);

module.exports = config;
