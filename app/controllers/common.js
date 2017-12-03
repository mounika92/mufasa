const helper = require('../../lib/helper');

module.exports = {
  homePage: function(req, res) {
    helper.handleResponse(res, null, 'home', null);
  }
}