const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const {ctx, DEV} = require('./common');

module.exports = [
  new HtmlWebpackPlugin({
    title: 'Boilerplate',
    filename: 'index.html',
    template: `!!html-loader!${ctx}/app/index.html`,
    chunksSortMode: 'dependency',
    inject: true
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: !DEV
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks({userRequest}) {
      return typeof userRequest === 'string' && userRequest.includes('node_modules');
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({name: 'mainfest'}),
  new LodashModuleReplacementPlugin(),
  new ExtractTextPlugin({
    allChunks: true,
    filename: 'styles-[contenthash].css',
    disable: DEV
  })
];
