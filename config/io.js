const {ctx} = require('./common');

module.exports = {
  entry: {
    app: [
      `${ctx}/app/index.tsx`
    ]
  },
  output: {
    path: `${ctx}/dist`,
    filename: '[name]-[hash].js',
    publicPath: '/'
  }
};
