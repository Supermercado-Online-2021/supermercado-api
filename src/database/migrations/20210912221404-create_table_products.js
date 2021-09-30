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
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            preco: {
                type: Sequelize.DECIMAL(6,2),
                allowNull: false
            },
            quantidade: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            image_src: {
                type: Sequelize.STRING,
                allowNull: false
            },
            codigo_barras: {
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
            fields: [ 'codigo_barras' ],
            type: 'unique'
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable( 'products' )
    }
};
