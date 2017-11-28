'use strict';
module.exports = (sequelize, DataTypes) => {
  var account = sequelize.define('account', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return account;
};