const {ctx, DEV} = require('./config/common');
const {devServer, devtool, prepareDev} = require('./config/dev');
const {entry, output} = require('./config/io');
const plugins = require('./config/plugins');
const {prepareProd} = require('./config/prod');
const rules = require('./config/rules');

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
    modules: [`${ctx}/app`, 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css', '.json']
  },
  performance: {
    hints: DEV ? false : 'warning'
  },
  stats: false,
  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  }
};

prepareDev(config);
prepareProd(config);

module.exports = config;
