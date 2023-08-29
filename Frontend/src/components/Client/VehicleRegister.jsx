import Navbar from "./Navbar";
import {
  ContainInfo,
  ContainRegisters,
  ContainerVReg,
  InfoDates,
  InfoStatusContain,
  InfoText,
  InfoVehicle,
  Registers,
  Statustext,

  Title1,
  Title2,
} from "./styles/StyledVehicleRegister";

function VehicleRegister() {
  return (
    <>
      <Navbar />
      <ContainerVReg>
        <ContainRegisters>
          <h2>Registros del vehículo</h2>
          <Registers>

            <InfoStatusContain>
              <InfoDates>
                <Title1>Estado: </Title1>
                <Statustext>[bd]</Statustext>
              </InfoDates>

              <InfoDates>
                <Title1>Entada: </Title1>
                <Statustext>[bd]</Statustext>
              </InfoDates>

              <InfoDates>
                <Title1>Salida: </Title1>
                <Statustext>[bd]</Statustext>
              </InfoDates>
            </InfoStatusContain>

            <InfoVehicle>
              <div className="info">
            <ContainInfo>
              <Title2>Nombre(s): </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Documento: </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Placa: </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Marca: </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Modelo: </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            </div>
            
            <ContainInfo>
              <Title2>Motivo de ingreso: </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Info mecanico: </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Mecanico responsable: </Title2>
              <InfoText>[bd]</InfoText>
            </ContainInfo>
            </InfoVehicle>
          </Registers>
        </ContainRegisters>
      </ContainerVReg>
    </>
  );
}

export default VehicleRegister;
