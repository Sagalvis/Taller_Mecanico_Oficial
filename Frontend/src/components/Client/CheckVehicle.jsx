import {
  Check,
  ChkH2,
  ContainH2,
  ContainerCheck,
  LogContainer,
  Logo,
  LogoCheck,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styles/StyledCheckVehicle";
import ThisLogoCheck from "../../assets/svg/logoCheckVehicle.svg";
import Navbar from "./Navbar";

function CheckVehicle() {
  return (
    <>
    <Navbar />
      <ContainerCheck>
        <LogoCheck>
          <Logo src={ThisLogoCheck} alt="image" />
        </LogoCheck>

        <Check>
          <ContainH2>
            <ChkH2>Consulta el registro de tus vehiculos</ChkH2>
          </ContainH2>


          <LogContainer>
            <p style={{color: 'red'}}>NOTA: Para consultar tus registros haz un click en la placa de tu vehiculo.</p>
            
            <Table>
              <Thead>
                <Tr>
                  <Th>N° de registro</Th>
                  <Th>Tipo de documento</Th>
                  <Th>Documento</Th>
                  <Th>Nombre completo</Th>
                  <Th>Placa de vehículo</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>001</Td>
                  <Td>CC</Td>
                  <Td>1143168571</Td>
                  <Td>JOHAN DAVID DIAZ QUINTERO</Td>
                  <Td><a href="/vehicle">AEP41G</a></Td>
                </Tr>
              </Tbody>
            </Table>
          </LogContainer>
        </Check>
      </ContainerCheck>
    </>
  );
}

export default CheckVehicle;
