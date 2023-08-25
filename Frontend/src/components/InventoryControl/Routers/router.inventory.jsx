import { Route, Routes } from "react-router-dom";
import Inventory from "../Pages/inventory"

const RouterInventory = () => {
  return ( 
    <Routes>
      <Route path="*" element = {<Inventory/>}/> 
      

    </Routes>
  );
}

export default RouterInventory;