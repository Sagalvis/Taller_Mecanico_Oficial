import { Route, Routes } from "react-router-dom";
import HomeClient from "./indexClientes";
import Contact from "./Contact";
import Vehicle from "./Vehicle";
import Schedule from "./Schedule";
import CheckVehicle from "./CheckVehicle";
import VehicleRegister from "./VehicleRegister";

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
        <Route path="/vehicleregister" element={<VehicleRegister/>}/>
      </Routes>
    </>
  );
};
export default Clientesss;
