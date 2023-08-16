import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home"
import Products from "../Pages/Productos";
import Client from "../../Client/indexClientes";
import Employees from "../Pages/Employees";
import Vehicles from "../Pages/Vehicles";
const Router = () => {
  return ( 
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/productos" element={<Products/>}/>
      <Route path="/client" element={<Client/>}/>
      <Route path="/employees" element={<Employees/>}/>
      <Route path="/vehicles" element={<Vehicles/>}/>
    </Routes>
  );
}

export default Router;