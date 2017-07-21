'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    nama_item: DataTypes.STRING,
    price_purchasing: DataTypes.INTEGER,
    price_selling: DataTypes.INTEGER
  });
  
  Item.associate = (models) => {
    Item.belongsToMany(models.Customer, {
      through : 'Customer_Item'
    })
  }
  
  return Item;
};