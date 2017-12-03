const helper = require('../../lib/helper');
const models = require('../../models/index');

module.exports = {
  homePage: function(req, res) {
    helper.handleResponse(res, null, 'home', null);
  },

  categories: function(req, res) {
    models.category.findAll().then(categories => {
      helper.handleResponse(res, null, 'category', categories);
    });
  }
}