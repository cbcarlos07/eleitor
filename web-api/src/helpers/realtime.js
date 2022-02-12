const realtime = io => {
    io.on('connection', socket => {
        socket.on('user', data =>{                    
            socket.broadcast.emit( 'user', data )
        })
    })
}

module.exports = realtime