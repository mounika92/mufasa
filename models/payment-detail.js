'use strict';
module.exports = (sequelize, DataTypes) => {
  var paymentDetail = sequelize.define('paymentDetail', {
    paymentModeId: DataTypes.INTEGER,
    accountId: DataTypes.BIGINT,
    details: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return paymentDetail;
};