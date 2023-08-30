import Navbar from "./Navbar";
import {
  ContainInfo,
  ContainRegisters,
  ContainerVReg,
  InfoDates,
  InfoStatusContain,
  InfoText,
  InfoText2,
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
                <Statustext>[t.vehiculo]</Statustext>
              </InfoDates>

              <InfoDates>
                <Title1>Entada: </Title1>
                <Statustext>[t.entrada]</Statustext>
              </InfoDates>

              <InfoDates>
                <Title1>Salida: </Title1>
                <Statustext>[t.salida]</Statustext>
              </InfoDates>
            </InfoStatusContain>

            <InfoVehicle>
              <div className="info">
            <ContainInfo>
              <Title2>Nombre(s): </Title2>
              <InfoText>[t.cliente]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Documento: </Title2>
              <InfoText>[t.cliente]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Placa: </Title2>
              <InfoText>[t.vehiculo]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Marca: </Title2>
              <InfoText>[t.vehiculo]</InfoText>
            </ContainInfo>
            <ContainInfo>
              <Title2>Modelo: </Title2>
              <InfoText>[t.vehiculo]</InfoText>
            </ContainInfo>
            </div>
            
            <ContainInfo>
              <Title2>Motivo de ingreso: </Title2>
              <InfoText2>[t.entrada]</InfoText2>
            </ContainInfo>
            <ContainInfo>
              <Title2>Info mecanico: </Title2>
              <InfoText2>[t.cotizacion]</InfoText2>
            </ContainInfo>
            <ContainInfo>
              <Title2>Mecanico responsable: </Title2>
              <InfoText2>[t.salida]</InfoText2>
            </ContainInfo>
            </InfoVehicle>
          </Registers>
        </ContainRegisters>
      </ContainerVReg>
    </>
  );
}

export default VehicleRegister;
