'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer_Item = sequelize.define('Customer_Item', {
    CustomerId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  });
  
  Customer_Item.associate = (models) => {
    Customer_Item.belongsTo(models.Customer)
    Customer_Item.belongsTo(models.Item)
  }
  
  return Customer_Item;
};