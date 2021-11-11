'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('payment_methods', [
            { name: 'Cartão de crédito' },
            { name: "Cartão de débito" },
            { name: "Boleto bancário" },
            { name: "PIX" }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('payment_methods', null, {});
    }
};
