const http = require("node:http");
console.log(http);

const server = http.createServer((request, response) => {
  //recebe: requisição e resposta
  response.write("Ola, meu primeiro servidor HTTP");
  response.end(); //termina a aplicação
});

server.listen("4602",()=>{
    console.log('servidor on PORT 4602 😎')
});
