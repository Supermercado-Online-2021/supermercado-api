'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable( 'products', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            price: {
                type: Sequelize.DECIMAL(6,2),
                allowNull: false
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            image_src: {
                type: Sequelize.STRING,
                allowNull: false
            },
            code_bar: {
                type: Sequelize.STRING,
                allowNull: false
            },
            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categories',
                    key: 'id'
                }
            },
        }),

        await queryInterface.addConstraint( 'products', {
            fields: [ 'code_bar' ],
            type: 'unique'
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable( 'products' )
    }
};
