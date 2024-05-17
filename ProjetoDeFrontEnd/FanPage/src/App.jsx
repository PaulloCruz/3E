import { BrowserRoute, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Sobre from ".//Components/Sobre";
// O BrowserRoute deve ser o componente que envolve tudo que deende do react-router.
// Router define as áreas em que vamos colocar os nossos route
// Route recebe o caminho em path. se esse caminho for o mesmo do url ele ira renderizar os componente que estiver dentro de element={}

const App = ()=>{
  return(
    <BrowserRoute>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
    </BrowserRoute>
  )
}