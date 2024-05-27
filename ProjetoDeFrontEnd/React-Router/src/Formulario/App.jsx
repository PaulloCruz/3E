import React from "react"

const App = () => {
  const [userName, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const validationField = (value) => {
    if (value == "") {
      setError("campo inválido!")
      return false 
    } else {
      setError(null)
      return true
    }
  }

  const validedFields = (err, ...values) => {
    const allValues = values.some(e => e !== "")
    console.log(err, allValues)
    if (err != null && allValues == false) {
      setError("preencha todos os campos corretamente")
      return false
    } else {
      setError(null)
      return true
    }
  }
  
  return (
    <form onSubmit={(Event) => { 
      Event.preventDefault()
      validedFields(error, userName)
    }} className="forms" action="">
      <label htmlFor="userName">Nome:</label>
      <input type="text" id="userName" placeholder="Digite seu nome" onBlur={({target}) => validationField(target.value)} value={userName} onChange={({ target }) => setUserName(target.value)} />
      <label htmlFor="password">Senha:</label>
      <input type="text" id="password" placeholder="Digite sua senha" onBlur={({target}) => validationField(target.value)} value={password} onChange={({ target }) => setPassword(target.value)} />
      {error && <span>{error}</span>}
      <button>Enviar</button>
    </form>
  )
}

export default App
