/* eslint-disable react/prop-types */
import Sidebar from "../Sidebar/indexSidebar";
import { ContainerLayout, ContainerPages } from "./styledRuter";


const Layout = ({children}) => {
  return ( 
    <ContainerLayout>
      <Sidebar/>
      <ContainerPages>{children}</ContainerPages>
      
    </ContainerLayout>
  );
}

export default Layout;