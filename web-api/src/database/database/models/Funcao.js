const Sequelize = require('sequelize');

class Funcao extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
			
			descricao: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			paginaInicialWeb: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			paginaInicialMobile: {
				allowNull: true,
				type: Sequelize.STRING,
			},
		},
		{
			sequelize,
			tableName: 'tb_funcao',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Funcao