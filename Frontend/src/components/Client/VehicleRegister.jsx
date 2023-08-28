import Navbar from "./Navbar";
import {
  ContainInfo,
  ContainRegisters,
  ContainerVReg,
  InfoStatus,
  InfoText,
  InfoVehicle,
  Registers,
  Statustext,
  Title,
} from "./styles/StyledVehicleRegister";

function VehicleRegister() {
  return (
    <>
      <Navbar />
      <ContainerVReg>
        <ContainRegisters>
          <h2>Registros del vehículo</h2>
          <Registers>
            <InfoStatus>
              <Statustext>Estado: En proceso</Statustext>
              <Statustext>Entrada: 28/08/2023</Statustext>
              <Statustext>Salida: 00/00/0000</Statustext>
            </InfoStatus>

            <InfoVehicle>
              <div className="info">
            <ContainInfo>
              <Title>Nombre(s): </Title>
              <InfoText>JOHAN DAVID DÍAZ QUINTERO</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title>Documento: </Title>
              <InfoText>1143168571</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title>Placa: </Title>
              <InfoText>AEP41G</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title>Marca: </Title>
              <InfoText>BOXER</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title>Modelo: </Title>
              <InfoText>CT 102 KS 2022</InfoText>
            </ContainInfo>
            </div>
            
            <ContainInfo>
              <Title>Motivo de ingreso: </Title>
              <InfoText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores possimus ducimus eligendi eos molestiae vitae consequatur adipisci impedit corrupti expedita.</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title>Info mecanico: </Title>
              <InfoText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tenetur.</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title>Mecanico responsable: </Title>
              <InfoText>Sergio Galvis</InfoText>
            </ContainInfo>
            </InfoVehicle>
          </Registers>
        </ContainRegisters>
      </ContainerVReg>
    </>
  );
}

export default VehicleRegister;
