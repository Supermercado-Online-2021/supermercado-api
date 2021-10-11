'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert( 'categories', [
            { name: 'Bebidas Alcoólicas' },
            { name: 'Bebidas' },
            { name: 'Açougue' },
            { name: 'Higiene e Beleza' },
            { name: 'Limpeza' },
            { name: 'Doces, Biscoitos e Confeitaria' },
            { name: 'Pratos Prontos e Congelados' },
            { name: 'Frios e Laticínios' },
            { name: 'Utilidade de Casa' },
            { name: 'Leites' },
            { name: 'Mercenaria' }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete( 'categories', null, {});
    }
};
