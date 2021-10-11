'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable('categories', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('categories')
    }
};
