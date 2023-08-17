import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
import { ContainService } from "./styles/StyledIndex";
import mecGeneral from '../../assets/slider/mecanica-general.jpg'
import paint from '../../assets/slider/pintura.jpg'
import electric from '../../assets/slider/electrico.jpg'
import aire from '../../assets/slider/aire_acondicionado.png'
import lamina from '../../assets/slider/lamina.jpg'




const Client = () => {
  return ( 
    <>
    <Navbar />
    <Slider />
    <ContainService>
    <Services
    img={mecGeneral}
    type='Mecanica General'
    />
    <Services
    img={paint}
    type='Pintura'
    />
    <Services
    img={lamina}
    type='Lamina'
    />
    <Services
    img={electric}
    type='Electricidad'
    />
    <Services
    img={aire}
    type='Aire acondicionado'
    />
    </ContainService>
    </>
  );
}

export default Client;