const { divisao, subtracao } = require('./criei_um_modulo')
const meuModulo = require('./criei_um_modulo')
console.log(meuModulo)

const soma = meuModulo.soma
const quadrado = meuModulo.aoQuadrado
const subtrair = meuModulo.subtracao
const dividir = meuModulo.divisao
const multiplicacao = meuModulo.multiplicacao

soma(2,2)
subtrair(2,2)
quadrado(2)
dividir(2,2)
multiplicacao(2,2)