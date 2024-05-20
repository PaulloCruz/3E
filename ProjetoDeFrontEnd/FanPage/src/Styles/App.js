import { styled } from "styled-components";

const cores = {
    Black:"hsl(0,0%,0%)",
    White:"hsl(0,0%,100%)"
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
  background:${cores.Black};
  color:${cores.White}
`;

export const DivLogo = styled.div`
display:flex;
align-items:center
`;
