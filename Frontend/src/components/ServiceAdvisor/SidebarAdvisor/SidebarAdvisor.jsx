import { useState } from "react";
import {
  ContainerSidebarAdvisor,
  LogoAdvisor,
  LogoAdvisor1,
  LogoAdvisor2,
  SidebarButtonAdvisor,
  ContainerPerfilAdvisor,
  PerfilImg,
  PerfilName,
  PefiLAdvisor,
  NavbarAdvisor1,
  NavContainer,
  NavLink,
  NavIcon,
  NavLabel,
  ContainerNav,
  ContainerNav2,
  ContainerLogo,
  ContainerPerfilNavbar,
} from "./styledSidebarAdvisor";
import { AiOutlineLeft } from "react-icons/ai";
import LogoCarro from "../../../assets/svg/transforCars(carro).svg";
import Logodash from "../../../assets/svg/transforCars.svg";
import perfil1 from "../../../assets/img/Perfil.png";
import { useLocation } from "react-router-dom";

const SidebarAdvisor = () => {
  const [sideAdvisorOpne, setSideAdvisorOpne] = useState(true);
  const { pathname } = useLocation();

  const LogosFuntion = () => {
    if (!sideAdvisorOpne) {
      return <LogoAdvisor2 src={LogoCarro} alt="logo2" />;
    } else {
      return <LogoAdvisor1 src={Logodash} alt="logo1" />;
    }
  };

  const PerfilFuntion = () => {
    if (!sideAdvisorOpne) {
      return (
        <PefiLAdvisor $isopen={sideAdvisorOpne} >
          <PerfilImg src={perfil1} alt="perfil" />
        </PefiLAdvisor>
      );
    } else {
      return (
        <>
          <PefiLAdvisor>
            <PerfilImg src={perfil1} alt="perfil" />
          </PefiLAdvisor>
          <PerfilName> Registro</PerfilName>
          <PerfilName>Roy Polo Duarte</PerfilName>
        </>
      );
    }
  };

  const NavFuntion = () => {
    if(!sideAdvisorOpne){
      return(
        NavbarAdvisor1.map(({ id, icon, to }) => {
          if (id !== 5) {
            return (
              <NavContainer key={id} $isasctive={pathname === to}>
                <NavLink to={to} style={!sideAdvisorOpne ?{ display:"flex", justifyContent:"center"}: {}}>
                  <NavIcon>{icon}</NavIcon>
                </NavLink>
              </NavContainer>
            );
          }
        })
      )
    }else{
      return (
        NavbarAdvisor1.map(({ id, label, icon, to }) => {
          if (id !== 5) {
            return (
              <NavContainer key={id} $isasctive={pathname === to}>
                <NavLink to={to}>
                  <NavIcon>{icon}</NavIcon>
                  {SidebarAdvisor && (
                    <>
                      <NavLabel>{label}</NavLabel>
                    </>
                  )}
                </NavLink>
              </NavContainer>
            );
          }
        })
      )
    }
  }
  return (
    <ContainerSidebarAdvisor $isopen={sideAdvisorOpne}>
      <SidebarButtonAdvisor
        $isopen={sideAdvisorOpne}
        onClick={() => setSideAdvisorOpne(!sideAdvisorOpne)}
      >
        <AiOutlineLeft />
      </SidebarButtonAdvisor>
      <ContainerLogo>
        <LogoAdvisor>
          <LogosFuntion />
        </LogoAdvisor>
      </ContainerLogo>

      <ContainerPerfilNavbar>
        <ContainerPerfilAdvisor>
          <PerfilFuntion />
        </ContainerPerfilAdvisor>

        <ContainerNav>
          <NavFuntion/>
        </ContainerNav>
      </ContainerPerfilNavbar>

      <ContainerNav2>
        {NavbarAdvisor1.map(({ id, label, icon, to }) => {
          if (id === 5) {
            return (
              <NavContainer key={id} $isasctive={pathname === to}>
                <NavLink to={to}>
                  <NavIcon>{icon}</NavIcon>
                  {SidebarAdvisor && (
                    <>
                      <NavLabel>{label}</NavLabel>
                    </>
                  )}
                </NavLink>
              </NavContainer>
            );
          }
        })}
      </ContainerNav2>
    </ContainerSidebarAdvisor>
  );
};

export default SidebarAdvisor;
