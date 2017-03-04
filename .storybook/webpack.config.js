const webpackConfig = require('../webpack.config');

const globalStylePaths = [
  `${webpackConfig.context}/app/styles`
];

const localStyleLoaders = 'style-loader!css-loader?modules&camelCase&importLoaders=1!postcss-loader!sass-loader';
const globalStyleLoaders = 'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader';

const [localStyles, globalStyles] = webpackConfig.module.rules.slice(-2);
localStyles.loader = localStyleLoaders;
globalStyles.loader = globalStyleLoaders;

module.exports = {
  context: webpackConfig.context,
  module: {
    loaders: webpackConfig.module.rules
  },
  externals: webpackConfig.externals,
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    },
    root: [
      `${webpackConfig.context}/app`
    ],
    extensions: ['', '.js', '.ts', '.tsx', '.scss', '.css', '.json']
  }
};