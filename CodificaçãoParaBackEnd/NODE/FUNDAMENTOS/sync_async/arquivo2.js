const fs = require('fs')

console.log('start')

fs.writeFile('Arquivo2.txt','ola',()=>{
    setTimeout(()=>{
        console.log('arquivo criado')
    },3000)
})