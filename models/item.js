'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    nama_item: DataTypes.STRING,
    price_purchasing: DataTypes.INTEGER,
    price_selling: DataTypes.INTEGER
  });
  
  
  
  return Item;
};