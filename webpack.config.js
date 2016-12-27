const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('webpack-html-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const appConfig = require('./config');

const ctx = path.join(__dirname);
const DEV = process.env.NODE_ENV === 'development';

const loaders = [
  'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]&camelCase',
  'postcss-loader?sourceMap=inline',
  'sass-loader?sourceMap'
];

const config = {
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
  devtool: DEV ? 'cheap-module-eval-source-map' : false,
  entry: {
    app: [
      `${ctx}/app/index.tsx`
    ]
  },
  output: {
    path: `${ctx}/dist`,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)?/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'awesome-typescript-loader']
    },
    DEV ? {
      test: /\.scss$/,
      loaders: ['style-loader', ...loaders]
    } : {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(loaders.join('!'))
    }, {
        test: /\.(png|jpg|svg)$/i,
        loader: 'file-loader?name=./assets/[name].[ext]'
    }, {
        test: /\.(woff|eot|ttf|woff2)$/i,
        loader: 'file-loader?name=./assets/[name].[ext]'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${ctx}/app/index.html`,
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': DEV ? JSON.stringify('production') : null
      }
    }),
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks({userRequest}) {
        return typeof userRequest === 'string' && userRequest.includes('node_modules');
      }
    })
  ],
  resolve: {
    modules: [`${ctx}/app`, 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.scss']
  },
};

if (!DEV) {
  config.plugins.push(
    new BabiliPlugin(),
    new ExtractTextPlugin('styles.css')
  );
} else {
  config.entry.app.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${appConfig.port}`,
    'webpack/hot/only-dev-server'
  );
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = config;
