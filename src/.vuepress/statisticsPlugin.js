const { path } = require('@vuepress/utils');

module.exports = (options, ctx) => ({
  name: 'vuepress-plugin-statistics',
  clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js'),
});
