import { useRef, useState } from "react";
import {
  ContainerLogoName,
  ContainerSearch,
  DividerSidebar,
  LinkContainer,
  LinkIcon,
  LinkLabel,
  Logo1,
  Logo2,
  NavLink,
  Navbar1,
  Navbar2,
  Search,
  SearchIcon,
  SidebarButton,
  SidebarContainer,
} from "./styledSidebar";
import { AiOutlineLeft } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/slider/LOGO-PAGE.png";
import logo2 from "../../../assets/slider/LOGO-SIDEBAR.png";
const Sidebard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  const searchRef = useRef(null);
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };
  const LogosFuntion = () => {
    if (!sidebarOpen) {
      return <Logo2 src={logo2} alt="logo2" />;
    } else {
      return <Logo1 src={logo} alt="logo1" />;
    }
  };
  const SearchFuntion = () => {
    if (!sidebarOpen) {
      return (
        <SearchIcon>
          <i className="fa-solid fa-magnifying-glass"></i>
        </SearchIcon>
      );
    } else {
      return (
        <Search>
          <SearchIcon>
            <i className="fa-solid fa-magnifying-glass"></i>
          </SearchIcon>
          <input
            ref={searchRef}
            placeholder="Aqui va el buscador"
            style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
          />
        </Search>
      );
    }
  };
  return (
    <SidebarContainer $isopen={sidebarOpen}>
      <>
        <SidebarButton
          $isopen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SidebarButton>
      </>
      <ContainerLogoName style={!sidebarOpen ? { width: `auto` } : {}}>
        <LogosFuntion />
      </ContainerLogoName>
      <DividerSidebar />
      <ContainerSearch
        style={!sidebarOpen ? { width: `auto` } : {}}
        onClick={searchClickHandler}
      >
        <SearchFuntion/>
      </ContainerSearch>
      <DividerSidebar />
      {Navbar1.map(({ id, label, icon, to }) => (
        <LinkContainer key={id} $isactive={pathname === to}>
          <NavLink to={to} style={!sidebarOpen ? { width: `auto` } : {}}>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && (
              <>
                <LinkLabel>{label}</LinkLabel>
              </>
            )}
          </NavLink>
        </LinkContainer>
      ))}
      <DividerSidebar />
      {Navbar2.map(({ id, label, icon, to }) => (
        <LinkContainer key={id} $isactive={pathname === to}>
          <NavLink to={to} style={!sidebarOpen ? { width: `auto` } : {}}>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && (
              <>
                <LinkLabel>{label}</LinkLabel>
              </>
            )}
          </NavLink>
        </LinkContainer>
      ))}
    </SidebarContainer>
  );
};

export default Sidebard;
