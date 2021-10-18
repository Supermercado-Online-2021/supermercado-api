'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('card_types', [
            {name: 'Cartão de Crédito'},
            {name: 'Cartão de Debito'}
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('card_types', null, {});
    }
};
