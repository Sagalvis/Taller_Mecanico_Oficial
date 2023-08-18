import {
  Button,
  MenuIcons,
  NavLogo,
  NavMenuUl,
  NavbarContent,
} from "./styles/StyledNavbar";
import { useState } from "react";
import logo from '../../assets/slider/LOGO-PAGE.png'

function Navbar() {
  const [click, setClick] = useState();
  const ChangeClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavbarContent>
        <NavLogo src={logo} alt="image-logo"/>

        <MenuIcons onClick={ () => ChangeClick()}>
          <i className="fas fa-bars"></i>
        </MenuIcons>

        <NavMenuUl click={click}>

        </NavMenuUl>
        <Button>Sign In</Button>
      </NavbarContent>
    </>
  );
}

export default Navbar;
