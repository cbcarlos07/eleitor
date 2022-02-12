const { Router } = require('express')
const TreController = require('../../api/tre/treController')

const router = new Router()
const prefix = 'tre'

router.patch(`/${prefix}`, TreController.buscar)

module.exports  = router