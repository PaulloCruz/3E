import React from "react";
import "./Form.css"

const Form = () => {
  const [nome, setnome] = React.useState('');
  const [email, setemail] = React.useState('');
  const [senha, setsenha] = React.useState('');
  const [cep, setcep] = React.useState('');
  const [rua, setrua] = React.useState('');
  const [numero, setnumero] = React.useState('');
  const [bairro, setbairro] = React.useState('');
  const [cidade, setcidade] = React.useState('');
  const [estado, setestado] = React.useState('');
  function clickSubmit(event){
    event.preventDefault();
  }
  return (
    <>
    <form onSubmit={clickSubmit}>
      <label htmlFor="nome">nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setnome(event.target.value)}
      />
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />
      <label htmlFor="senha">senha</label>
      <input
        type="text"
        id="senha"
        value={senha}
        onChange={(event) => setsenha(event.target.value)}
      />
      <label htmlFor="cep">cep</label>
      <input
        type="text"
        id="cep"
        value={cep}
        onChange={(event) => setcep(event.target.value)}
      />
      <label htmlFor="rua">rua</label>
      <input
        type="text"
        id="rua"
        value={rua}
        onChange={(event) => setrua(event.target.value)}
      />
      <label htmlFor="numero">numero</label>
      <input
        type="text"
        id="numero"
        value={numero}
        onChange={(event) => setnumero(event.target.value)}
      />
      <label htmlFor="bairro">bairro</label>
      <input
        type="text"
        id="bairro"
        value={bairro}
        onChange={(event) => setbairro(event.target.value)}
      />
      <label htmlFor="cidade">cidade</label>
      <input
        type="text"
        id="cidade"
        value={cidade}
        onChange={(event) => setcidade(event.target.value)}
      />  
      <label htmlFor="estado">estado</label>
      <input
        type="text"
        id="estado"
        value={estado}
        onChange={(event) => setestado(event.target.value)}
      />
      <button>Enviar</button>
    </form>

    <div className="container">
      
      <p><h5>Nome:</h5>{nome}</p>
      <p><h5>email:</h5>{email}</p>
      <p><h5>senha:</h5>{senha}</p>
      <p><h5>Cep:</h5>{cep}</p>
      <p><h5>Rua:</h5>{rua}</p>
      <p><h5>Numero:</h5>{numero}</p>''
      <p><h5>Bairro:</h5>{bairro}</p>
      <p><h5>Cidade:</h5>{cidade}</p>
      <p><h5>Estado:</h5>{estado}</p>
    </div>
    </>
  );
};

export default Form;
