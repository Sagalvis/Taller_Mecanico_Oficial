import { Route, Routes } from "react-router-dom";
import HomeClient from "./indexClientes";
import Vehicle from "./vehicle";

const Clientesss = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomeClient />} />
        <Route path="/vehicle" element={<Vehicle/>}/>
      </Routes>
    </>
  );
};
export default Clientesss;
