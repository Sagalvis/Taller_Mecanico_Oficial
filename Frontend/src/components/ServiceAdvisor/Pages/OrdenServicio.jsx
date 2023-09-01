
import Logo from "../../../assets/svg/transforCars.svg";
// import InputAdd from "./archive/OptionsService";

import {  ContainH2, ContainInfo, ContainInput, ContainMain, ContainProducts, ContainTextArea, HistoryOrder, Info, InfoH1, InfoP, Input, OrderContain, TextArea, ThisLogo, TitleH2 } from "./styles/styledOrder";

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
        <hr />
        <ContainTextArea>
        <TextArea placeholder="¿Motivo de ingreso?" rows={6} cols={50}/>
        <TextArea placeholder="¿Info mecanico? (Opcional)" rows={6} cols={50}/>
        </ContainTextArea>

        <ContainProducts>
          <ContainH2>
          <TitleH2>PRODUCTOS</TitleH2>
          </ContainH2>

          <ContainInput>
            <Input type="text"/>
          </ContainInput>
        </ContainProducts>
      </OrderContain>

      <HistoryOrder>
        <></>
      </HistoryOrder>
    </ContainMain>
    </>
  );
};

export default OrderService;
