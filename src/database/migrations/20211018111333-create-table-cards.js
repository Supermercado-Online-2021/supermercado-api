'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('cards', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true, 
				autoIncrement: true,
				allowNull: false
			},
			owner_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			surname: {
				type: Sequelize.STRING,
				allowNull: false
			},
			numbers: {
				type: Sequelize.STRING,
				allowNull: false
			},
			due_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			type_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
                    model: 'card_types',
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
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('cards');
	}
};
