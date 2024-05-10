const http = require("node:http");
const PORT = 4602;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html" });
    response.write("<meta charset=utf8>");

    response.write("<h1>Home Page</h1>");
    response.write("<p>Bem vindo a pagina inical </p>");
    response.end('<h1>Preencha seu nome: </h1> <form method="GET"> <input type="text" name="name" /> <input type="submit" value="Enviar" /> </form>');
  } else if (request.url === "/sobre") {
    response.writeHead(200, {"Content-Type": "text/html" });
    response.write("<meta charset=utf8>");
    
    response.write("<h1>Home Page</h1>");
    response.write("<p>Bem vindo a pagina inical </p>");
    response.end('<h1>Preencha seu nome: </h1> <form method="GET"> <input type="text" name="name" /> <input type="submit" value="Enviar" /> </form>');
  } else {
    response.writeHead(404, {"Content-Type": "text/html" });
    response.write("<p>Página não enconrada</p>");
    response.end('<h1>Preencha seu nome: </h1> <form method="GET"> <input type="text" name="name" /> <input type="submit" value="Enviar" /> </form>');
  }
});
server.listen(PORT, () => {
  console.log(`Servidor on ${PORT}`);
});
