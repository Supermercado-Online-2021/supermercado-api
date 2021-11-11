'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('status', [
            { name: 'Pedido efetuado'},
            { name: "Pedido cancelado"},
            { name: "Aguardando pagamento" },
            { name: "Pagamento efetuado" },
            { name: "Pagamento não autorizado" },
            { name: "Preparando pedido para enviado" },
            { name: "Pedido a caminho" },
            { name: "Pedido entregue" }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('status', null, {});
    }
};
