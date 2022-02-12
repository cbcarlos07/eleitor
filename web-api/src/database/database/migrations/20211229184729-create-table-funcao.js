'use strict';
const tableName = 'tb_funcao'
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
				descricao: {
					type: Sequelize.STRING(255),
          			allowNull: false					
				},
				pagina_inicial_web: {
					type: Sequelize.STRING(255),
          			allowNull: true
        		},
				pagina_inicial_mobile: {
					type: Sequelize.STRING(255),
          			allowNull: true
        		}
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
