import {
  Button,
  MenuIcons,
  NavLogo,
  NavMenuUl,
  NavbarContent,
  NavMenuLi
} from "./styles/StyledNavbar";
import {  MenuOptions} from "./archive/MenuOptions"
import { useState } from "react";
import logo from '../../assets/slider/LOGO-PAGE.png'
import {Link} from "react-router-dom"

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
        {MenuOptions.find((item) => item.id === 7) && (
          <NavMenuLi style={{listStyle:"none"}}>
            <Link className={MenuOptions.find((item) => item.id === 7).class}
              to={MenuOptions.find((item) => item.id === 7).path}
            >
              <Button>{MenuOptions.find((item) => item.id === 7).title}</Button>
            </Link>
          </NavMenuLi>
        )}
      </NavbarContent>
    </>
  );
}

export default Navbar;
