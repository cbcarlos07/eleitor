const { Router } = require('express')
//const UsuarioController = require('../../controller/UsuarioController')

const router = new Router()

router.get('/', (req, res, next)=>{
    res.json({msg: 'Bem vindo à API de Gerenciamento de Eleitor'})
})

/*router.patch('/auth', UsuarioController.login)

router.patch('/token', UsuarioController.getTokenEterno)
router.patch('/esqueci-senha', UsuarioController.esqueciSenha)
router.patch('/alterar-senha', UsuarioController.update)
router.get('/timeout', async (req, res,next)=>{
    const timeout = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve()
            }, 120000);
        })
    }

    await timeout()
    res.json({msg: 'Timeout 120000'})
})
router.get('/timeout1', async (req, res,next)=>{
    //req.setTimeout(60000)
    setTimeout(() => {
        res.json({msg: 'Timeout 120000'})        
    }, 120000);
})
*/
module.exports = router