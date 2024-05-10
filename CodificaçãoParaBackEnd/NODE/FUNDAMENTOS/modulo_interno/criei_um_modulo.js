module.exports = {
    soma(a,b){
        console.log(`${a+b}`)
    },
    subtracao(a,b){
        console.log(`${a-b}`)
    },
    divisao(a,b){
        if(b<=0){
            console.log('algo deu errado')
        }
        console.log(`${a/b}`)
    },
    aoQuadrado(a){
        console.log(`${a*a}`)   
    }, 
    multiplicacao(a,b){
        console.log(`${a*b}`)
    }
}
