'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert( 'categories', [
            { nome: 'Bebidas Alcoólicas' },
            { nome: 'Bebidas' },
            { nome: 'Açougue' },
            { nome: 'Higiene e Beleza' },
            { nome: 'Limpeza' },
            { nome: 'Doces, Biscoitos e Confeitaria' },
            { nome: 'Pratos Prontos e Congelados' },
            { nome: 'Frios e Laticínios' },
            { nome: 'Utilidade de Casa' },
            { nome: 'Leites' },
            { nome: 'Mercenaria' }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete( 'categories', null, {});
    }
};
