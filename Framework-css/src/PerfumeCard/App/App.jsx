import { Container,Imagem, Produto, } from "./Styles/App";
import ImagemPerfume from "../images/image-product-desktop.jpg"

const App = ()=>{
    return(
        <Container>
            <Imagem src={ImagemPerfume} />
            <Produto />
            
        </Container>
    )
}

export default App