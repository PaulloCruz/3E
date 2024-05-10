const http = require("node:http");
const url = require("node:url");
const PORT = 3333;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "content-Type": "text/plan" });
    response.end("Pagina Inicial");
  } else if (request.url === "/sobre") {
    response.writeHead(200, { "content-Type": "text/plan" });
    response.end("Pagina Sobre");
  } else {
    response.writeHead(404, { "content-Type": "text/plan" });
    response.end("Pagina não encontrada")
  }
});

server.listen(PORT, () => {
  console.log("servidor on PORT" + PORT,"✌️");
});
