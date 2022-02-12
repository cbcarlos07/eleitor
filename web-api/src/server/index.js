const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const server = require('http')
const app = express()
const realtime = require('../helpers/realtime')
const http = server.Server( app )
const jwtMiddleware = require('../helpers/jwt')
const fnRouterConfig = require('../routes')

const io = require( 'socket.io' )( http,{
    cors: {
        origin: [
                'http://localhost:4200',
                'http://localhost'
            ],
        methods: ['GET','POST']
    }
} )

const cors = require('cors')

app.use( bodyParser.urlencoded({extended: true}) )
app.use( bodyParser.json( {limit: '50mb'} ) )
app.use( helmet() )
app.use(cors())
const rotasBloqueadas         = ['/api/v1']
//app.use( jwtMiddleware( {blocks: rotasBloqueadas} ) )
fnRouterConfig( {app, io} )
realtime( io )

module.exports = http