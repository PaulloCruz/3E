const data = require("./onibus.json"); //faz a importação dos dados com a variavel, para abrir pelo node (ctrl + alt + n)
// import data from './onibus.json' // mesma coisa so q precisa iniciar o node e etc

//- **Consultar horários de partida e chegada por linha:**
// - Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.

// console.log(data)

// // console.log(data.onibus[1].id)

// if (data.onibus[0].id=='A101') {
//     console.log('aoba')
// }
// else{
//     console.log('não igual')
// }

// const horasBuzu = ()=>{
let idBuzu = 1;
const horarioPorLinha = (idBuzu, data) => {
  const linha = data.linhas.find((linha) => linha.id == idBuzu);
  if (linha) {
    data.linhas.forEach((element, index) => {
      if (data.linhas[index].id == idBuzu) {
        console.log(element.horarios);
      }
    });
  } else {
    console.log({ message: "não foi encontrada uma linha" });
  }
};
horarioPorLinha(idBuzu, data);
