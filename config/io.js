const {ctx} = require('./common');

module.exports = {
  entry: {
    app: [
      'styles/main.scss',
      'babel-polyfill',
      `${ctx}/app/index.tsx`
    ]
  },
  output: {
    path: `${ctx}/dist`,
    filename: '[name]-[hash].js',
    publicPath: '/'
  }
};
