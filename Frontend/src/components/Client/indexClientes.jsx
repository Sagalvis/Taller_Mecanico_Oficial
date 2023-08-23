import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
import { ContainSer, ContainService, Containabout } from "./styles/StyledIndex";
import mecGeneral from "../../assets/slider/mecanica-general.jpg";
import paint from "../../assets/slider/pintura.jpg";
import electric from "../../assets/slider/electrico.jpg";
import otro from "../../assets/slider/otro.png";
import aire from "../../assets/slider/aire_acondicionado.png";
import lamina from "../../assets/slider/lamina.jpg";
import Footer from "./Footer";
import { AquiPAbout, Aquih1 } from "./styles/StyledInfoUsPage";
import InfoUsPage, { InfoUsPage2 } from "./InfoUs";
import mision from "../../assets/slider/mision.jpg";
import vision from "../../assets/slider/mision.jpg";
import { useRef } from "react";

const HomeClient = () => {
  // funcion scroll
  const elementRefs = {
    aboutus: useRef(null),
    services: useRef(null),
    // Agrega más referencias según tus necesidades
  };
/* 
  const scrollToElement = (elementId) => {
    if (elementRefs[elementId].current) {
      elementRefs[elementId].current.scrollIntoView({
        behavior: "smooth", // Opcional: para un desplazamiento suave
      });
    }
  }; */

  return (
    <>
      <Navbar />
      <Slider />

      <ContainSer ref={elementRefs.aboutus}>
        <Aquih1>Servicios</Aquih1>
      </ContainSer>

      <ContainService id="Servicios">
        <Services img={paint}
        type="Pintura" />
        <Services img={lamina}
        type="Lamina" />
        <Services img={electric}
        type="Electrico" />
        <Services img={aire}
        type="Aire acondicionado" />
        <Services img={mecGeneral}
        type="Mecanica General" />
        <Services img={otro}
        type="Otro" />
      </ContainService>

      <Containabout ref={elementRefs.services}>
        <Aquih1>Acerca de nosotros</Aquih1>
        <AquiPAbout>
          Nuestro objetivo es brindar un servicio excepcional a nuestros
          clientes, asegurándonos de que sus automóviles reciban el cuidado y la
          atención que merecen. Contamos con un equipo de mecánicos altamente
          capacitados y utilizamos equipos de última generación para
          diagnosticar y reparar cualquier problema que pueda surgir en tu
          vehículo. Además de nuestros servicios de reparación y mantenimiento,
          también ofrecemos asesoramiento y recomendaciones personalizadas para
          maximizar el rendimiento y la durabilidad de tu automóvil. Nos
          esforzamos por establecer relaciones de confianza con nuestros
          clientes, brindando un servicio transparente y honesto en todo
          momento.<br /><br /> En Transfor CARS, nos enorgullece ser líderes en la
          industria de la mecánica automotriz. Nos comprometemos a superar las
          expectativas de nuestros clientes y garantizar su satisfacción total.
          Confía en nosotros para mantener tu vehículo en perfecto estado y
          disfrutar de un viaje seguro y sin problemas. <strong>¡Contáctanos hoy mismo!</strong> y
          descubre por qué somos la elección preferida de muchos conductores
          para sus necesidades de mecánica automotriz!
        </AquiPAbout>
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

      <Footer
        titleCompany="About Company"
        textCompany="En Transfor CARS, somos un equipo apasionado de expertos en mecánica automotriz. Con años de experiencia en el sector, nos enorgullece ofrecer servicios de alta calidad y soluciones confiables para mantener tu vehículo en óptimas condiciones..."
        titleHelp="Help and advice"
        titleAbout="About us"
        titleContact="Contact Us"
        Copyright="Copyright &copy; 2023 Transfor CARS. All Rights"
      />
    </>
  );
};

export default HomeClient;
