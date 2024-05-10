const fs = require('node:fs')
const http = require('node:http')

const server = http.createServer((request, response)=>{
    fs.readFile('index.html',(err, data)=>{
        response.writeHead(200,{'Content-Type':'text/html'})
        if(err){
            throw new Error('Erro ao ler o arquivo')
        }
        console.log('Servidor on PORT 3333')
        response.write(data)
        return response.end()
    })
})

server.listen(3333,()=>{
})