import { Route, Routes } from "react-router-dom";
import RegisterAdvisor from "../Pages/Register";

const RoutesAdvisor = () => {
  return ( 
    <Routes>
      <Route path="*" element={<RegisterAdvisor/>}/>
    </Routes>
  );
}

export default RoutesAdvisor;