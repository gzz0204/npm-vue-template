const utils = require('./utils');
const pkg = require('../package.json');
console.log(pkg.name);
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'src': utils.resolve('src'),
      'components': utils.resolve('components'),
      [pkg.name]: utils.resolve('components/index.js'),
    },
  },
};
