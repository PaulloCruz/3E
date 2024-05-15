import http, { Server } from "node:http";
import fs from "node:fs";

import lerDadosUsuarios from "./lerUsuario.js";
const PORT = 3333;

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "POST" && url === "/usuarios") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      if (!body) {
        // erro se nao tiver nada no body
        response.writeHead(400, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Corpo da solicitação vazio" }));
        return;
      }
      const novoUsuario = JSON.parse(body);
      lerDadosUsuarios((err, usuarios) => {
        if (err) {
          // erro ao cadastrar usuario
          response.writeHead(500, { "Content-Type": "application" });
          response.end(
            JSON.stringify({ message: "Erro ao cadastrar usuario 1" })
          );
          return;
        }
        const verificaEmail = usuarios.email.includes(novoUsuario.email)
        if(verificaEmail){
            response.writeHead(500, { "Content-Type": "application" });
          response.end(
            JSON.stringify({ message: "Email repetido" })
          );
        }
        novoUsuario.id = usuarios.length + 1;
        usuarios.push(novoUsuario);
        fs.writeFile(
          "usuarios.json",
          JSON.stringify(usuarios, null, 2),
          (err) => {
            if (err) {
              response.writeHead(500, { "Content-Type": "application" });
              response.end(
                JSON.stringify({ message: "Erro ao cadastrar usuario 2" })
              );
              return;
            }
          }
        );
        response.writeHead(201, { "Content-Type": "application/json" });
        response.end(JSON.stringify(novoUsuario));
      });
    });
  }
});
server.listen(PORT, () => {
  console.log(`Server on port ${PORT}}`);
});
