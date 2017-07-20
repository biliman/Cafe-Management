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
    return queryInterface.bulkInsert('Transactions', [{
      ItemId: 1,
      CustomerId: 1,
      quantity: 3,
      InvoiceId: 1,
      createdAt: new Date(),
      updatedAt: new Date
    },{
      ItemId: 1,
      CustomerId: 2,
      quantity: 5,
      InvoiceId: 2,
      createdAt: new Date(),
      updatedAt: new Date
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
