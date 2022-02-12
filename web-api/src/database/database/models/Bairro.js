const Sequelize = require('sequelize');

class Bairro extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
			
			descricao: {
				allowNull: false,
				type: Sequelize.STRING,
			}
			
		},
		{
			sequelize,
			tableName: 'tb_bairro',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Bairro