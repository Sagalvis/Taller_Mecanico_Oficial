import { useState } from "react";
import {
  ContainNameP,
  ContainNav,
  ContainerButton,
  ContainerPerfilName,
  DividerSidebar,
  Icon1,
  ImgP,
  LinkContainer,
  LinkIcon,
  LinkLabel,
  NameP,
  NavLink,
  Navbar1,
  Navbar2,
  Perfil,
  SidebarButton,
  SidebarContainer,
} from "./styledSidebar";
import { useLocation } from "react-router-dom";
/* import LogoCarro from "../../../assets/svg/transforCars(carro).svg"; */
import perfil1 from "../../../assets/img/Perfil.png";
import { LinkContainerBack } from "../../ServiceAdvisor/SidebarAdvisor/styledSidebarAdvisor";
/* import Logodash from "../../../assets/svg/transforCars.svg"; */
const Sidebard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const PerfilFuntion = () => {
    if (!sidebarOpen) {
      return (
        <Perfil style={{ width: "35px", height: "35px" }}>
          <ImgP src={perfil1} alt="perfil" />
        </Perfil>
      );
    } else {
      return (
        <>
          <Perfil>
            <ImgP src={perfil1} alt="perfil" />
          </Perfil>
          <ContainNameP $isopen={sidebarOpen}>
          <NameP><h3>Sergio Andrés Galvis Smith</h3></NameP>
          <NameP> Admin</NameP>
          </ContainNameP>
        </>
      );
    }
  };
  const ButtonFuntion = () => {
    if (!sidebarOpen) {
      return (
        <>
          <SidebarButton
            $isopen={sidebarOpen}
            onClick={() => setSidebarOpen((p) => !p)}
          >
            <Icon1 className="fa-solid fa-bars"></Icon1>
          </SidebarButton>
        </>
      );
    } else {
      return (
        <>
          <SidebarButton
            $isopen={sidebarOpen}
            onClick={() => setSidebarOpen((p) => !p)}
          >
            <Icon1 className="fa-solid fa-x"></Icon1>
          </SidebarButton>
        </>
      );
    }
  };
  return (
    <SidebarContainer $isopen={sidebarOpen}>
      <ContainerButton $isopen={sidebarOpen}>
        <ButtonFuntion />
      </ContainerButton>

      

      <ContainerPerfilName $isopen={sidebarOpen}>
        <PerfilFuntion />
      </ContainerPerfilName>


      <DividerSidebar />

      <ContainNav>

      {Navbar1.map(({ id, label, icon, to }) => (
        <LinkContainer
        key={id}
        $isactive={pathname === to}
        style={!sidebarOpen ? { width: `80%` } : {}}
        >
          <NavLink
            to={to}
            style={
              !sidebarOpen ? { display: "flex", justifyContent: "flex-start" } : {}
            }
            >
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && (
              <>
                <LinkLabel>{label}</LinkLabel>
              </>
            )}
          </NavLink>
        </LinkContainer>
      ))}
      </ContainNav>

      <DividerSidebar />

<ContainNav style={{height:"10%"}}>


      {Navbar2.map(({ id, label, icon, to }) => (
        <LinkContainerBack
          key={id}
          $isactive={pathname === to}
          style={!sidebarOpen ? { width: `80%` ,border:"none" } : {border:"none"}}
        >
          <NavLink to={to} style={
              !sidebarOpen ? { display: "flex", justifyContent: "flex-start" } : {}
            }>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && (
              <>
                <LinkLabel>{label}</LinkLabel>
              </>
            )}
          </NavLink>
        </LinkContainerBack>
      ))}
      </ContainNav>
    </SidebarContainer>
  );
};

export default Sidebard;
