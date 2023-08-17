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
import ClientRoutes from "./archive/indexCliente.routes";

function Navbar() {
  const [click, setClick] = useState();
  const ChangeClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavbarContent>
        <NavLogo>Transformers</NavLogo>

        <MenuIcons onClick={ () => ChangeClick()}>
          <i className="fas fa-bars"></i>
        </MenuIcons>

        <NavMenuUl click={click}>
          {MenuOptions.map((item, i) => {
            return (
              <ClientRoutes key={i}>
                <NavMenuLi >
                <Link className={item.class} to={item.to}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </NavMenuLi>
              </ClientRoutes>
              
            );
          })}
        </NavMenuUl>
        <Button>Sign In</Button>
      </NavbarContent>
    </>
  );
}

export default Navbar;
