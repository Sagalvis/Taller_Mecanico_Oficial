import {
  Button,
  MenuIcons,
  NavLogo,
  NavMenuLi,
  NavMenuUl,
  NavbarContent,
} from "./styles/StyledNavbar";
import { Link } from "react-router-dom";
import { MenuOptions } from "./archive/MenuOptions";
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
          {MenuOptions.map((item, i) => {
            return (
              <NavMenuLi key={i}>
                <Link className={item.class} to={item.path}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </NavMenuLi>
            );
          })}
        </NavMenuUl>
        <Button>Sign In</Button>
      </NavbarContent>
    </>
  );
}

export default Navbar;
