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
            nome: {
                type: Sequelize.STRING(25),
                allowNull: false,
            },
            sobrenome: {
                type: Sequelize.STRING(75),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            senha: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telefone: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            cpf: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            data_nascimento: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        })

        await queryInterface.addConstraint('users', {
            fields: [ 'email', 'telefone', 'cpf' ],
            type: 'unique'
        });
    },
    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('users')
    }
}
