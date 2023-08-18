/* eslint-disable react/prop-types */
import Sidebar from "../Sidebar/indexSidebar";
import { ContainerLayout, ContainerMain } from "./styledRuter";


const Layout = ({children}) => {
  return ( 
    <ContainerLayout>
      <Sidebar/>
      <ContainerMain>{children}</ContainerMain>
    </ContainerLayout>
  );
}

export default Layout;