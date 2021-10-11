'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: "Silas",
      last_name: "Melo",
      email: "silas@gmail.com",
      password: "aaAA11{}",
      phone: "11988881111",
      cpf: "52998224725",
      birthday: (new Date(2000,5,22)).toString()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
