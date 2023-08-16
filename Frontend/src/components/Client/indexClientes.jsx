import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
import { ContainService } from "./styles/StyledIndex";

const Client = () => {
  return ( 
    <>
    <Navbar />
    <Slider />
    <ContainService>
    <Services
    img=''
    type='Mecanica General'
    />
    <Services
    img=''
    type='Pintura'
    />
    <Services
    img=''
    type='Lamina'
    />
    <Services
    img=''
    type='Electricidas'
    />
    <Services
    img=''
    type='Aire acondicionado'
    />
    </ContainService>
    </>
  );
}

export default Client;