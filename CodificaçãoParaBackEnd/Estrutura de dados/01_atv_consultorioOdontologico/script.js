    const btnAdd = document.getElementById('btnAdicionar') 
    const btnUrgencia = document.getElementById('btnUrgencia') 
    const btnAtender = document.getElementById('btnAtender') 
    let lista = []
    let atendendo
    // Adiconando pacientes para fila
    btnAdd.addEventListener('click',()=>{
        const paciente = document.getElementById('inPaciente').value
        lista.push(paciente) // coloca paciente no fim do array
        const divfila = document.getElementById('outList')
        divfila.innerHTML = `${lista.join('\n')}`
    })
    btnUrgencia.addEventListener('click',()=>{
        const paciente = document.getElementById('inPaciente').value
        lista.unshift(paciente) // coloca paciente no inicio do array
        const divfila = document.getElementById('outList')
        divfila.innerHTML = `${lista.join('\n')}`
    })
  
    // Atendimento   
    btnAtender.addEventListener('click',()=>{

        atendendo = lista[0]
        lista.shift()//Excluir no início do array
        const divfila = document.getElementById('outList')
        const divAtendendo = document.getElementById('outAtendimento')
        divfila.innerHTML = `${lista.join('\n')}`
        divAtendendo.innerHTML = `${atendendo}`
    })
        