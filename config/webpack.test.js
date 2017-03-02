const glob = require('webpack-glob-entries');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {mapKeys, mapValues} = require('lodash');

const {ctx, DEV} = require('./common');
const {devServer, devtool, prepareDev} = require('./dev');
const plugins = require('./plugins');
const {prepareProd} = require('./prod');
const rules = require('./rules');

const entry = Object.assign({
  'polyfill.logic': 'babel-polyfill'
},
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
    new CleanWebpackPlugin(`${ctx}/.tmp/tests`, {root: ctx}),
    ...plugins.slice(3),
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
