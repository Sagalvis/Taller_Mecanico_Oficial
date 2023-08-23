import Footer from "./Footer";
import Navbar from "./Navbar";
import { Container1, ContainerMaiV, ContainerVehicle } from "./styles/styledVehicle";

const Vehicle = () => {
  return ( <ContainerMaiV>

    <Navbar/>
    <Container1/>
    <ContainerVehicle>fs</ContainerVehicle>
    <Footer
    titleCompany="About Company"
    textCompany="En Transfor CARS, somos un equipo apasionado de expertos en mecánica automotriz. Con años de experiencia en el sector, nos enorgullece ofrecer servicios de alta calidad y soluciones confiables para mantener tu vehículo en óptimas condiciones..."
    titleHelp="Help and advice"
    titleAbout="About us"
    titleContact="Contact Us"
    Copyright="Copyright &copy; 2023 Transfor CARS. All Rights"
    
    />
  </ContainerMaiV> );
}

export default Vehicle;