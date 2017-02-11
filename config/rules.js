const {globalStylePaths, globalStyleLoaders, localStyleLoaders} = require('./styles');

module.exports = [{
    enforce: 'pre',
    test: /\.js$/,
    loader: "source-map-loader"
  }, {
    enforce: 'pre',
    test: /\.(ts|tsx)$/,
    use: "source-map-loader"
  }, {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
    'ts-loader'
  ]
}, {
  test: /\.json$/,
  loader: 'json-loader'
}, {
  test: /\.(css|scss)$/,
  use: localStyleLoaders,
  exclude: globalStylePaths
}, {
  test: /\.(css|scss)$/,
  use: globalStyleLoaders,
  include: globalStylePaths
}, {
  test: /\.(png|jpg|svg)$/i,
  loader: 'file-loader?name=assets/images/[name]-[hash].[ext]'
}, {
  test: /\.(woff|eot|ttf|woff2)$/i,
  loader: 'file-loader?name=assets/fonts/[name]-[hash].[ext]'
}];
