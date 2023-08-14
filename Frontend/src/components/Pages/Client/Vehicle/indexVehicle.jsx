import {ContainerVehicle} from "./styledVehicle"
import Header from "../../../Header/indexHeader"
import Footer from "../../../Footer/indexFooter"

const Vehicle = () => {
  return ( 
    <div>
      <Header/>
      <ContainerVehicle>
        <h1>Vehicle</h1>
      </ContainerVehicle>
      <Footer/>
    </div>
  );
}

export default Vehicle;