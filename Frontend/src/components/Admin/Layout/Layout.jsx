/* eslint-disable react/prop-types */
import Sidebar from "../Sidebar/indexSidebar";
import { ContainerLayout, ContainerPages, Dividier } from "./styledRuter";


const Layout = ({children}) => {
  return ( 
    <ContainerLayout>
      <Sidebar/>
      <Dividier/>
      <ContainerPages>{children}</ContainerPages>
    </ContainerLayout>
  );
}

export default Layout;