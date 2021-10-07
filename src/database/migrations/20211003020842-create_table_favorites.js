'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable( 'favorites', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
        })
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('favorites');
    }
};
