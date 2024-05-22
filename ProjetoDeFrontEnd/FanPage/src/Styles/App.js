import { styled } from "styled-components";
import { Link } from "react-router-dom";

const cores = {
    Black:"hsl(0,0%,0%)",
    White:"hsl(0,0%,100%)",
    AzulSecundario: "#acdee1",
    AzulPrincipal: '#17d4dc',
};

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content:space-around;
  align-items:center;
  background:${cores.White};
  box-shadow: 5px 0 30px rgba(0,0,0,.1);
  color:${cores.AzulPrincipal};
`;

export const DivLogo = styled.div`
display:flex;
align-items:center;
`;

export const DivNavItens = styled.div`  
display:flex
justify-content: space-around;
flex-direction:row;

`
export const NavItens = styled(Link)`
text-decoration:none;
display:flex;
align-items:center;
`
