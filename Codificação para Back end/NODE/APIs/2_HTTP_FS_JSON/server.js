import http from 'node:http'
import fs from 'node:fs'

const PORT = 3333


const server = http.createServer((request, response) => {
    const { method, url } = request
    fs.readFile('funcionarios.json', 'utf8', (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify({ message: "Erro ao buscar os dados" }))
            return;
        }

        let jsonData = []

        try {
            jsonData = JSON.parse(data)
        } catch (error) {
            console.log(`Erro ao ler o arquivo jsonData ${error}`)
        }

        if (method === 'GET' && url === '/empregados') {
            fs.readFile('funcionarios.json', 'utf8', (err) => {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: "Erro ao buscar os dados" }))
                    return
                }

                const jsonData = JSON.parse(data)

                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify(jsonData))

            });
        }
        else if (method === 'GET' && url === '/empregados/count') {
            fs.readFile("funcionarios.json", "utf-8", (err, data) => {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: "Erro ao ler o arquivo" }))
                }
                const jsonData = JSON.parse(data)
                const totalFuncionarios = jsonData.length

                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ message: `total de funcionarios: ${totalFuncionarios}` }))
            })
        }
        else if (method === 'GET' && url.startsWith('/empregados/PorCargo/')) {
            const cargo = url.split("/")[3]
            fs.readFile('funcionarios.json','utf8',(err,data)=>{
              if(err){
                response.writeHead(500,{"Content-Type":"application/json"})
                response.end(JSON.stringify({message:"Erro ao ler o arquivo"}))
                }
                const jsonData = JSON.parse(data)

                const funcionarioPorCargo = jsonData.filter((funcionario)=>funcionario.cargo===cargo)

                if(funcionarioPorCargo.length === 0){
                  response.writeHead(404,{"Content-Type":"application/json"})
                  response.end(JSON.stringify({message:'Funcionario não encontrado'}))
                }
            })
            response.end()
            // console.log('GET /empregados/PorCargo/{cargo}')
        }
        else if (method === 'GET' && url.startsWith('/empregados/porHabilidade/')) {
            console.log('GET /empregados/porHabilidade/{Habilidade}')
            response.end()
        }
        else if (method === 'GET' && url.startsWith('/empregados/porFaixaSalarial/')) {
            console.log('GET /empregados/porFaixaSalarial/{FaixaSalarial}}')
            response.end()
        }
        else if (method === 'GET' && url.startsWith('/empregados')) { //unico usuario
            const id = parseInt(url.split('/')[2])
            //localhost:3333/empregados/3
            fs.readFile('funcionarios.json', 'utf8', (err, data) => {
                if (err) {
                    response.writeHead(500, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: "Erro ao ler o arquivo" }))
                }
                const jsonData = JSON.parse(data)

                const indexFuncionario = jsonData.findIndex((funcionario) => funcionario.id === id)

                if (indexFuncionario === -1) {

                    response.writeHead(404, { 'Content-Type': 'application/json' })
                    response.end(JSON.stringify({ message: "Funcionário não encontrado" }))
                    return
                }
                const funcionarioEncontrado = jsonData[indexFuncionario]

                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify(funcionarioEncontrado))
            })
        }
        else if (method == 'POST' && url === '/empregados') {
            let body = ''
            request.on('data', (chunk) => {
                body += chunk
            })
            request.on('end', () => {
                const novoFuncionario = JSON.parse(body)
                novoFuncionario.id = jsonData.length + 1
                jsonData.push(novoFuncionario)

                fs.writeFile("funcionarios.json", JSON.stringify(jsonData, null, 2),
                    (err) => {
                        if (err) {
                            response.writeHead(500, { 'Content-Type': 'application/json' })
                            response.end(JSON.stringify({ message: 'Erro interno no servidor}' }))
                            return
                        }
                        response.writeHead(200, { 'Content-Type': 'application/json' })
                        response.end(JSON.stringify(novoFuncionario))
                    })
            })
        } else if (method == 'PUT' && url.startsWith('/empregados/')) {
            console.log('POST /empregados/{id}: ')
            response.end()
        }
        else if (method == 'DELETE' && url.startsWith('/empregados/')) {
            console.log('POST /empregados/{id}: ')
            response.end()
        } else {
            response.writeHead(500, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify({ message: "PÁGINA NÃO ENCONTRADA" }))

        }


    })
})

server.listen(PORT, () => {
    console.log(`Servidor on PORT: ${PORT} 😎`)
})

