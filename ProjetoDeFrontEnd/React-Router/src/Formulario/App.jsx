import React from "react"

const App = ()=>{

    const [cep, setCep] = React.useState()
    const [error, setError]= React.useState(null)
cd 

    function validaCep(value){
        event.preventDefault()
        if(value === undefined){
            setError("O campo não pode está vazio!")
            return false
        }
        else{
            setError(null)
            return true
        }
    }
    return(
        <form onSubmit={validaCep}>
            <label htmlFor="cep">CEP</label>
            <input 
            type="text"
            id="cep"
            value={cep}
            onBlur={handleBlur}
            onChange={({target})=> setCep(target.value)}
            
            />
            <button>Enviar  </button>
        </form>
    )

}

export default App