'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(25),
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING(75),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            cpf: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            birthday: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        })

        await queryInterface.addConstraint('users', {
            fields: [ 'email', 'phone', 'cpf' ],
            type: 'unique'
        });
    },
    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('users')
    }
}
