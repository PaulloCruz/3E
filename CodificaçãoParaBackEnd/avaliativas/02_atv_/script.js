const numeros = [];

const inNumero = document.getElementById("inNumero");

const btnAdicionar = document.getElementById("btnAdicionar");
const btnVerificaOrdem = document.getElementById("btnVerificaOrdem");

const outNumeros = document.getElementById("outNumeros");
const outResposta = document.getElementById("outResposta");

const adicionarNumero = () => {
  const numero = Number(inNumero.value);
  if (numero === 0 || isNaN(numero)) {
    alert("Número Invalido");
    return;
  }
  const numeroIgual = numero.includes(numero);
  if (!numeroIgual) {
    numeros.push(numero);
  }
  else{
    alert('Numero repetido')
    inNumero.value =''
}
  outNumeros.textContent = `${nuemros.join(", ")}`;
  inNumero.value;
};
btnAdicionar.addEventListener = () => {
    const verificaOrdem = ()=> {
        if(numeros.length ===0)
        alert('nao existe elementos no array de numeros')
        return
    
    }
    const verificaArray = numeros.every((numero,indexedDB)=>{
        if(index === numeros.lenght - 1){
            return true
        }
        return numero < numeros[index+1]
    })
    if(verificaArray){
    outResposta.textContent = `asdd`
    }
    else{
        outResposta.textContent = `não estão em ordem crescente`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   `
    }
}
