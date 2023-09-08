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
  InputProduct,
  OrderContain,
  TextArea,
  ThisLogo,
  TitleProduct,
  TittleInfo,
} from "./styles/styledOrder";

import { useState } from "react";

const OrderService = () => {
  /* estado inicial para los inputs */
  const [inputs, setInputs] = useState([{ type: "text", value: "" }]);

  /* función que maneje la adición de un nuevo input
  Esta función creará un nuevo objeto input y lo añadirá al estado actual */
  const handleAddInput = () => {
    setInputs([...inputs, { type: "text", value: "" }]);
  };

  /* función  eliminará el último input del estado */
  const handleRemoveInput = () => {
    const newInputs = [...inputs];
    newInputs.pop();
    setInputs(newInputs);
  };


  /* Funcion que actualiza el valor del input en el estado: */
  const handleInputChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
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
          <DividierOrderFactura />
          <TittleInfo>ORDEN DE SERVICIO</TittleInfo>

          <ContainInput>
            <Input type="text" placeholder="Cedula" />
            <Input type="text" placeholder="Placa" />
          </ContainInput>

          <ContainTextArea>
            <TextArea placeholder="¿Info mecanico? " rows={6} cols={50} />
          </ContainTextArea>

          <ContainProducts>
            <ContainH2>
              <TitleProduct>PRODUCTOS</TitleProduct>
            </ContainH2>
            <ContainerInputProduct>
              <ContenInput>
                {inputs.map((input, index) => (
                  <InputProduct
                    key={index}
                    type={input.type}
                    value={input.value}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                ))}
              </ContenInput>
              <button onClick={handleAddInput}>Agregar input</button>
              <button onClick={handleRemoveInput}>Eliminar input</button>
            </ContainerInputProduct>
          </ContainProducts>

          <ContainButtons>
            <Button>Realizar cotización</Button>
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
