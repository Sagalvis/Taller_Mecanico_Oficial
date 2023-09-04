import { useState } from "react";
import {
  ContainerSidebarAdvisor,
  LinkContainerBack,
  NavbarAdvisor1,
  NavbarAdvisor2,
} from "./styledSidebarAdvisor";

import perfil1 from "../../../assets/img/Perfil.png";
import { useLocation } from "react-router-dom";
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
  NameP,
  Perfil,
  SidebarButton,
  NavLink,
  LinkLabel,
} from "../../Admin/Sidebar/styledSidebar";

const SidebarAdvisor = () => {
  const [sideAdvisorOpne, setSideAdvisorOpne] = useState(false);
  const { pathname } = useLocation();

  const PerfilFuntion = () => {
    if (!sideAdvisorOpne) {
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
          <ContainNameP $isopen={sideAdvisorOpne}>
            <NameP>
              <h3>Sergio Andrés Galvis Smith</h3>
            </NameP>
            <NameP> Admin</NameP>
          </ContainNameP>
        </>
      );
    }
  };

  const ButtonFuntion = () => {
    if (!sideAdvisorOpne) {
      return (
        <>
          <SidebarButton
            $isopen={sideAdvisorOpne}
            onClick={() => setSideAdvisorOpne((p) => !p)}
          >
            <Icon1 className="fa-solid fa-bars"></Icon1>
          </SidebarButton>
        </>
      );
    } else {
      return (
        <>
          <SidebarButton
            $isopen={sideAdvisorOpne}
            onClick={() => setSideAdvisorOpne((p) => !p)}
          >
            <Icon1 className="fa-solid fa-x"></Icon1>
          </SidebarButton>
        </>
      );
    }
  };
  return (
    <ContainerSidebarAdvisor $isopen={sideAdvisorOpne}>
      <ContainerButton $isopen={sideAdvisorOpne}>
        <ButtonFuntion />
      </ContainerButton>

      <ContainerPerfilName $isopen={sideAdvisorOpne}>
        <PerfilFuntion />
      </ContainerPerfilName>

      <DividerSidebar />

      <ContainNav>
        {NavbarAdvisor1.map(({ id, label, icon, to }) => (
          <LinkContainer
            key={id}
            $isactive={pathname === to}
            style={!sideAdvisorOpne ? { width: `80%` } : {}}
          >
            <NavLink
              to={to}
              style={
                !sideAdvisorOpne
                  ? { display: "flex", justifyContent: "flex-start" }
                  : {}
              }
            >
              <LinkIcon>{icon}</LinkIcon>
              {sideAdvisorOpne && (
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
        {NavbarAdvisor2.map(({ id, label, icon, to }) => (
          <LinkContainerBack
            key={id}
            $isactive={pathname === to}
            style={!sideAdvisorOpne ? { width: `80%` } : {border:"none" }}
          >
            <NavLink
              to={to}
              style={
                !sideAdvisorOpne
                  ? { display: "flex", justifyContent: "flex-start" }
                  : {}
              }
            >
              <LinkIcon>{icon}</LinkIcon>
              {sideAdvisorOpne && (
                <>
                  <LinkLabel>{label}</LinkLabel>
                </>
              )}
            </NavLink>
          </LinkContainerBack>
        ))}
      </ContainNav>
    </ContainerSidebarAdvisor>
  );
};

export default SidebarAdvisor;
