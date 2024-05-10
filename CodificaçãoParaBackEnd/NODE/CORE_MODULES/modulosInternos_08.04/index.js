const http = require('node:http')
const PORT = 65535

const server = http.createServer((request, response)=>{
    const urlInfo = require('url').parse(request.url,true)
    const name  = urlInfo.query.name
    response.statusCode = 200
    response.setHeader('Content-Type','text/html')

    if(!name){
        response.end('<h1>Preencha seu nome: </h1> <form method="GET"> <input type="text" name="name" /> <input type="submit" value="Enviar" /> </form>')
    }if(name==='teste') {
        
    }
    // else{
    //     response.end(`<h1> Seja bem vindo ${name} </h1>`)
    // }
})
server.listen(PORT,()=>{
    console.log('Servidor ON')
})

// querys são os especificadores tipo ?produtos=cadeiraa