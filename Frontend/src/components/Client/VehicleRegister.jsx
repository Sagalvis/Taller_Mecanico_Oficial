import Navbar from "./Navbar";
import { ContainRegisters, ContainerVReg } from "./styles/StyledVehicleRegister";


function VehicleRegister() {
  return (
    <>
    <Navbar />
    <ContainerVReg>
      <ContainRegisters>
        <h1>Registros del vehículo</h1>
      </ContainRegisters>
    </ContainerVReg>
    </>
  )
}

export default VehicleRegister;