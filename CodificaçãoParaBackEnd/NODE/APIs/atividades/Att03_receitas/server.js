import http, { Server } from "node:http";
import fs from "node:fs";
import { URLSearchParams } from "node:url";

import lerDadosReceitas from "./lerReceitas.js";
import { resolve } from "node:path";
import { ifError } from "node:assert";
import { count } from "node:console";
const PORT = 3333;

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/receitas") {
    lerDadosReceitas((err, receitas) => {
      if (err) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro ao ler os dados" }));
        return;
      }
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(JSON.stringify(receitas));
    }); //função callback da função lerDados
  } else if (method === "POST" && url === "/receitas") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      if (!body) {
        response.writeHead(400, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Corpo da solicitação vazio" }));
        return;
      }
      const novaReceita = JSON.parse(body);
      lerDadosReceitas((err, receitas) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "application" });
          response.end(
            JSON.stringify({ message: "Erro ao cadastrar receita" })
          );
          return;
        }

        novaReceita.id = receitas.length + 1;
        receitas.push(novaReceita);

        fs.writeFile(
          "receitas.json",
          JSON.stringify(receitas, null, 2),
          (err) => {
            if (err) {
              response.writeHead(500, { "Content-Type": "application" });
              response.end(
                JSON.stringify({ message: "Erro ao cadastrar receita" })
              );
              return;
            }
          }
        );
        response.writeHead(201, { "Content-Type": "application/json" });
        response.end(JSON.stringify(novaReceita));
      });
    });
  } else if (method === "PUT" && url.startsWith("/receitas/")) {
    // Funcionalidade: Atualização de Receita
    const id = parseInt(url.split("/")[2]);
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      if (!body) {
        response.writeHead(400, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Corpo da solicitação vazio" }));
        return;
      }

      lerDadosReceitas((err, receitas) => {
        if (err) {
          response.writeHead(500, { "Content-Type": "application" });
          response.end(
            JSON.stringify({ message: "Erro ao cadastrar receita" })
          );
          return;
        }

        const indexReceita = receitas.findIndex(
          (receitas) => receitas.id === id
        );
        console.log(indexReceita);
        response.end();
      });
    });
  } else if (method === "DELETE" && url.startsWith("/receitas/")) {
    response.end(method);
    const id = parseInt(url.split("/")[2]);
    lerDadosReceitas((err, receitas) => {
      // receitas é o resultado da consulta do package.json(receitas.json)
      if (err) {
        // erro de ler os dados
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro ao ler os dados" }));
        return; // serve para parar a execução
      }
    }); // função ler dados recebe uma callback

    const indexReceita = findIndex((receita) => receita.id === id);
    if (indexReceita === -1) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Receita não encontrada" }));
      receitas.splice(indexReceita, 1);
      fs.writeFile(
        //arquivo que vai ler, oq vai escrever no arquivo.
        "receitas.json",
        JSON.stringify(receitas, null, 2),
        (err) => {
          if (err) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(
              JSON.stringify({
                message: "Erro ao deletar da receita do banco de dados",
              })
            );
            return;
          }
          response.writeHead(200, { "Content-Type": "application/json" });
          response.end(JSON.stringify({ message: "Rceita excluida" }));
          return;
        }
      );
    }
  } else if (method === "GET" && url.startsWith("/receitas/")) {
    response.end(method);
  } else if (method === "GET" && url.startsWith("/categorias/")) {
    //localhost:3333/categorias/saladas
    response.end(method);
  } else if (method === "GET" && url.startsWith("/busca")) {
    response.end(method);
  } else if (method === "GET" && url.startsWith("/ingredientes")) {
    const ingrediente = url.split("=")[1];
    // console.log(ingrediente)
    lerDadosReceitas((err, receitas) => {
      // receitas é o resultado da consulta do package.json(receitas.json)
      if (err) {
        // erro de ler os dados
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro ao ler os dados" }));
        return; // serve para parar a execução
      } // função ler dados recebe uma callback
      });
      const resultadoBusca = receitas.filter((receitas)=>
      receitas.nome.includes(termo)||receita.categoria.includes(termo)||receitas.ingredientes.includes(termo
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ))
   } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Pagina não encontrada" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}}`);
});
