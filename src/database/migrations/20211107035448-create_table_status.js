'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable( 'status', { 
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
        await queryInterface.dropTable('status');
    }
};
