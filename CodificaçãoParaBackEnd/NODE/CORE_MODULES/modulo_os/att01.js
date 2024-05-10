const { Console } = require('node:console')
const os = require('node:os')

const memory = Number(os.totalmem()) / 1000000
function conversorTempo(tempoSegundos){
    const horas = tempoSegundos/3600
    const minutos = (tempoSegundos%3600)/60
    const segundos = ((horas*3600)+(minutos*60))-tempoSegundos
    console.log(tempoSegundos)

    return `${horas.toFixed(0)} horas, ${minutos.toFixed(0)} minutos, ${segundos.toFixed(0)} segundos`
}

console.log(conversorTempo(150701.062))

// console.log('--INFORMAÇÕES DO SISTEMA OPERACIONAL--')
// console.log(`-> Sistema Operacional: ${os.type()}`)
// console.log('-> Arquitetura Operacional',os.arch())
// console.log('--INFORMAÇÕES DO PROCESSADOR')
// console.log('-> Modelo processador:', os.cpus()[0].model)
// console.log('-> Velocidade processador:', os.cpus()[0].speed)
// console.log('-> Identificador processador:', os.cpus()[0].times)
// console.log('--INFORMAÇÕES DE MEMÓRIA')
// console.log('-> Quantidade memoria:',memory,"megabytes")
// console.log('--INFORMAÇÕES DO USUARIO')
// console.log('->Nome do usuário:',os.userInfo().username)
// console.log('->Diretório inicial:',os.userInfo().homedir)
// console.log('--DETALHES DO SISTEMA OPERACIONAL')
// console.log('->Nome do sistema operacional:',os.type())
// console.log('->Versão do sistema operacional:',os.version())
// console.log('->Plataforma do sistema operacional:',os.type())
// console.log('--INFORMAÇÕES ADICIONAIS DO SISTEMA OPERACIONAL')
// // console.log('->Numero IPV4:',os.networkInterfaces())
// // console.log('->',conversorTempo(os.uptime()))

// console.log(os.uptime())

