const data = require('./onibus.json') //faz a importação dos dados com a variavel, para abrir pelo node (ctrl + alt + n)

// - **Verificar disponibilidade de ônibus por linha:**
//     - Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.

// console.log(data.onibus[0].linha)

idLinha = 1

data.onibus.forEach((element,index)=>{ 
    if (element.linha==idLinha) {
        if (element.status=='em operação') {    
            console.log(data.onibus[index])
    }
}
})