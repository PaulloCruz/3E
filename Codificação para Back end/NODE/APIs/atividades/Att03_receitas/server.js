import http from "node:http";
import fs from "node:fs";
import { URLSearchParams } from "node:url";
import { json } from "stream/consumers";

const PORT = 3333;

const server = http.createServer((request, response) => {
  const { method, url } = request;

  // response.setHeader("Access-Control-Allow-Origin", "*");
  // response.setHeader(
  //   "Access-Control-Allow-Origin-Methods",
  //   "GET, POST, PUT, DELETE"
  // );
  // response.setHeader("Access-Control-Allow-Origin-Headers", "Content-Type");

  fs.readFile("receitas.json", "utf-8", (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Erro interno do servidor" }));
      return;
    }
    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
    if (method == "POST" && url === "/receitas") {
      // Funcionalidade: Criação de Receita
      let body = "";
      request.on("data", (chunk) => {
        body += chunk;
      });
      request.on("end", () => {
        fs.readFile("receitas.json", "utf8", (err, data) => {
          if (err) {
            response.writeHead(500, { "Content-Type": "application/json" });
            response.end(
              JSON.stringify({ message: "Erro interno no Servidor" })
            );
            return;
          }
          const jsonData = JSON.parse(data);
          const novaReceita = JSON.parse(body);
          novaReceita.id = jsonData.length + 1;
          jsonData.push(novaReceita);

          fs.writeFile(
            "receitas.json",
            JSON.stringify(jsonData, null, 2),
            (err) => {
              if (err) {
                response.writeHead(500, { "Content-Type": "application/json" });
                response.end(
                  JSON.stringify({ message: "Erro interno no Servidor" })
                );
                return;
              }
              response.writeHead(201, { "Content-Type": "application/json" });
              response.end(JSON.stringify(novaReceita));
            }
          );
        });
      });
    } else if (method == "GET" && url === "/receitas") {
      // Funcionalidade: Listagem de Todas as Receitas
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(jsonData));
    } else if (method == "GET" && url.startsWith("/receitas/")) {
      // Funcionalidade: Detalhes de uma Receita Específica
      const id = parseInt(url.split("/")[2]);
      fs.readFile("receitas.json", "utf8", (err, data) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ message: "Erro interno do servidor" }));
          return;
        }
        const jsonData = JSON.parse(data);
        const indexReceitas = jsonData.findIndex(
          (receitas) => receitas.id === id
        );
        if (indexReceitas === -1) {
          response.writeHead(404, { "Content-Type": "application/json" });
          response.end(
            JSON.stringify({ message: "Funcionario não encontrado" })
          );
          return;
        }
        const ReceitaEncontrada = jsonData[indexReceitas];

        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(ReceitaEncontrada));
      });
    } else if (method == "PUT" && url.startsWith("/receitas/")) {
      // Funcionalidade: Atualização de Receita
      const id = parseInt(url.split("/")[2]);
      let body = "";
      request.on("data", (chunk) => {
        body += chunk;
      });
      request.on("end", () => {
        fs.readFile("receitas.json", "utf8", (err, data) => {
          if (err) {
            response.writeHead(500, { "Content-Type": "application/json" });
            response.end(
              JSON.stringify({ message: "Erro interno do servidor" })
            );
            return;
          }
          const jsonData = JSON.parse(data);
          const indexReceitas = jsonData.findIndex(
            (receita) => receita.id === id
          );
          if (indexReceitas === -1) {
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(json.stringify({ message: "receita não encontrada" }));
            return;
          }
          const ReceitaAtualizada = JSON.parse(body);
          ReceitaAtualizada.id = id;
          jsonData[indexReceitas] = ReceitaAtualizada;
          fs.writeFile(
            "receitas.json",
            JSON.stringify(jsonData, null, 2),
            (err) => {
              if (err)
                response.writeHead(500, { "Content-Type": "application/json" });
              response.end(JSON.stringify(ReceitaAtualizada));
            }
          );
        });
      });
    } else if (method == "DELETE" && url.startsWith("/receitas/")) {
      // Funcionalidade: Exclusão de Receita
      const id = parseInt(url.split("/")[2])
      fs.readFile("receitas.json","utf8",(err,data)=>{
        if (err) {
          response.writeHead(500, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ message: "Erro ao ler o arquivo" }));
          return;
        }
        const jsonData = JSON.parse(data);
        const indexReceitas = jsonData.findIndex(
          (receitas) => receitas.id === id
        );
      })
    } else if (method == "GET" && url === "/categorias") {
      // Funcionalidade: Listagem de Todas as Categorias de Receitas
    } else if (method == "GET" && url.startsWith("/busca/")) {
      // Funcionalidade: Busca de Receitas por Termo
    } else if (method == "GET" && url === "ingredientes") {
      // Funcionalidade: Listagem de Todos os Ingredientes
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Pagina não encontrada" }));
    }
  });
});
server.listen(PORT, () => {
  console.log(`Servidor on PORT: ${PORT}😎`);
});
