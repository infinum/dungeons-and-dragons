const DEV = process.env.NODE_ENV === 'development';

const plugins = [
  require('postcss-font-magician')({
    protocol: 'https:',
    formats: 'woff2',
    variants: {
        'Alegreya': {
          '400': []
        },
        'Alegreya SC': {
          '400': []
        }
    },
    foundries: ['google']
  }),
  require('autoprefixer')({}),
];

if (!DEV) {
  plugins.push(require('cssnano')({}));
}

module.exports = {plugins};
