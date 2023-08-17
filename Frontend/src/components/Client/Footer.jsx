import {
  ContainerFooter,
  Subcontainer,
  FotterTitle,
  ConsulQuote,
  ConsulCall,
  ConsulWhat,
  Quote,
  Call,
  What,
  ContainerTitle,
  ContainerServices,
  SocialMedia,
  ContainerInstagram,
  ContainerFacebook,
  ContainerTwiter,
  MediaContainer,
  ContainerDate,
  Date,
  ContainerInputs,
  Promotion,
  Name,
} from "./styles/StyledFooter";

import {
  BsFileEarmarkSpreadsheetFill,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Subcontainer>
          <ContainerTitle>
            <FotterTitle>
              Revisa tu vehiculo con nuestros talleres mecanicos
            </FotterTitle>
          </ContainerTitle>
          <ConsulQuote>
            <Quote>
              <BsFileEarmarkSpreadsheetFill style={{ color: "white" }} />
              Cotizar servicio
            </Quote>
          </ConsulQuote>
          <ConsulCall>
            <Call>
              <AiOutlinePhone />
              Llamanos
            </Call>
          </ConsulCall>
          <ConsulWhat>
            <What>
              <AiOutlineWhatsApp />
              Escribenos
            </What>
          </ConsulWhat>
        </Subcontainer>
        <ContainerServices>
          <SocialMedia>
            <MediaContainer>
              <ContainerInstagram>
                <BsInstagram />
              </ContainerInstagram>
              <ContainerFacebook>
                <BsFacebook />
              </ContainerFacebook>
              <ContainerTwiter>
                <AiOutlineTwitter />
              </ContainerTwiter>
            </MediaContainer>
          </SocialMedia>
          <ContainerDate>
            <Date>¡Agenda tu cita aqui!</Date>
          </ContainerDate>
          <ContainerInputs></ContainerInputs>
          <Promotion>
            <Name>
              <MdOutlineCopyright /> CARS TRANSFORMATIONS | Diseñado y
              Desarrollado por Fundacion ET
            </Name>
          </Promotion>
        </ContainerServices>
      </ContainerFooter>
    </>
  );
};

export default Footer;
