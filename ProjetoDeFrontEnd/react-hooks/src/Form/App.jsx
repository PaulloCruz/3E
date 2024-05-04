import Input from "./input"


const App = ()=>{
    const [nome,setNome] = React.useState()
    return(
        <Input
        label="Nome"
        id="nome"
        value={nome}
        setValue={setNome}
        />
        
    )
}

export default App