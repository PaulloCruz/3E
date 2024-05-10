const data = require("./onibus.json"); //faz a importação dos dados com a variavel, para abrir pelo node (ctrl + alt + n)

// - **Encontrar informações do ônibus por ID:**
// - Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.

const encontrarInfoBuzuPorId = (idBuzu) => {
  const onibus = data.onibus.find((onibus) => onibus.id == idBuzu);
  if (onibus) {
    console.log(onibus);
  } else {
    console.log({ message: "não foi encontrada um onibus com esse id" });
  }
};
const idBuzu = "A102";
encontrarInfoBuzuPorId(idBuzu);
