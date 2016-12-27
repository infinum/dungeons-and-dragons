const DEV = process.env.NODE_ENV === 'development';

const plugins = [
  require('autoprefixer')({})
];

if (!DEV) {
  plugins.push(require('cssnano')({}));
}

module.exports = {plugins};
