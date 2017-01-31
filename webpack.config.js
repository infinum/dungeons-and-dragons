const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appConfig = require('./config');

const ctx = path.join(__dirname);
const DEV = process.env.NODE_ENV === 'development';

let localLoaders = [
  `css-loader?sourceMap=${DEV}&modules&importLoaders=1&localIdentName=${DEV ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]'}&camelCase`,
  `postcss-loader?sourceMap=${DEV ? 'inline' : false}`,
  `sass-loader?sourceMap=${DEV}`
];

let globalLoaders = [
  `css-loader?sourceMap=${DEV}&importLoaders=1`,
  `postcss-loader?sourceMap=${DEV ? 'inline' : false}`,
  `sass-loader?sourceMap=${DEV}`
];

if (DEV) {
  localLoaders.unshift('style-loader');
  globalLoaders.unshift('style-loader');
} else {
  localLoaders = ExtractTextPlugin.extract(localLoaders.join('!'));
  globalLoaders = ExtractTextPlugin.extract(globalLoaders.join('!'));
}

const config = {
  context: ctx,
  entry: {
    app: [
      // 'whatwg-fetch',
      `${ctx}/app/index.tsx`
    ]
  },
  output: {
    path: `${ctx}/dist`,
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)?/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'awesome-typescript-loader'
      ]
    }, {
      test: /\.css$/,
      loaders: globalLoaders,
      include: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: globalLoaders,
      include: [`${ctx}app/styles`]
    }, {
      test: /\.scss$/,
      loaders: localLoaders,
      exclude: [`${ctx}app/styles`]
    }, {
        test: /\.(png|jpg|svg)$/i,
        loader: 'file-loader?name=assets/[name]-[hash].[ext]'
    }, {
        test: /\.(woff|eot|ttf|woff2)$/i,
        loader: 'file-loader?name=assets/[name]-[hash].[ext]'
    }]
  },
  plugins: [
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
    new LodashModuleReplacementPlugin()
  ],
  resolve: {
    modules: [`${ctx}/app`, 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
  cache: true,
  devServer: DEV ? {
    contentBase: `${ctx}/dist`,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: appConfig.port,
    stats: {
      colors: true,
      hash: true,
      timings: true,
      chunks: false,
      progres: true
    }
  } : {},
  performance: {
    hints: DEV ? false : 'warning'
  },
  devtool: DEV ? 'cheap-module-source-map' : false,
  stats: false
};

if (!DEV) {
  config.plugins = [
    new CleanWebpackPlugin(`${ctx}/dist`),
    ...config.plugins,
    new ExtractTextPlugin('styles-[hash].css')
  ];
} else {
  config.entry.app.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${appConfig.port}`,
    'webpack/hot/only-dev-server'
  );
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}

module.exports = config;
