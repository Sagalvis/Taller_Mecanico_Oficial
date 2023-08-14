import { ContainerBody } from "./styledBody";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/indexHome";
import We from "../Pages/We/indexWe"
import Services from "../Pages/Service/indexService";
import Products from "../Pages/Products/indexProducts";
import Login from "../Pages/Login/indexLogin"
const Body = () => {
  return (
    <div>
      <ContainerBody>
        <Routes>
            <Route path = "*"       element = {<Home/>}     />
            <Route path = "/service/*" element = {<Services/>} />
            <Route path = "/product/*" element = {<Products/>} />
            <Route path = "/nosotros/*"  element = {<We/>}  />
            <Route path = "/login/*"   element = {<Login/>}    />
        </Routes>
      </ContainerBody>
    </div>
  );
};

export default Body;

