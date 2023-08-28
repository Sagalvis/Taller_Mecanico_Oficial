import Navbar from "./Navbar";
import Services from "./Services";
import Slider from "./Slider";
import { ContainService, Containabout } from "./styles/StyledIndex";
import mecGeneral from "../../assets/slider/mecanica-general.jpg";
import paint from "../../assets/slider/pintura.jpg";
import electric from "../../assets/slider/electrico.jpg";
import otro from "../../assets/slider/otro.png";
import aire from "../../assets/slider/aire_acondicionado.png";
import lamina from "../../assets/slider/lamina.jpg";
import Footer from "./Footer";
import { AquiPAbout, Aquih1 } from "./styles/StyledInfoUsPage";
import InfoUsPage, { InfoUsPage2 } from "./InfoUs";
import mision from "../../assets/imgaboutus/mision1-01.jpg";
import mision2 from "../../assets/imgaboutus/mision2-01.jpg";
import vision from "../../assets/imgaboutus/vision1-01.jpg";
import vision2 from "../../assets/imgaboutus/vision2-01.jpg";
import { useNavigate } from "react-router-dom";

const HomeClient = () => {

  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <Navbar />
      <Slider />
{/* 
      <ContainSer>
        <Aquih1>Servicios</Aquih1>
      </ContainSer> */}

      <ContainService>
        <div className="services" onClick={() => handleClick('/paint')}>
        <Services img={paint}
        type="serv. de pintura"/>
        </div>

        <div className="services" onClick={() => handleClick('/laminate')}>
        <Services img={lamina}
        type="serv. de laminacion" />
        </div>
        <div className="services" onClick={() => handleClick('/electric')}>
        <Services img={electric}
        type="serv. electrico" />
        </div>
        <div className="services" onClick={() => handleClick('/air-conditioning')}>
        <Services img={aire}
        type="serv. de aire acondicionado" />
        </div>
        <div className="services" onClick={() => handleClick('/general')}>
        <Services img={mecGeneral}
        type="Mecanica General" />
        </div>
        <div className="services" onClick={() => handleClick('/cita')}>
        <Services img={otro}
        type="Otro" />
        </div>
      </ContainService>

      <Containabout>
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
        img2={mision2}
      />

      <InfoUsPage2
        title="Vision"
        text="Nuestra misión es proporcionar a nuestros clientes servicios de reparación mecánica automotriz excepcionales que garanticen la seguridad, confiabilidad y rendimiento óptimo de sus vehículos. Nos esforzamos por ofrecer diagnósticos precisos, soluciones efectivas y un servicio personalizado que exceda las expectativas de nuestros clientes. Buscamos mantenernos a la vanguardia de las últimas tecnologías y técnicas en la industria para brindar soluciones innovadoras y de alta calidad que prolonguen la vida útil de los vehículos de nuestros clientes."
        img1={vision}
        img2={vision2}
      />

      <Footer
        titleCompany="About Company"
        textCompany="En Transfor CARS, somos un equipo apasionado de expertos en mecánica automotriz.Con años de experiencia en el sector, nos enorgullece ofrecer servicios de alta calidad y soluciones confiables para mantener tu vehículo en óptimas condiciones..."
        titleHelp="Help and advice"
        titleAbout="About us"
        titleContact="Contact Us"
        Copyright="Copyright &copy; 2023 Transfor CARS. All Rights"
      />
    </>
  );
};

export default HomeClient;
