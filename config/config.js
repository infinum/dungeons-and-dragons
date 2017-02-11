const ENV = process.env.NODE_ENV || 'development';

const config = {
  shared: {

  },
  development: {
    port: 9100
  }
};

module.exports = Object.assign({}, config.shared, config[ENV] || {});
