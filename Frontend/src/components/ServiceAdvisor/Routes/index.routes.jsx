import { Route, Routes } from "react-router-dom";
import RegisterAdvisor from "../Pages/Register";
import RegisterVehicle from "../Pages/registervehicle";
import RegisterHojaV from "../Pages/registerHoja";
import OrderService from "../Pages/OrdenServicio";

const RoutesAdvisor = () => {
  return ( 
    <Routes>
      <Route path="/registerclient" element={<RegisterAdvisor/>} />
      <Route path="/registervehicle" element={<RegisterVehicle/>} />
      <Route path="/registerhojav" element={<RegisterHojaV/>} />
      <Route path="/orderservice" element={<OrderService/>}/>
    </Routes>
  );
}

export default RoutesAdvisor;