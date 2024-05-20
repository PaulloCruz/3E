//Trabalhando com imagens
//caminho de onde a imagem está na aplicação - PATH
//1º - Colocar a imagem em uma pasta na raiz projeto - Não paga
//2º - Contra serviços (API's) para adicionar imagem - Custo Alto
import { createServer } from "node:http";
import { writeFile, readFile, rename } from "node:fs";

import { v4 as uuidv4 } from "uuid";

import lerDadosUsuarios from "./lerDadosUsuarios.js";

const PORT = 3333;

//import e export

const server = createServer(async (request, response) => {
  const { method, url } = request;

  if (method === "POST" && url === "/usuarios") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      const novoUsuario = JSON.parse(body);
      //Validações do dados vindo do body
      lerDadosUsuarios((err, usuarios) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(
            JSON.stringify({ message: "Não possível ler o arquivo" })
          );
          return;
        }

        novoUsuario.id = uuidv4();

        const verificaSeEmailExiste = usuarios.find(
          (usuario) => usuario.email === novoUsuario.email
        );

        if (verificaSeEmailExiste) {
          response.writeHead(400, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ message: "Email já está em uso" }));
          return;
        }

        usuarios.push(novoUsuario);

        writeFile("pessoas.json", JSON.stringify(usuarios, null, 2), (err) => {
          if (err) {
            response.writeHead(500, { "Content-Type": "application/json" });
            response.end(
              JSON.stringify({ message: "Não cadastrar os dados no arquivo" })
            );
            return;
          }
          response.writeHead(201, { "Content-Type": "application/json" });
          response.end(JSON.stringify(novoUsuario));
        });
      });
    });
  } 
});

server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}`);
});
