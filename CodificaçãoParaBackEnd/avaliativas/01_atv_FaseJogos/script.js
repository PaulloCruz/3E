// codigo feito pelo professor

const inClube = document.getElementById('inClube')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnMontar = document.getElementById('btnMontar')
const outLista = document.getElementById('outLista')
const clubes = []
const adicionarClube = ()=>{
    const clube = inClube.value
    if(clube == ''){
        alert('preencha o campo')
        inClube.focus()
        return
    }
    clubes.push(clube)
    console.log(clubes)
    inClube.value=''
    inClube.focus()
}
    btnAdicionar.addEventListener('click',adicionarClube)

const listarClube = ()=>{
    if(clubes.length === 0){
        alert('não existe clubes cadastrados')
    }
    
    let lista = ''
    clubes.forEach((clube,index)=>{
        return lista += `${index+1}.${clube}`
    })
}
    btnListar.addEventListener('click',listarClube)

const montarJogos = ()=>{
    if(clubes.length%2 !=0 || clubes.length === 0){
        alert('não é possvek fazer a tabulação com essa qt. de elementos')
        return
    }

    const metadeInicio = clubes.slice(0,clubes.length/2)
    const metadeFim = clubes.slice(clubes.length/2,clubes.length).reverse()
    let lista = ``
    for(let i =o; i<metadeInicio.length;i++){
        lista+= `${i+1}. ${metadeInicio}X ${metadeFim}`
    }
    outLista.textContent =  lista

    console.log(metadeInicio,clubes)
}
    btnMontar.addEventListener('click',montarJogos)

