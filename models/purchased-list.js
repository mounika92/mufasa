'use strict';
module.exports = (sequelize, DataTypes) => {
  var purchasedList = sequelize.define('purchasedList', {
    orderId: DataTypes.BIGINT,
    productId: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return purchasedList;
};