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
    return queryInterface.bulkInsert('Customers', [{
      customer_name: 'Fickry Bil Iman',
      no_hp: '08123456789',
      email: 'fickry@biliman.com',
      date_of_birth: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      customer_name: 'Sayyaf Rabbani',
      no_hp: '089089999',
      email: 'sayyaf@rabbani.com',
      date_of_birth: new Date(),
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
