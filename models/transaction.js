'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    ItemId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    InvoiceId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Transaction;
};