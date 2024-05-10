const array = []
const vetor = new Array()

console.log(typeof array)
console.log(typeof vetor)

//referencia aos elementos de um array
const produtos = ['Arroz','Feijão','Iogurte']

//Inclusão e exclusão de elementos/items

const estados = ['Alagoas']

estados.push('Recife')//Adiciona no final do array
console.log(estados)

estados.unshift('Bahia')//Adiciona no início do array
console.log(estados)

estados.pop()//Excluir no final do array
console.log(estados)

estados.shift()//Excluir no início do array
console.log(estados)

//Verificar o tamanho/quantidade de itens do array

const numeros = [1,2,3,4,5,6]
console.log(`Tamanho do array: ${numeros.length}`)

//Apresentar dados de um array
const cidades = ['Maceió', 'Rio Largo', 'Marechal']
console.log(`${cidades} \t ${cidades.toString()} \t ${cidades.join(' - ')}`)

// localizar elementos no array
const numero = [1,2,3,4,5,5,6,6,7,7,8,9,0,0]
console.log(numero.indexOf(5))// indice do primeiro elemento
console.log(numero.lastIndexOf()) //indice do ultimo elemento elemento
console.log()