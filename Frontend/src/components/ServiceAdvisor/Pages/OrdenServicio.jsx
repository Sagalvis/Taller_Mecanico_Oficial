import Logo from "../../../assets/svg/transforCars.svg";

import {
  Button,
  ContainButtons,
  ContainH2,
  ContainInfo,
  ContainInput,
  ContainMain,
  ContainProducts,
  ContainTextArea,
  ContainerInputProduct,
  ContenInput,
  DividierOrderFactura,
  HistoryOrder,
  Info,
  InfoH1,
  InfoP,
  Input,
  OrderContain,
  TextArea,
  ThisLogo,
  TitleProduct,
  TittleInfo,
} from "./styles/styledOrder";


    const OrderService = () => {


  return (
    <>
      <ContainMain>
        <OrderContain>
          <ContainInfo>
            <ThisLogo src={Logo} />
            <Info className="info">
              <InfoH1>TransforCARS</InfoH1>
              <InfoP>Calle 47 N° 20 - 82 - Cordialidad</InfoP>
              <InfoP>transforcars@mailto.com</InfoP>
              <InfoP>3045264366</InfoP>
              <InfoP>N° Orden: [bd]</InfoP>
            </Info>
          </ContainInfo>
          <DividierOrderFactura/>
          <TittleInfo >
            ORDEN DE SERVICIO
          </TittleInfo>

          <ContainInput>
          <Input type="text" placeholder="Cedula" />
          <Input type="text" placeholder="Placa" />
          </ContainInput>

          <ContainTextArea>
            <TextArea
              placeholder="¿Info mecanico? "
              rows={6}
              cols={50}
            />
          </ContainTextArea>

          <ContainProducts>
            <ContainH2>
              <TitleProduct>PRODUCTOS</TitleProduct>
            </ContainH2>
            <ContainerInputProduct>
              <ContenInput></ContenInput>
            </ContainerInputProduct>
          </ContainProducts>

          <ContainButtons>
            <Button >Realizar cotización</Button>
          </ContainButtons>
        </OrderContain>

        <HistoryOrder>
          <>dd</>
        </HistoryOrder>
      </ContainMain>
    </>
  );
};

export default OrderService;
