'use strict';
module.exports = (sequelize, DataTypes) => {
  var paymentMode = sequelize.define('paymentMode', {
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return paymentMode;
};