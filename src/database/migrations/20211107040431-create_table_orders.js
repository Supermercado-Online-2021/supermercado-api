'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable( 'orders', { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            order_date: {
                type: Sequelize.DATE,
                default: Sequelize.NOW
            },
            price_total: {
                type: Sequelize.DECIMAL(8,2),
                allowNull: false
            },
            address_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'addresses',
                    key: 'id'
                }
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            form_payment_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'payment_methods',
                    key: 'id'
                }
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('orders');
    }
};
