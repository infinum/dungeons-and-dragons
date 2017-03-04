const {globalStylePaths, globalStyleLoaders, localStyleLoaders} = require('./styles');
const {DEV} = require('./common');

module.exports = [{
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader'
  }, {
    enforce: 'pre',
    test: /\.(ts|tsx)$/,
    loader: 'source-map-loader'
  }, {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  loaders: [
    `ifdef-loader?json={"DEV":${DEV}}`,
    'babel-loader',
    'ts-loader'
  ]
}, {
  test: /\.json$/,
  loader: 'json-loader',
  exclude: /manifest\.json$/
}, {
  test: /\.(png|jpg|svg)$/i,
  loader: 'file-loader?name=assets/images/[name]-[hash].[ext]'
}, {
  test: /\.(ico)$/i,
  loader: 'file-loader?name=favicon.ico'
}, {
  test: /\.(woff|eot|ttf|woff2)$/i,
  loader: 'file-loader?name=assets/fonts/[name]-[hash].[ext]'
}, {
  test: /manifest\.json$/,
  loaders: [
    'file-loader?name=manifest.json',
    'web-app-manifest-loader'
  ]
}, {
  test: /\.(css|scss)$/,
  loader: localStyleLoaders,
  exclude: globalStylePaths
}, {
  test: /\.(css|scss)$/,
  loader: globalStyleLoaders,
  include: globalStylePaths
}];
