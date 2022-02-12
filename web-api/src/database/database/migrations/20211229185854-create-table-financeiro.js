'use strict';
const tableName = 'tb_financeiro'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			tableName,
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				usuario_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: { model: {tableName: 'tb_usuario'}, key: 'id' }				
				},
				valor: {
					type: Sequelize.DOUBLE,
          			allowNull: false
        		},
				data_inclusao: {
					type: Sequelize.DATE,
          			allowNull: false,
					defaultValue: Sequelize.fn('now')
        		}
				
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
