const path = require('path');
const appConfig = require('./config');

const ctx = path.join(__dirname, '..');
const DEV = process.env.NODE_ENV === 'development';

module.exports = {appConfig, ctx, DEV};
