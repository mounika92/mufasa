var common = require('./app/controllers/common');

module.exports = function(app) {
  app.get('/', common.homePage);
}