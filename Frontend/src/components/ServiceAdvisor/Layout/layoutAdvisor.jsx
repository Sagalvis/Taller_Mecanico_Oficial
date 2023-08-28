/* eslint-disable react/prop-types */

import { ContainerLayoutAdvisor, ContainerPagesAdvisor } from "./styledLayoutAdvisor";


const LayoutAdvisor = ({children}) => {
  return ( 
    <ContainerLayoutAdvisor>

      <ContainerPagesAdvisor>{children}</ContainerPagesAdvisor>
    </ContainerLayoutAdvisor>
  );
}

export default LayoutAdvisor;