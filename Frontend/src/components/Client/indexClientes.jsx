import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
import { ContainService } from "./styles/StyledIndex";
import mecGeneral from "../../assets/slider/mecanica-general.jpg";
import paint from "../../assets/slider/pintura.jpg";
import electric from "../../assets/slider/electrico.jpg";
import aire from "../../assets/slider/aire_acondicionado.png";
import lamina from "../../assets/slider/lamina.jpg";
import Footer from "./Footer";
import { Aquih1, Containabout } from "./us-page/styles/StyledInfoUsPage";
import InfoUsPage, { InfoUsPage2 } from "./us-page/InfoUsPage";
import mision from "../../assets/slider/mision.jpg";
import vision from "../../assets/slider/mision.jpg";
import { useRef } from "react";

const Client = () => {
  // funcion scroll
  const elementRefs = {
    aboutus: useRef(null),
    services: useRef(null),
    // Agrega más referencias según tus necesidades
  };

  const scrollToElement = (elementId) => {
    if (elementRefs[elementId].current) {
      elementRefs[elementId].current.scrollIntoView({
        behavior: "smooth", // Opcional: para un desplazamiento suave
      });
    }
  };

  return (
    <>
      <Navbar />
      <Slider />

      <Containabout ref={elementRefs.aboutus}>
        <Aquih1>Servicios</Aquih1>
      </Containabout>

      <ContainService id = "Servicios">
        <Services img={mecGeneral} type="Mecanica General" />
        <Services img={paint} type="Pintura" />
        <Services img={lamina} type="Lamina" />
        <Services img={electric} type="Electricidad" />
        <Services img={aire} type="Aire acondicionado" />
      </ContainService>

      <Containabout ref={elementRefs.services}>
        <Aquih1>Acerca de nosotros</Aquih1>
      </Containabout>

      <InfoUsPage
        title="Mision"
        text="Nuestra misión es proporcionar a nuestros clientes servicios de reparación mecánica automotriz excepcionales que garanticen la seguridad, confiabilidad y rendimiento óptimo de sus vehículos. Nos esforzamos por ofrecer diagnósticos precisos, soluciones efectivas y un servicio personalizado que exceda las expectativas de nuestros clientes. Buscamos mantenernos a la vanguardia de las últimas tecnologías y técnicas en la industria para brindar soluciones innovadoras y de alta calidad que prolonguen la vida útil de los vehículos de nuestros clientes."
        img1={mision}
        img2={vision}
      />

      <InfoUsPage2
        title="Vision"
        text="Nuestra misión es proporcionar a nuestros clientes servicios de reparación mecánica automotriz excepcionales que garanticen la seguridad, confiabilidad y rendimiento óptimo de sus vehículos. Nos esforzamos por ofrecer diagnósticos precisos, soluciones efectivas y un servicio personalizado que exceda las expectativas de nuestros clientes. Buscamos mantenernos a la vanguardia de las últimas tecnologías y técnicas en la industria para brindar soluciones innovadoras y de alta calidad que prolonguen la vida útil de los vehículos de nuestros clientes."
        img1={mision}
        img2={vision}
      />

      <Footer />
    </>
  );
};

export default Client;
