const pessoa = {
    saudação: 'Ola, seus montros',
    falar(){
        console.log(this.saudação)
    }
}
pessoa.falar()

const falar = pessoa.falar
console.log (falar())

// função bind
const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()

function Pessoa(){
    this.idade = 0
    setInterval(function(){
        console.log(this.idade++)
    }.bind(this),1000)
}
    new Pessoa

    // Operador spred e rest => ...
    const arrayOriginal = [1,2,3,4]
    const arrayFake =[...arrayOriginal]
    console.log(arrayFake)

    const array1 = [1,2,3,4]
    const array2 = [5,6,7,8]

    const juntar = [...array1,...array2]

    console.log(juntar)