'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable( 'payment_methods', { 
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            } 
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('payment_methods');
    }
};