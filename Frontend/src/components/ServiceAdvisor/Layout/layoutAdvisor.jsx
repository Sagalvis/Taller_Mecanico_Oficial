/* eslint-disable react/prop-types */

import { ContainerLayoutAdvisor, ContainerPagesAdvisor } from "./styledLayoutAdvisor";
import SidebarAdvisor from "../SidebarAdvisor/SidebarAdvisor"


const LayoutAdvisor = ({children}) => {
  return ( 
    <ContainerLayoutAdvisor>
      <SidebarAdvisor/>
      <ContainerPagesAdvisor>{children}</ContainerPagesAdvisor>
    </ContainerLayoutAdvisor>
  );
}

export default LayoutAdvisor;