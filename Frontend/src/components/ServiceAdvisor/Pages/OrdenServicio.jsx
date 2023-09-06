import Logo from "../../../assets/svg/transforCars.svg";
import InputAdd from "./archive/OptionsService";
import { useState } from "react"
// import InputAdd from "./archive/OptionsService";

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
  DividierOrderFactura,
  HistoryOrder,
  Info,
  InfoH1,
  InfoP,
  Input,
  OrderContain,
  TextArea,
  ThisLogo,
  TitleH2,
  TittleInfo,
} from "./styles/styledOrder";


/* const OrderService = () => {
  const [identification, setIdentification] = useState('')
  const [matricula, setMatricula] = useState('')
  const [mechanicReport, setMechanitReport] = useState('')

  const actualizacion = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.patch(`http://localhost/products/${identification}/${matricula}`, {
        mechanic_report: mechanicReport,
      });
      console.log(response, 'NO SE ENVIA LA INFORMACION');

      console.log('Actualización exitosa:', response.data);
    } catch (error) {
      console.error('Error al actualizar:', error);
      if (error.response){
        console.error('Respuesta del servidor:', error.response.data)
      }
    }
  };
   */

    const OrderService = () => {
      const [identification, setIdentification] = useState('');
      const [matricula, setMatricula] = useState('');
      const [mechanicReport, setMechanicReport] = useState('');
    
      const actualizacion = async (e) => {
        e.preventDefault();
    
        try {
          // Realizar la solicitud PATCH solo para actualizar mechanic_report
          const response = await axios.patch(`http://localhost:3005/products/${identification}/${matricula}`, {
            mechanic_report: mechanicReport,
          })
          .then((Response)=> {
            console.log(Response.data);
              
          });   
          
        } catch (error) {
          console.error('Error al actualizar:', error);
          if (error.response) {
            console.error('Respuesta del servidor:', error.response.data);
          }
        }
      };

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
          <Input type="text" placeholder="Cedula" onChange={(e) => setIdentification(e.target.value)}/>
          <Input type="text" placeholder="Placa" onChange={(e) => setMatricula(e.target.value.toUpperCase())}/>
          </ContainInput>

          <ContainTextArea>
            <TextArea
              placeholder="¿Info mecanico? "
              rows={6}
              cols={50}
              value={mechanicReport}
              onChange={(e) => setMechanicReport(e.target.value)}
            />
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
            <Button onClick={actualizacion}>Realizar cotización</Button>
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
