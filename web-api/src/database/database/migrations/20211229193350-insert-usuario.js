'use strict';

const tableName = 'tb_usuario'
module.exports = {
  	up:  (queryInterface, Sequelize) => {
   
		return queryInterface.bulkInsert(
			{  tableName },
			[
        { 
					nome: 'Wanderlei',
          sexo: 'M',
          email: 'vanderlei@email.com',
          senha: '25d55ad283aa400af464c76d713c07ad',
          funcao_id: 2,
          candidato_id: 1
				},
				{ 
					nome: 'Carlos Bruno',
          sexo: 'M',
          email: 'carlos@email.com',
          senha: '25d55ad283aa400af464c76d713c07ad',
          funcao_id: 4,
          candidato_id: 1
				},
				{ 
					nome: 'Víctor Alcântara',
          sexo: 'M',
          email: 'vitor@email.com',
          senha: '25d55ad283aa400af464c76d713c07ad',
          funcao_id: 4,
          candidato_id: 1
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
