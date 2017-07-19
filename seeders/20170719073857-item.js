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
    return queryInterface.bulkInsert('Items', [{
      nama_item: 'Black Coffee',
      price_purchasing: 3000,
      price_selling: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama_item: 'Ice Tea',
      price_purchasing: 2000,
      price_selling: 4000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama_item: 'Hotspot Login',
      price_purchasing: 1000,
      price_selling: 3000,
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
