import { ContainerPaint, ContainerText, Imgp, PaintH2, Paintimg, Paintp } from "./styles/StyledPaintService";
import paint from '../../assets/slider/pintura.jpg'


export default function PaintService() {
  return (
    <>
        <ContainerPaint>
          <Paintimg>
            <Imgp src={paint} alt="img" />
          </Paintimg>
          
          <ContainerText>
            <PaintH2>Servicio de pintura</PaintH2>
            <Paintp>Nuestro servicio de pintura profesional transforma y embellece tus espacios con resultados impecables. Contamos con un equipo altamente capacitado y utilizamos productos de alta calidad para garantizar durabilidad y satisfacción. ¡Renueva tus espacios con nosotros!</Paintp>
          </ContainerText>

        </ContainerPaint>

        <ContainerPaint>
          <ContainerText>
            <PaintH2>Servicio de pintura</PaintH2>
            <Paintp>Nuestro servicio de pintura profesional transforma y embellece tus espacios con resultados impecables. Contamos con un equipo altamente capacitado y utilizamos productos de alta calidad para garantizar durabilidad y satisfacción. ¡Renueva tus espacios con nosotros!</Paintp>
          </ContainerText>
          <Paintimg>
            <Imgp src={paint} alt="img" />
          </Paintimg>
          

        </ContainerPaint>
    </>
  );
}

export function LaminateService() {
  return (
    <>
    <ContainerPaint>
          <Paintimg>
            <Imgp src={paint} alt="img" />
          </Paintimg>
          
          <ContainerText>
            <PaintH2>Servicio de pintura</PaintH2>
            <Paintp>Nuestro servicio de pintura profesional transforma y embellece tus espacios con resultados impecables. Contamos con un equipo altamente capacitado y utilizamos productos de alta calidad para garantizar durabilidad y satisfacción. ¡Renueva tus espacios con nosotros!</Paintp>
          </ContainerText>

        </ContainerPaint>
    </>
  )
}