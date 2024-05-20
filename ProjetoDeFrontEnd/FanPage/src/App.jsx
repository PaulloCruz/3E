import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Sobre from "./Components/Sobre";
import Navbar from "./Components/Navbar";
import "./index.css"

// O BrowserRoute deve ser o componente que envolve tudo que deende do react-router.
// Router define as áreas em que vamos colocar os nossos route
// Route recebe o caminho em path. se esse caminho for o mesmo do url ele ira renderizar os componente que estiver dentro de element={}

const App = () => {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
