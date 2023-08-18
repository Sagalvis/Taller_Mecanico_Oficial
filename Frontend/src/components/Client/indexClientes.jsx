import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
import { ContainInfo, ContainService, DivContainer } from "./styles/StyledIndex";
import mecGeneral from '../../assets/slider/mecanica-general.jpg'
import paint from '../../assets/slider/pintura.jpg'
import electric from '../../assets/slider/electrico.jpg'
import aire from '../../assets/slider/aire_acondicionado.png'
import lamina from '../../assets/slider/lamina.jpg'
import Footer from "./Footer";
import InfoUsPage from "./us-page/InfoUsPage";


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

    <DivContainer>
    <h1>Acerca de Nosotros</h1>
    </DivContainer>

    <ContainInfo>
    <InfoUsPage 
    title='¿Quienes Somos?'
    text='Somos una empresa dedicada a brindar servicios de reparación mecánica automotriz de alta calidad tanto para vehículos de cuatro ruedas como para motocicletas. Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por la mecánica, con una amplia experiencia en diagnóstico, mantenimiento y reparación de diversos sistemas automotrices. Nos enorgullecemos de ser un centro confiable al que los propietarios de vehículos pueden acudir para obtener soluciones efectivas y eficientes a sus problemas mecánicos.'/>
    
    <InfoUsPage 
    title='Mision'
    text='Nuestra misión es proporcionar a nuestros clientes servicios de reparación mecánica automotriz excepcionales que garanticen la seguridad, confiabilidad y rendimiento óptimo de sus vehículos. Nos esforzamos por ofrecer diagnósticos precisos, soluciones efectivas y un servicio personalizado que exceda las expectativas de nuestros clientes. Buscamos mantenernos a la vanguardia de las últimas tecnologías y técnicas en la industria para brindar soluciones innovadoras y de alta calidad que prolonguen la vida útil de los vehículos de nuestros clientes.'/>

    <InfoUsPage 
    title='Vision'
    text='Nuestra visión es convertirnos en el referente líder en la industria de reparación mecánica automotriz, reconocidos por nuestra excelencia en el servicio al cliente y en la calidad de nuestras reparaciones. Aspiramos a expandir nuestra presencia y establecer múltiples ubicaciones para poder atender a una amplia gama de clientes, desde propietarios de automóviles convencionales hasta entusiastas de las motocicletas. A medida que crecemos, seguimos comprometidos con nuestra pasión por la mecánica y con la búsqueda constante de la mejora continua en todos los aspectos de nuestro negocio.'/>
    </ContainInfo>
    <Footer />
    </>
  );
}

export default Client;