import Header from "../../Header/indexHeader"
import { ContainerServices } from "./styledService"
import Footer from "../../Footer/indexFooter"

const Services = () => {
  return ( 
    <div>
      <Header/>
      <ContainerServices>
        <h1>Service</h1>
      </ContainerServices>
      <Footer/>
    </div>
  );
}

export default Services;