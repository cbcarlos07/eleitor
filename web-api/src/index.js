require('dotenv').config()

const http = require('./server')

const PORT = process.env.SERVER_PORT

http.listen(PORT, () =>{
    console.log(`Api rodando na porta ${PORT}`);
})