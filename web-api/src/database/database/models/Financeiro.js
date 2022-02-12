const Sequelize = require('sequelize');

class Financeiro extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
			
			usuarioId: {
				allowNull: false,
				type: Sequelize.INTEGER,
                references: { model: {tableName: 'tb_usuario'}, key: 'id' }
			},
			valor: {
				allowNull: false,
				type: Sequelize.DOUBLE,
			},
			dataInclusao: {
				allowNull: false,
				type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
			}
			
		},
		{
			sequelize,
			tableName: 'tb_financeiro',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Financeiro