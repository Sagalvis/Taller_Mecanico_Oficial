import { Route, Routes } from "react-router-dom";
import HomeClient from "./indexClientes";
import Contact from "./Contact";
import Vehicle from "./Vehicle";
import Schedule from "./Schedule";
import CheckVehicle from "./CheckVehicle";
import PaintService from "./PaintService";
import LaminateService from "./LaminateService"
import ElectricService from "./ElectricService"
import AirService from "./AirService"
import GeneralService from "./GeneralService"
import VehicleRegistration from "./VehicleRegister";

// import OtherService from "./OtherService"

const Clientesss = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomeClient />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/vehicle" element={<Vehicle/>}/>
        <Route path="/cita" element={<Schedule />}/>
        <Route path="/checkvehicle" element={<CheckVehicle />}/>
        <Route path="/vehicleregistration" element={<VehicleRegistration/>}/>

        {/* Cards de servicios */}
        <Route path="/paint" element={<PaintService />}/>
        <Route path="/laminate" element={<LaminateService/>}/>
        <Route path="/electric" element={<ElectricService />}/>
        <Route path="/air-conditioning" element={<AirService />}/>
        <Route path="/general" element={<GeneralService />}/>
        <Route path="/cita" element={<Schedule />}/>
      </Routes>
    </>
  );
};
export default Clientesss;
