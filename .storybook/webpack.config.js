const path = require('path');
// your app's webpack.config.js
const custom = require('../config/webpack.dev');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};