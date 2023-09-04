
import Logo from "../../../assets/svg/transforCars.svg";
import InputAdd from "./archive/OptionsService";
// import InputAdd from "./archive/OptionsService";
import OptionsService from './archive/OptionsService';

import {  Button, ContainButtons, ContainH2, ContainInfo, ContainInput, ContainMain, ContainProducts, ContainTextArea, HistoryOrder, Info, InfoH1, InfoP, Input, OrderContain, TextArea, ThisLogo, TitleH2 } from "./styles/styledOrder";

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
        <h2 style={{textAlign: 'center', padding: '1.5rem 0'}}>ORDEN DE SERVICIO</h2>
        <ContainTextArea>
        <TextArea placeholder="¿Motivo de ingreso?" rows={6} cols={50}/>
        <TextArea placeholder="¿Info mecanico? (Opcional)" rows={6} cols={50}/>
        </ContainTextArea>

        <ContainProducts>
          <ContainH2>
          <TitleH2>PRODUCTOS</TitleH2>
          </ContainH2>

          <ContainInput>
            {/* <Input type="text"/>
            <button style={{height: '50%'}}><i className="fa-solid fa-plus"></i></button> */}
            {InputAdd()}
          </ContainInput>
        </ContainProducts>

        <ContainButtons>
        <Button>Realizar pago</Button>
        <Button>Imprimir recibido</Button>
        </ContainButtons>

      </OrderContain>

      <HistoryOrder>
        <></>
      </HistoryOrder>
    </ContainMain>
    </>
  );
};

export default OrderService;
