import {
  ContainFactura,
  ContainInfor,
  ContainProducts,
  ContainProdutSuma,
  ContainTittlePorductFactura,
  ContainerInfoCliente,
  ContenPorductSuma,
  FacturaContain,
  InfoClient,
  InforP1,
  InputDoc,
  TittleFacturaProduct,
} from "./styles/styledCotizacion";
import {
  ContainInfo,
  DividierOrderFactura,
  Info,
  InfoH1,
  InfoP,
  ThisLogo,
  TittleInfo,
} from "./styles/styledOrder";
import { ContainerRegisterV } from "./styles/styledRegisterV";
import Logo from "../../../assets/svg/transforCars.svg";
import axios from "axios"
import { useState } from "react";
const Cotizacion = () => {
  const [clientName, setClientName] = useState("");
  const [documento, setDocumento] = useState("")
  const getCliiente = async (e) => {
    try {
      const responseClient = await axios.get("http://localhost:3005/getcliente",{
        identification: documento
      })
      setClientName(responseClient.data)
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  }

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }
  return (
    <ContainerRegisterV>
      <ContainFactura>
        <FacturaContain>
          <ContainInfo>
            <ThisLogo src={Logo} />
            <Info>
              <InfoH1>TransforCARS</InfoH1>
              <InfoP>Calle 47 N° 20 - 82 - Cordialidad</InfoP>
              <InfoP>transforcars@mailto.com</InfoP>
              <InfoP>3045264366</InfoP>
              <InfoP>N° Cotizacion: [bd]</InfoP>
            </Info>
          </ContainInfo>

          <DividierOrderFactura />

          <TittleInfo>COTIZACION</TittleInfo>
          <ContainerInfoCliente>
            <InfoClient>
              <ContainInfor>
                <InforP1>ID Cliente:</InforP1>
                <InputDoc
                  type="text"
                  placeholder="Número de documento"
                  onInput={(evt) => acceptNum(evt)}
                  maxLength={15}
                  required
                />
              </ContainInfor>
              <ContainInfor>
                <InforP1>Para:</InforP1>
                <InfoP>[BD] [BD]</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Email:</InforP1>
                <InfoP>[BD]</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Dirección:</InforP1>
                <InfoP>[BD] </InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Telefono:</InforP1>
                <InfoP>[BD] </InfoP>
              </ContainInfor>
            </InfoClient>
            <InfoClient>
              <ContainInfor>
                <InforP1>Placa:</InforP1>
                <InputDoc
                  type="text"
                  placeholder="Número de placa"
                  required
                />
              </ContainInfor>
              <ContainInfor>
                <InforP1>Tipop de vehiculo:</InforP1>
                <InfoP>[BD]</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Vehiculo:</InforP1>
                <InfoP>[BD]</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Tarjeta de propiedad:</InforP1>
                <InfoP>[BD]</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Marca:</InforP1>
                <InfoP>[BD]</InfoP>
              </ContainInfor>
            </InfoClient>
          </ContainerInfoCliente>
          <DividierOrderFactura />
            <ContainProducts>
              <ContainTittlePorductFactura>
                <TittleFacturaProduct>Nombre producto</TittleFacturaProduct>
                <TittleFacturaProduct>Cantidad producto</TittleFacturaProduct>
                <TittleFacturaProduct>Precio unitario</TittleFacturaProduct>
                <TittleFacturaProduct style={{border:"none"}}>Total</TittleFacturaProduct>
              </ContainTittlePorductFactura>
              <ContainProdutSuma>
                <ContenPorductSuma>

                </ContenPorductSuma>
              </ContainProdutSuma>
            </ContainProducts>
        </FacturaContain>
        <FacturaContain>
          <></>
        </FacturaContain>
      </ContainFactura>
    </ContainerRegisterV>
  );
};

export default Cotizacion;
