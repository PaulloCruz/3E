// quando se coloca type module o js entende o export e o import
// {
//     "name": "1_http_array",
//     "version": "1.0.0",
//     "description": "",
//     "main": "server.js",
//     "type": "module", <faz o js entender import e export (localizado em package.json)

import http, { request } from "node:http";
const PORT = 3333;

//  Metodos:
// sobre os metodos http tem o:
// Get (solicitar informação)
// Post (envia informação)
// Put (atualizar o objeto como um todo)
// Path (atualizar algo especifico)
// Delete (excluir recursos)

/**
 * Requisição
 * 1. corpo da requisição(aplicação) {request.body} {POST}
 * 2. Parametro de busca (Search PARAMS, QUERY PARAMS) {http://localhost:3333/users/2(parametro de busca "2")} {GET}
 * 3. Paramêtros de ROTA (ROUTE PARAMS) - {http://localhost:3333/users/1} {PUT, PATH, DELETE}
 *  
 */

// Códigos
const users = [];
const server = http.createServer((request, response) => {
  const { method, url } = request;

  if(url === "/users" && method === "GET") {//Buscar todos os usuarios
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
    
  } else if (url.startsWith('/users/') && method=== 'GET') {//Buscar um unico usuario
    // o que vem dps de users é o indice do array e não o id, so que o id é igual ao indice do, 

    const userId = url.split('/')[2] // toda vez que encontrar uma [/] ele vai cortar e o [2] ele vai pegar o pedaço do indice 2
    const user = users.find((user) => user.id == userId)
    if (user) {
      response.setHeader("Content-Type","application/json")      
      response.end(JSON.stringify(user))
    }else{
      response.writeHead(401, {"Content-Type":"application/json"})
      response.end(JSON.stringify({ message: "Usuario não encontrado"}))
    }

  } else if (url === "/users" && method === "POST") { //Cadastrar um usuario
    let body = ''
    // on são os escuters, {data:(ele pega tudo que receber, tudo que é dado) Chunks: são os pedacinhos das informações, ele junta tudo nesse chunks; push(novoUsuario): esta adicionando um objeto a novoUsuario, push add coisas } 
    request.on('data',(chunk)=>{
        body+= chunk.toString()
        })
        request.on('end',()=>{
            const novoUsuario = JSON.parse(body)
            novoUsuario.id = users.length+1
            users.push(novoUsuario)
            response.writeHead(201, {'Content-Type':'application/json'})
            response.end(JSON.stringify(novoUsuario))
        })

  } else if (url.startsWith("/users/") && method === "PUT") { //Atualizar um usuario
    const userId = url.split('/')[2] // toda vez que encontrar uma [/] ele vai cortar e o [2] ele vai pegar o pedaço do indice 2
    let body = ""
    request.on('data',(chunk)=>{
      body += chunk.toString()
    })
    request.on('end',()=>{
      const updateUser = JSON.parse(body)
      const index = users.findIndex((user)=> user.id == userId) //findIndex ele mostra a posição em que se encontra aquele objeto
      if(index !== -1){
        // atualizar
        users[index] = {...users[index], updateUser}
        response.end(JSON.stringify(users[index]))
      }else{
        // error
        response.writeHead(404,{"Content-Type":"application/json"})
        response.end(JSON.stringify({message:'Erro ao tentar atualizar esse usuário '}))
      }
      
    })

  } else if (url.startsWith("/users/") && method === "DELETE") {//deletar um usuário
    const userId = url.split('/')[2] // toda vez que encontrar uma [/] ele vai cortar e o [2] ele vai pegar o pedaço do indice 2
    const index = users.findIndex((user)=> user.id == userId) //findIndex ele mostra a posição em que se encontra aquele objeto
    users.indexOf(index) //ele busca o indice onde esta localizado o index atual
    users.splice(index,1) // ele vai ate o indice atual e apaga apenas o indice atual, pois foi inserido 1 no ultimo parametro
    response.end(JSON.stringify(users[index])) 

  } else {
    //Recurso não encontrado
    response.writeHead(404,{"Content-Type":"application/json"})
    response.end
      JSON.stringify({message:"Pagina não encontrada"})
  }
});

server.listen(PORT, () => {
  console.log(`servidor on port ${PORT}`);
});
