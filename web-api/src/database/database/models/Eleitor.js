const Sequelize = require('sequelize');

class Eleitor extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
			
			nome: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			titulo: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			zona: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			secao: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			secao: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			bairroEleitoralId: {
				allowNull: false,
				type: Sequelize.INTEGER,
                references: { model: {tableName: 'tb_bairro'}, key: 'id' }
			},
			rua: {
				allowNull: true,
				type: Sequelize.STRING
			},
			nrCasa: {
				allowNull: true,
				type: Sequelize.STRING
			},
			complemento: {
				allowNull: true,
				type: Sequelize.STRING
			},
			cep: {
				allowNull: true,
				type: Sequelize.STRING(8)
			},
			bairroId: {
				allowNull: true,
				type: Sequelize.INTEGER
			},
			usuarioId: {
				allowNull: false,
				type: Sequelize.INTEGER,
                references: { model: {tableName: 'tb_usuario'}, key: 'id' }				
			},
            telefone: {
                type: Sequelize.STRING(11),
                allowNull: false
            },
            localVotacao: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            dataCadastro: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now')
            },
            dataNascimento: {
                type: Sequelize.DATE,
                allowNull: true
            }
			
		},
		{
			sequelize,
			tableName: 'tb_eleitor',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Eleitor