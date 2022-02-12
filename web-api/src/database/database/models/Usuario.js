const Sequelize = require('sequelize');

class Usuario extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
			
			nome: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			sexo: {
				allowNull: false,
				type: Sequelize.CHAR(1),
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			senha: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			funcaoId: {
				allowNull: false,
				type: Sequelize.INTEGER,
                references: { model: {tableName: 'tb_funcao'}, key: 'id' }
			},
			candidadoId: {
				allowNull: true,
				type: Sequelize.INTEGER
                
			},
		},
		{
			sequelize,
			tableName: 'tb_usuario',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Usuario