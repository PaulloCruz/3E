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
 * 2. Parametro de busca (Search PARAMS, QUERY PARAMS) {    users/2(parametro de busca "2")} {GET}
 * 3. Paramêtros de ROTA (ROUTE PARAMS) - {http://localhost:3333/users/1} {PUT, PATH, DELETE}
 */

// Códigos
const users = [];
const server = http.createServer((request, response) => {
  


  const { method, url } = request;
  //   logica

  if (url === "/participants" && method === "POST") {
    //Cadastrar novo participante
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const novoUsuario = JSON.parse(body);
      if (
        novoUsuario.idade >= 16 &&
        novoUsuario.password == novoUsuario.VerificaPassword
      ) {
        novoUsuario.id = users.length + 1;
        users.push(novoUsuario);
        response.writeHead(201, { "Content-Type": "application/json" });
        response.end(JSON.stringify(novoUsuario));
      } else {
        // error
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({ message: "Erro ao tentar cadastrar usuario" })
        );
      }
    });
  } else if (url === "/participants" && method === "GET") {
    //Lista de todos usuarios
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
  } else if (url === "/participants/count" && method === "GET") {
    //Contar total de usuarios
    const usersCount = users.length;
    if (usersCount == 0) {
      response.setHeader("Content-Type", "application/json");
      response.end(
        JSON.stringify({ message: "Não tem nenhum usuario cadastrado" })
      );
    } else {
      response.setHeader("Content-Type", "application/json");
      response.end(
        JSON.stringify({ message: `Atualmente tem: ${usersCount} usuarios` })
      );
    }
  } else if (url == "/participants/count/over18" && method == "GET") {
    //Contar quantos usuarios são maiores de 18
    const over18 = users.filter((user) => user.idade >= 18);
    response.end(
      JSON.stringify({
        message: `Atualmente tem ${over18.length} e eles são \n ${over18}`,
      })
    );
  } else if (url == "/participants/city/most" && method==="GET") {
    //Identificar cidade com maior numero de usuarios
  const contantoCidade = users.reduce((acc,participants)=>{
    acc[participants.cidade] = (acc[participants.cidade] || 0)+1 
    return acc
  },{})     
  console.log(contantoCidade)
  // console.log(Object.entries(contantoCidade))
  let quantidadeDeParticipantes = 0 
  let cidadeComMaiorNumeroDeParticipantes = ''
  Object.entries(contantoCidade).forEach((city,count)=>{
    if(count>quantidadeDeParticipantes){
      quantidadeDeParticipantes = count
      cidadeComMaiorNumeroDeParticipantes = city
    }
  })
  response.setHeader('Content-Type','application/json')
  response.stringify({"Quantidade total de participantes":quantidadeDeParticipantes, "Cidade com o maior numero de participante":cidadeComMaiorNumeroDeParticipantes7})
  response.end()
  }
   else if (url.startsWith("/participants/") && method === "GET") {
    //Buscar usuario especifico (pelo ID)
    const id = url.split("/")[2];
    const user = users.find((element) => element.id == id);
    if (user) {
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(user));
    } else {
      // error porque user nao é true
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(
        JSON.stringify({ message: "Erro ao tentar buscar esse usuario" })
      );
    }
  } else if (url.startsWith("/participants/") && method === "PUT") {
    // atualizar as informações de usuario específico (pelo ID)
    const id = url.split("/")[2];
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      const updateUser = JSON.parse(body);
      const index = users.findIndex((user) => user.id == id);
      if (
        index !== -1 &&
        updateUser.idade >= 16 &&
        updateUser.password == updateUser.VerificaPassword &&
        updateUser.password == users[index].password && users[index].idade == updateUser.idade
      ) {
        // se for =-1 é porque deu erro e faz a validação se a idade é menor
        users[index] = { ...users[index], updateUser };
        response.end(JSON.stringify(users[index]));
      } else {
        // erro
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({
            message: "Erro, não foi possivel atualizar o usuario'",
          })
        );
      }
    });
  } else if (url.startsWith("/participants/") && method === "DELETE") {
    // Deletar usuario especifico (pelo ID)
    const id = url.split("/")[2];
    const index = users.findIndex((user) => user.id == id);
    if (index !== -1) {
      users.splice(index, 1);
      response.end(JSON.stringify(users));
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "erro ao deletar esse usuario" }));
    }
  } 
   else {
    //Recurso não encontrado
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end;
    JSON.stringify({ message: "Pagina não encontrada" });
  }
});

server.listen(PORT, () => {
  console.log(`servidor on port ${PORT}`);
});
