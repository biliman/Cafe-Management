'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    customer_name: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
  });
  
  Customer.associate = (models) => {
    Customer.hasMany(models.Invoice)
    Customer.hasMany(models.Transaction)
  }
  
  return Customer;
};