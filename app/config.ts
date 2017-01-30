const ENV = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: 9100,
  },
  shared: {
    ENV,
  },
};

export default Object.assign({}, config.shared, config[ENV] || {});
