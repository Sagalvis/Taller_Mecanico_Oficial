import { useState } from "react";
import {
  ContainerLogoName,
  ContainerPerfilName,
  ContainerSearch,
  DividerSidebar,
  ImgP,
  LinkContainer,
  LinkIcon,
  LinkLabel,
  Logo1,
  Logo2,
  NameP,
  NavLink,
  Navbar1,
  Navbar2,
  Perfil,
  Search,
  SearchIcon,
  SidebarButton,
  SidebarContainer,
} from "./styledSidebar";
import { AiOutlineLeft } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/slider/LOGO-PAGE.png";
import logo2 from "../../../assets/slider/LOGO-SIDEBAR.png";
import perfil1 from "../../../assets/img/Perfil.png";
const Sidebard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
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
        <SearchIcon style={{width:"70px", borderRadius:"10px"}}>
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
            placeholder="Search..."
          />
        </Search>
      );
    }
  };
  const PerfilFuntion = () => {
    if (!sidebarOpen) {
      return (
        <Perfil style={{width:"80px", height:"80px"}}>
          <ImgP src={perfil1} alt="perfil" />
        </Perfil>
      )
    } else {
      return (
        <>
          <Perfil>
            <ImgP src={perfil1} alt="perfil" />
          </Perfil>
          <NameP> Admin</NameP>
          <NameP>Sergio Andrés Galvis Smith</NameP>
        </>
      );
    }
  };
  return (
    <SidebarContainer $isopen={sidebarOpen}>
      <SidebarButton
        $isopen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <AiOutlineLeft />
      </SidebarButton>
      <ContainerLogoName style={!sidebarOpen ? { width: `auto` } : {}}>
        <LogosFuntion />
      </ContainerLogoName>

      <DividerSidebar />

      <ContainerPerfilName>
        <PerfilFuntion/>
      </ContainerPerfilName>
      <ContainerSearch
        style={!sidebarOpen ? { width: `auto`} : {}}
        onClick={searchClickHandler}
      >
        <SearchFuntion />
      </ContainerSearch>

      <DividerSidebar />

      {Navbar1.map(({ id, label, icon, to }) => (
        <LinkContainer key={id} $isactive={pathname === to} style={!sidebarOpen ? { width: `80%`} : {}}>
          <NavLink to={to} style={!sidebarOpen ? { display:"flex",justifyContent:"center" } : {}}>
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
        <LinkContainer key={id} $isactive={pathname === to} style={!sidebarOpen ? { width: `80%`} : {}}>
          <NavLink to={to} style={!sidebarOpen ? { marginLeft:"15px" } : {}}>
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
