const http = require('node:http')
const PORT = 3333 || 4444

const server = http.createServer((request,response)=>{
    response.writeHead(200, {'content-type':'text/plan'})
    response.write('Ola, Mundo')
    response.end()
    
})

server.listen(PORT,()=>{
    console.log(`Servidor on PORT ${PORT}`)
})
