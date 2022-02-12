
const Eleitor = require('../../database/database/models/Eleitor')

class EleitorRepostory {
    create(obj){
        return Eleitor.create( obj )
    }

    update(id, obj){
        return Eleitor.update(obj, {where: {id}})
    }

    getById(id){
        return Eleitor.findByPk( id )
    }
    
    getAll(){  
        return Eleitor.findAll(
            {
                order: [
                    ['id', 'ASC']
                ]
            }
        )                 
    }


    delete(id){
        
        return Eleitor.destroy({where: {id}})
    }        
    

}

module.exports = new EleitorRepostory

