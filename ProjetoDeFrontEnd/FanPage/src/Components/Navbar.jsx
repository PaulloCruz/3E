import { Logo, Navbar, DivLogo } from "../Styles/App";

import LogoImg from '../../images/LogoE3.png'
const NavBar = () => {
  return (
    <>
    <Navbar>
        <DivLogo>
      <Logo src={LogoImg} /> {/* Logo E3 */}
      <h1> E3 AL</h1>
      </DivLogo>
      <p>Seja Sócio E3</p>
      <div className="patrocinadores">JCDN</div> {/* pergunta */}
    </Navbar>
    </>
  );
};

export default NavBar