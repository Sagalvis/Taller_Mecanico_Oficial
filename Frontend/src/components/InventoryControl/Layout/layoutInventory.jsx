/* eslint-disable react/prop-types */
import SidebardInv from "../SidebarInventory/indexSidebarIn";
import { ContainerLayout, ContainerPages } from "../../Admin/Layout/styledRuter";


const LayoutInventory = ({children}) => {
  return ( 
    <ContainerLayout>
      <SidebardInv/>
      <ContainerPages>{children}</ContainerPages>
    </ContainerLayout>
  );
}

export default LayoutInventory;