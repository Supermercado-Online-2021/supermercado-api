'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('orders_status', { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            order_date: {
                type: Sequelize.DATE,
                allowNull: false,
                default: Sequelize.NOW
            },
            status_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'status',
                    key: 'id'
                }
            },
            order_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'orders',
                    key: 'id'
                }
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('orders_status');
    }
};
