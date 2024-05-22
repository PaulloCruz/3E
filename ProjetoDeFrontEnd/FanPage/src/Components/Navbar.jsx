import { Logo, Navbar, DivLogo, DivNavItens, NavItens } from "../Styles/App";

import LogoImg from "../../images/LogoE3.png";
const NavBar = () => {
  return (
    <>
      <Navbar>
        <DivLogo>
          <Logo src={LogoImg} /> {/* Logo E3 */}
        </DivLogo>
        <h1> E3 AL</h1>
        <DivNavItens>
          <NavItens to={'/Sobre'}>Sobre</NavItens>
        </DivNavItens>
      </Navbar>
    </>
  );
};

export default NavBar;
