const ENV = process.env.NODE_ENV || 'development';

const config = {
  shared: {
    ENV
  },
  development: {
    port: 9100
  }
};

export default Object.assign({}, config.shared, config[ENV] || {});
