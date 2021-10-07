'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      nome: "Jorge",
      sobrenome: "da Silva",
      email: "jorge.silva@dominian.com",
      senha: "aaAA11{}",
      telefone: "11988881111",
      cpf: "52998224725",
      data_nascimento: ""
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
