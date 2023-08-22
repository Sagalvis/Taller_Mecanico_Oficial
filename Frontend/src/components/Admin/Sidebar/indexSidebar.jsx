import { useRef, useState } from "react";
import { ContainerLogoName, ContainerSearch, DividerSidebar, LinkContainer, LinkIcon, LinkLabel, NavLink, Navbar1, Navbar2, Search, SearchIcon, SidebarButton, SidebarContainer } from "./styledSidebar";
import { AiOutlineLeft} from "react-icons/ai"
import { useLocation } from "react-router-dom";
const Sidebard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
  return ( 
    <SidebarContainer $isopen={sidebarOpen}>
      <>
        <SidebarButton  $isopen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
          <AiOutlineLeft />
        </SidebarButton>
      </>
        <ContainerLogoName>
        </ContainerLogoName>
        <ContainerSearch style={!sidebarOpen ? { width: `fit-content` } : {}} onClick={searchClickHandler}>
          <Search >
            <SearchIcon>
            <i className="fa-solid fa-magnifying-glass"></i>
            </SearchIcon>
            <input ref={searchRef} placeholder="Aqui va el buscador" style={!sidebarOpen ? { width: 0, padding: 0 } : {}}/>
          </Search>
        </ContainerSearch>
        <DividerSidebar/>
        {Navbar1.map(({id, label, icon, to}) => (
          <LinkContainer key={id} $isactive={pathname === to}>
          <NavLink to= {to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && (
                <>
                  <LinkLabel>{label}</LinkLabel>
                </>
            )}
          </NavLink>
        </LinkContainer>
        ))}
        <DividerSidebar/>
        {Navbar2.map(({id, label, icon, to}) => (
          <LinkContainer key={id} $isactive={pathname === to}>
          <NavLink to= {to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
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
}

export default Sidebard;
