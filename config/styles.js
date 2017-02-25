const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {ctx, DEV} = require('./common');

const globalStylePaths = [
  `${ctx}/app/styles`
];

const commonStyleLoaders = [{
  loader: 'postcss-loader',
  query: {sourceMap: DEV && 'inline'}
}, {
  loader: 'sass-loader',
  query: {sourceMap: DEV}
}];

const globalStyleLoaders = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    query: {
      sourceMap: DEV,
      importLoaders: 1,
      root: `${ctx}/app`
    }
  }, ...commonStyleLoaders]
});

const localStyleLoaders = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [{
    loader: 'css-loader',
    query: {
      sourceMap: DEV,
      modules: true,
      importLoaders: 1,
      localIdentName: DEV ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true,
      root: `${ctx}/app`
    }
  }, ...commonStyleLoaders]
});

module.exports = { globalStylePaths, globalStyleLoaders, localStyleLoaders};
