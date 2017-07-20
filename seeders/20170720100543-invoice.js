'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Invoices', [{
      invoice_number: 1,
      invoice_date: new Date(),
      CustomerId: 1,
      status: 'done',
      total: 700000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      invoice_number: 2,
      invoice_date: new Date(),
      CustomerId: 1,
      status: 'paid',
      total: 865000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
