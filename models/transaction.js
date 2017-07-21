'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    ItemId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    InvoiceId: DataTypes.INTEGER
  });
  
  // Transaction.associate = (models) => {
  //   Transaction.belongsTo(models.Customer)
  //   Transaction.belongsTo(models.Item)
  // }
  
  return Transaction;
};