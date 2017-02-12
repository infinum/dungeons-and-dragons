const glob = require('webpack-glob-entries');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {mapKeys} = require('lodash');

const {ctx, DEV} = require('./common');
const {devServer, devtool, prepareDev} = require('./dev');
const plugins = require('./plugins');
const {prepareProd} = require('./prod');
const rules = require('./rules');

const entry = Object.assign({},
  mapKeys(glob(`${ctx}/app/**/*.test.ts`), (val, key) => key + '.logic'),
  mapKeys(glob(`${ctx}/app/**/*.test.tsx`), (val, key) => key + '.view')
);

const config = {
  context: ctx,
  cache: true,
  entry,
  output: {
    path: `${ctx}/.tmp/tests`,
    filename: '[name].js',
  },
  plugins: [
    ...plugins.slice(3),
    new CleanWebpackPlugin(`${ctx}/.tmp/test`, {root: ctx}),
  ],
  devtool,
  module: {rules},
  resolve: {
    modules: [`${ctx}/app`, 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css', '.json'],
  },
  performance: {
    hints: false,
  },
  stats: true,
  externals: {
    'cheerio': 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
};

module.exports = config;
