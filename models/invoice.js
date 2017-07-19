'use strict';
module.exports = function(sequelize, DataTypes) {
  var Invoice = sequelize.define('Invoice', {
    invoice_number: DataTypes.INTEGER,
    invoice_date: DataTypes.DATE,
    status: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Invoice;
};