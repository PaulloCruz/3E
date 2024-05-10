const btnValidar = document.getElementById("validar");
const btnLista = document.getElementById("listar");
const btnMontarTabela = document.getElementById("montarTabela");

listaTimes = [];
campeonato = [];

btnValidar.addEventListener("click", () => {
  // entrada
  const jogo = document.getElementById("inJogos").value;

  // adicionar ao array
  listaTimes.push(jogo);
  // validação
  if (!isNaN(jogo) || jogo == "") {
    alert(
      "Algo deu errado tente novamente, Verifique os dados de entrada inseridos"
    );
    listaTimes.pop();
  } else {
    alert("adicionado");
  }
});

// listar times
btnLista.addEventListener("click", () => {
  const divListar = document.getElementById("outTabela");
  divListar.textContent = "";
  listaTimes.forEach((times, index) => {
    console.log(times);
    divListar.textContent += `Time= ${listaTimes[index]} \n`;
  });
});

// montar tabela
btnMontarTabela.addEventListener("click", () => {
    const repeat = listaTimes.length/2
  for (let index = 0; index < repeat; index++) {    
  
    debugger;
    const divListaCampeonato = document.getElementById("outCampeonato");

    campeonato.push(listaTimes[index]);
    divListaCampeonato.textContent += `${campeonato[index]} x `;
    let invertido = [];
    invertido = listaTimes.reverse();
    campeonato.push(invertido[index]);
    divListaCampeonato.textContent += `${invertido[index]} \n`;
    console.log(listaTimes.reverse());
  }
  });
