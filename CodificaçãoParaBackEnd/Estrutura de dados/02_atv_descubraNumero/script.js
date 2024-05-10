
const btnApostar = document.getElementById("btnApostar");
const btnJogar = document.getElementById("btnJogar");
const divDica = document.getElementById("outDica ");
let tentativas = [];

btnApostar.addEventListener("click", () => {

  // entrada
  const numero = document.getElementById("inNumero").value;
  const numeroSorteado = Math.floor(Math.random() * 100);
 
  // saida
  const divErros = document.getElementById("outErros");
  const divChance = document.getElementById("outChances");
  const divDica = document.getElementById("outDica");
  let chances = 6
if(chances>0){
  if (numero == numeroSorteado){
    alert("Voce acertou, parabueins");
    btnApostar.disabled = true

  } else if (numeroSorteado > numero) {
    divDica.innerHTML = `Dica é um numero maior que ${numero} `;

    tentativas.unshift(numero);
    console.log(chances)
    divErros.textContent = `${tentativas}`;
    divChance.innerHTML = ` ${chances}`
    chances = chances -1

  } else if (numeroSorteado < numero) {
    divDica.innerHTML = `Dica é um numero numero menor que ${numero}`

    divChance.innerHTML = `${chances}`
    tentativas.unshift(numero);
    divErros.textContent = `${tentativas}`; 
   chances = chances-1
  }
  }
  if (chances==0) {
    alert('suas chances acabaram')
    btnApostar.disabled = true
  }
});








