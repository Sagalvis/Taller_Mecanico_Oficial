import { useState } from "react";
import { DividerSidebar,ContainerSidebarAdvisor, LogoAdvisor, LogoAdvisor1, LogoAdvisor2, SidebarButtonAdvisor, ContainerPerfilAdvisor, PerfilImg, PerfilName, PefiLAdvisor, NavbarAdvisor1 } from "./styledSidebarAdvisor";
import { AiOutlineLeft } from "react-icons/ai";
import LogoCarro from "../../../assets/svg/transforCars(carro).svg"
import Logodash from "../../../assets/svg/transforCars.svg"
import perfil1 from "../../../assets/img/Perfil.png";




const SidebarAdvisor = () => {

const [sideAdvisorOpne, setSideAdvisorOpne ] = useState(true);

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
      <PefiLAdvisor style={{width:"80px", height:"80px"}}>
        <PerfilImg src={perfil1} alt="perfil" />
      </PefiLAdvisor>
    )
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

  return ( 
    <ContainerSidebarAdvisor $isopen={sideAdvisorOpne}>
      <SidebarButtonAdvisor $isopen={sideAdvisorOpne}
      onClick={()=>setSideAdvisorOpne(!sideAdvisorOpne)}>
        <AiOutlineLeft />
      </SidebarButtonAdvisor>
      <LogoAdvisor>
        <LogosFuntion/>
      </LogoAdvisor>

      <DividerSidebar/>

      <ContainerPerfilAdvisor>
        <PerfilFuntion/>
      </ContainerPerfilAdvisor>

      <DividerSidebar/>



    </ContainerSidebarAdvisor>
  );
}

export default SidebarAdvisor;