import { Route, Routes } from "react-router-dom";
import HomeClient from "./indexClientes";
import Vehicle from "./vehicle";
import Schedule from "./Schedule";

const Clientesss = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomeClient />} />
        <Route path="/vehicle" element={<Vehicle/>}/>
        <Route path="/cita" element={<Schedule />}/>
      </Routes>
    </>
  );
};
export default Clientesss;
