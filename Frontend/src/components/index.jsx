import { Route, Routes } from 'react-router-dom';
import { ContainerMain } from './styled';
import Dashboard from "./Admin/indexDashboard"
import HomeClient from "./Client/index"
import Inventory from './InventoryControl/indexInventory';
import Login from './LoginRegister/Login/indexLogin';
import Register from './LoginRegister/Register/indexRegister';
import ServiceAdvisor from "./ServiceAdvisor/indexAdvisor"


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
            </Routes>
          
        </ContainerMain>
    </div>
  );
}

export default Main;