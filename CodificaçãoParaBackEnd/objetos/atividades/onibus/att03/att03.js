const data = require("./onibus.json"); //faz a importação dos dados com a variavel, para abrir pelo node (ctrl + alt + n)

// // - **Listar todas as paradas de uma linha:**
// //     - Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.

let idLinha = 2; //1 ou 2
// const contarOnibusDisponivelPorLinha = (idLinha, data) => {
//   const linha = data.linhas.find((linha) => linha.id == idLinha);
//   if (linha) {
//     data.linhas.forEach((element, index) => {
//       if (element.id == idLinha) {
//         element.paradas.forEach((elements, index) => {
//           console.log(elements.nome);
//         });
//       }
//     });
//   } else {
//     console.log({ message: "não foi encontrada uma linha" });
//   }
// };

// contarOnibusDisponivelPorLinha(idLinha, data);

// FEITO PELO PROF

const ListarParadasPorLinha = (idlinha) => {
  const linha = data.linhas.find((linha) => linha.id === idlinha);

  if (linha) {
    const paradasOrdenadas = linha.paradas.sort((a, b) => a.ordem - b.ordem);
    return { paradasOrdenadas };
  } else {
    return { message: "paradas não encontradas para a linha solicitada" };
  }
};
console.log(ListarParadasPorLinha(idLinha))