import { ContainerBody } from "./styledBody";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Client/Home/indexHome";
import We from "../Pages/Client/We/indexWe"
import Services from "../Pages/Client/Service/indexService";
import Vehicle from "../Pages/Client/Vehicle/indexVehicle"


const Body = () => {
  return (
    <div>
      <ContainerBody>
        <Routes>
            <Route path = "*"       element = {<Home/>}     />
            <Route path = "/service/*" element = {<Services/>} />
            <Route path = "/nosotros/*"  element = {<We/>}  />
            <Route path = "/vehicle/*" element = {<Vehicle/>} />
        </Routes>
      </ContainerBody>
    </div>
  );
};

export default Body;

