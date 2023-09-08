import Logo from "../../../assets/svg/transforCars.svg";
import axios from "axios";
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
  InputProduct,
  OrderContain,
  TextArea,
  ThisLogo,
  TitleProduct,
  TittleInfo,
} from "./styles/styledOrder";

import { useState, useEffect } from "react";

const OrderService = () => {
  const [identidad, setIdentidad] = useState('');
  const [matricula, setMatricula] = useState('');
  const [mechanic, setMechanic] = useState('');

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const send = await axios.patch(`http://localhost:3005/products/${identidad}/${matricula}`,{ 
         mechanic_report: mechanic
      }
      ).then((response) =>{
        console.log(response.data)
      })

    } catch (error) {
      console.error("Error al actualizar informacion: ", error)
    }
    
  }

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
          <DividierOrderFactura />
          <TittleInfo>ORDEN DE SERVICIO</TittleInfo>

        <ContainInput>
          <Input 
            type="text" 
            placeholder="Cedula" 
            value={identidad} 
            onChange={(e) => setIdentidad(e.target.value)} 
            maxLength={10}
            required
          />
          <Input 
           type="text" 
           placeholder="Placa" 
           value={matricula}
           onChange={(e) => setMatricula(e.target.value).toUpperCase()}
           maxLength={10}
           required
           />
          </ContainInput>

          <ContainTextArea>
            <TextArea 
             type="text" 
             placeholder="¿Info mecanico?" 
             onChange={(e) => setMechanic(e.target.value)} 
             rows={6} 
             cols={50} 
             required
            />
          </ContainTextArea>
          <ContainButtons>
            <Button onClick={sendData}>Realizar cotización</Button>
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
