// modulo externo
const minimist = require("minimist");

// modulo interno
const soma = require("./soma").soma

const args = minimist(process.argv.splite(2))
const a = args[numeros1]
const b = args[numero2]
// node server.js --numero1=10 --numero2=20
console.log(`a soma é ${a}+ ${b} = ${soma(a,b)}`)



