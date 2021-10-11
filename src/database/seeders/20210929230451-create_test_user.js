'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: "Jorge",
      last_name: "da Silva",
      email: "jorge.silva@dominian.com",
      password: "aaAA11{}",
      phone: "11988881111",
      cpf: "52998224725",
      birthday: ""
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
