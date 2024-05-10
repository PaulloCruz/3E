const http = require("node:http");
const fs = require("node:fs");

const PORT = 3333;
// PROTOCOLO
// codigos, metodos, tabalha com a forma de como recebe os arquivos, recebe as infos
// http:localhots:3333/?name=wilton (?name=wilton é chamado query, são valores que etão sendo passados para o arquivo js)

const server = http.createServer((request, response) => {
  const urlInfo = require("node:url").parse(request.url, true); // ta transformando todas as requisições que chegam na url
  const name = urlInfo.query.name;

  if (!name) {
    // o valor de name é colocado em um arquivo de texto pelo fs
    fs.readFile("index.html", (err, data) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    });
  } else {
    const nameNewLine = name+ ',\r\n'
    // writeFile = só escrita
    // appendFile = escreve e junta
    fs.appendFile("arquivo.txt", nameNewLine, (err) => {
      //name é uma variavel mas pode ser um objeto
      response.writeHead(302, {
        Location: "/",
      });
      return response.end();
      // depois que ele escrever no txt ele vai mover o usuario para a pag inical da aplicação
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}`);
});
