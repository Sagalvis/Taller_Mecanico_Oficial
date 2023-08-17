import InfoUs from '../Client/Us/infoUs';
import Navbar from '../Client/Navbar';
import Slider from '../Client/Slider';
import Footer from '../Client/Footer'
import { MainInfo,MainList } from '../Client/styles/StyledInfoUs';

const Advisor = () => {
  return ( 
   <div>
      <Navbar/>
      <Slider/>
      <MainInfo>
          <InfoUs 
          title='¿Quienes Somos'
          text='Somos una empresa dedicada a brindar servicios de reparación mecánica automotriz de alta calidad tanto para vehículos de cuatro ruedas como para motocicletas. Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por la mecánica, con una amplia experiencia en diagnóstico, mantenimiento y reparación de diversos sistemas automotrices. Nos enorgullecemos de ser un centro confiable al que los propietarios de vehículos pueden acudir para obtener soluciones efectivas y eficientes a sus problemas mecánicos.'/>
 
          <InfoUs
          title='Mision'
          text='Nuestra misión es proporcionar a nuestros clientes servicios de reparación mecánica automotriz excepcionales que garanticen la seguridad, confiabilidad y rendimiento óptimo de sus vehículos. Nos esforzamos por ofrecer diagnósticos precisos, soluciones efectivas y un servicio personalizado que exceda las expectativas de nuestros clientes. Buscamos mantenernos a la vanguardia de las últimas tecnologías y técnicas en la industria para brindar soluciones innovadoras y de alta calidad que prolonguen la vida útil de los vehículos de nuestros clientes.'/>

          <InfoUs
          title='Vision'
          text='Nuestra visión es convertirnos en el referente líder en la industria de reparación mecánica automotriz, reconocidos por nuestra excelencia en el servicio al cliente y en la calidad de nuestras reparaciones. Aspiramos a expandir nuestra presencia y establecer múltiples ubicaciones para poder atender a una amplia gama de clientes, desde propietarios de automóviles convencionales hasta entusiastas de las motocicletas. A medida que crecemos, seguimos comprometidos con nuestra pasión por la mecánica y con la búsqueda constante de la mejora continua en todos los aspectos de nuestro negocio.'/>
           <InfoUs
            title='Valores'/>
          <MainList>           
            <InfoUs          
            list='1. Excelencia: Buscamos la excelencia en todo lo que hacemos, desde el servicio al cliente hasta la calidad de nuestras reparaciones.'/>
            <InfoUs
            list='2. Integridad: Actuamos con honestidad y transparencia en todas nuestras interacciones y decisiones.
            '/>
            <InfoUs
            list='3. Profesionalismo: Mantenemos altos estándares de profesionalismo en cada aspecto de nuestro negocio.'/>
            <InfoUs
            list='4. Trabajo en Equipo: Valoramos y fomentamos la colaboración y el trabajo en equipo entre nuestro personal y con nuestros clientes.'/>
            <InfoUs
            list='5. Innovación: Abrazamos la innovación y la evolución constante para mantenernos a la vanguardia de la industria.'/>
            <InfoUs
            list='6. Compromiso: Estamos comprometidos con la satisfacción del cliente y con brindar soluciones duraderas y efectivas.'/> 
   
          </MainList>
      </MainInfo>
          
      <Footer/>
      
    </div>
  );
}

export default Advisor;