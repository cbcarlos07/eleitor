const service = require('./treService')
class TreController{
    buscar(req, res){
        console.log('buscar');
        service.buscar(req.body)
            .then(response => {
                res.json( response )
            })
    }
}

module.exports = new TreController