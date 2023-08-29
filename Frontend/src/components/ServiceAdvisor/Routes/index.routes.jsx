import { Route, Routes } from "react-router-dom";
import RegisterAdvisor from "../Pages/Register";
import RegisterVehicle from "../Pages/registervehicle";
import RegisterHojaV from "../Pages/registerHoja";

const RoutesAdvisor = () => {
  return ( 
    <Routes>
      <Route path="/registerclient" element={<RegisterAdvisor/>} />
      <Route path="/registervehicle" element={<RegisterVehicle/>} />
      <Route path="/registerhojav" element={<RegisterHojaV/>} />
    </Routes>
  );
}

export default RoutesAdvisor;