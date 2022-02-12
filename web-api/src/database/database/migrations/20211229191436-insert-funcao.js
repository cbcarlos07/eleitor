'use strict';

const tableName = 'tb_funcao'
module.exports = {
  	up:  (queryInterface, Sequelize) => {
   
		return queryInterface.bulkInsert(
			{  tableName },
			[
				{ 
					descricao: 'Governador'
				},
				{ 
					descricao: 'Deputado Estadual'
				},
				{ 
					descricao: 'Deputado Federal'
				},
				{ 
					descricao: 'Líder'
				}

			]
		);
     
  	},

  	down:  (queryInterface, Sequelize) => {
		const {Op} = Sequelize
    	return queryInterface.bulkDelete({
			 tableName
	  	}, {
			id: { [Op.in]: [1, 2,3] }
	  	});
  }
};
