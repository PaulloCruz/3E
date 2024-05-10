
// funções de coletar dados do select
function getCategoria(categoria){
    // console.log(categoria)

    return categoria
}
function getTurno(turno){
    // console.log(turno)
    
    return turno
}

// função btn
function btn(){
    // puxando dados
    
    let categoria = [], turno =[], codigo =[], horas = []

    turno[index] = getTurno(document.getElementById('turno').value) 
    categoria[index] = getCategoria(document.getElementById('categoria').value) 
    codigo[index] = document.getElementById('codigo').value
    horas[index] = document.getElementById('horasMês').value
    


    // dados logica
    const salarioMin = 450
    let valorHora = 0

    // calculo salario
    if(categoria[index]=='G'&& turno[index] == 'N'){
        valorHora = salarioMin * 0.18

        console.log(valorHora)
    }
    else if(categoria[index]=='G'&& turno[index] == "M" || categoria[index] == 'G' && turno[index] == 'V'){
        valorHora = salarioMin * 0.15

        console.log(valorHora)
    }
    if(categoria[index]=='O'&& turno[index] == 'N'){
        valorHora = salarioMin * 0.13

        console.log(valorHora)
    }
    else if(categoria[index]=='O'&& turno[index] == "M" || categoria[index] == 'O' && turno[index] == 'V'){
        valorHora = salarioMin * 0.10

        console.log(valorHora)
    } 
    
        const divFuncionarios = document.getElementById('funcionarios-div')

        const divFuncionario = document.createElement('div')
        divFuncionario.className = 'funcionarios-info'
        
        divFuncionario.innerHTML =`Valor da hora trabalhada = ${valorHora}
        `;

        divFuncionarios.appendChild(divFuncionario);



    console.log(turno[index],categoria[index],codigo,horas)
}
