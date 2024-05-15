import fs from  "node:fs"

const lerDadosUsuarios = (callback)=>{ //esse parametro se tranaforma em uma função
    fs.readFile("usuarios.json", "utf8", (err, data) => {
    if(err){
      callback(err)
    }
    try{
      const receitas = JSON.parse(data)
      callback(null, receitas)
    } catch(error){
      callback(error)
    }
  })
  }

export default lerDadosUsuarios