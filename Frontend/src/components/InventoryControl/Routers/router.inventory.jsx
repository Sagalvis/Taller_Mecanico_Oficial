import { Route, Routes } from "react-router-dom";
import Inventory from "../Pages/inventory"

const RouterInventory = () => {
  return ( 
    <Routes>
      <Route path="/products" element = {<Inventory/>}/> 
    </Routes>
  );
}

export default RouterInventory;