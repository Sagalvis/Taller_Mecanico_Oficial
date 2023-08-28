import { useState } from "react";
import { ContainerSidebarAdvisor, SidebarButtonAdvisor } from "./styledSidebarAdvisor";
import { AiOutlineLeft } from "react-icons/ai";




const SidebarAdvisor = () => {
const [sideAdvisorOpne, setSideAdvisorOpne ] = useState(false)

  return ( 
    <ContainerSidebarAdvisor $isopen={sideAdvisorOpne}>
      <SidebarButtonAdvisor $isopen={sideAdvisorOpne}
      onClick={()=>setSideAdvisorOpne(!sideAdvisorOpne)}>
        <AiOutlineLeft />
      </SidebarButtonAdvisor>
    </ContainerSidebarAdvisor>
  );
}

export default SidebarAdvisor;