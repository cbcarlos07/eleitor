'use strict';
const tableName = 'tb_eleitor'
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
					type: Sequelize.STRING,
          			allowNull: false
				},
        		titulo: {
					type: Sequelize.STRING,
          			allowNull: false
				},
        		zona: {
					type: Sequelize.INTEGER,
          			allowNull: false
				},
        		secao: {
					type: Sequelize.INTEGER,
          			allowNull: false
				},
				bairro_eleitoral_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: { model: {tableName: 'tb_bairro'}, key: 'id' }				
				},
				rua: {
					type: Sequelize.STRING,
          			allowNull: true
				},
				nr_casa: {
					type: Sequelize.STRING,
          			allowNull: true
				},
				complemento: {
					type: Sequelize.STRING,
          			allowNull: true
				},
				cep: {
					type: Sequelize.STRING(8),
          			allowNull: true
				},
				bairro_id: {
					type: Sequelize.INTEGER,
					allowNull: true,					
				},
				usuario_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: { model: {tableName: 'tb_usuario'}, key: 'id' }				
				},
				telefone: {
					type: Sequelize.STRING(11),
          			allowNull: false
        		},
				local_votacao: {
					type: Sequelize.STRING(100),
          			allowNull: false
        		},
				data_cadastro: {
					type: Sequelize.DATE,
          			allowNull: false,
					defaultValue: Sequelize.fn('now')
        		},
				data_nascimento: {
					type: Sequelize.DATE,
          			allowNull: true
        		}
				
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
