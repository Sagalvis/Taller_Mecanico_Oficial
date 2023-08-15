import { Route, Routes } from 'react-router-dom';
import { ContainerMain } from './styled';
import Admin from "./Admin/indexDashboard"
import Client from "./Client/indexClientes"
import Service from "./ServiceAdvisor/indexAdvisor"
import Inventory from '.git /InventoryControl/indexInventory';


const Main = () => {
  return ( 
    <div>
        <ContainerMain>
          <Routes>
            <Route path='*' element = {<Client/>}/>
            <Route path='/admin' element = {<Admin/>}/>
            <Route path='/service' element = {<Service/>} />
            <Route path='/inventory' element = {<Inventory/>} />
          </Routes>
        </ContainerMain>
    </div>
  );
}

export default Main;