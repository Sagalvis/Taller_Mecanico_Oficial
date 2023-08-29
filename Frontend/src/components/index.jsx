import { Route, Routes } from 'react-router-dom';
import { ContainerMain } from './styled';
import Dashboard from "./Admin/indexDashboard"
import HomeClient from "./Client/index"
import Inventory from './InventoryControl/indexInventory';
import Login from './LoginRegister/Login/indexLogin';
import Register from './LoginRegister/Register/indexRegister';
import ServiceAdvisor from "./ServiceAdvisor/indexAdvisor"
import RegisterAdvisor from './ServiceAdvisor/Pages/Register';
import RegisterVehicle from './ServiceAdvisor/Pages/registervehicle';
import RegisterHojaV from './ServiceAdvisor/Pages/registerHoja';


const Main = () => {
  return ( 
    <div>
        <ContainerMain>
            <Routes>
              <Route path='*' element = {<HomeClient/>}/>
              <Route path='/admin/*' element = {<Dashboard/>}/>
              <Route path='/inventory/*' element = {<Inventory/>} />
              <Route path='/advisor/*' element={<ServiceAdvisor/>}/>
              <Route path='/employes/login' element = {<Login/>} />
              <Route path='/employes/register' element = {<Register/>}/> 
              <Route path='/registerc' element = {<RegisterAdvisor/>}/>
              <Route path='/registerv' element = {<RegisterVehicle/>}/>
              <Route path='/registerh' element = {<RegisterHojaV/>}/>
            </Routes>
          
        </ContainerMain>
    </div>
  );
}

export default Main;