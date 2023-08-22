/* eslint-disable react/prop-types */
import { ContainerLayout, ContainerPages } from "../../Admin/Layout/styledRuter";


const LayoutInventory = ({children}) => {
  return ( 
    <ContainerLayout>
      <ContainerPages>{children}</ContainerPages>
    </ContainerLayout>
  );
}

export default LayoutInventory;