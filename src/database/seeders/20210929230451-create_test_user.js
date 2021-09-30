'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      nome: "Jorge",
      sobrenome: "da Silva",
      email: "jorge.silva@dominian.com",
      senha: "SfJo1h)Jk5{",
      telefone: "11988881111",
      cpf: "",
      data_nascimento: ""
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
