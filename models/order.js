'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    buyerId: DataTypes.BIGINT,
    sellerId: DataTypes.BIGINT,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return order;
};