'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name: DataTypes.STRING,
    sellerId: DataTypes.BIGINT,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product;
};