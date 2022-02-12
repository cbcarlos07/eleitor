'use strict';
const tableName = 'tb_usuario'
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
				nome: {
					type: Sequelize.STRING(255),
          			allowNull: false					
				},
				sexo: {
					type: Sequelize.CHAR(1),
          			allowNull: false
        		},
				email: {
					type: Sequelize.STRING(255),
          			allowNull: false
        		},
				senha: {
					type: Sequelize.STRING(255),
          			allowNull: false
        		},
				funcao_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: { model: {tableName: 'tb_funcao'}, key: 'id' }
				},
				candidato_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
				}
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
