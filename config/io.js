const {ctx} = require('./common');

module.exports = {
  entry: {
    data: `${ctx}/app/data/index.ts`,
    app: [
      'styles/main.scss',
      `${ctx}/app/index.tsx`
    ]
  },
  output: {
    path: `${ctx}/dist`,
    filename: '[name]-[hash].js',
    publicPath: '/'
  }
};
