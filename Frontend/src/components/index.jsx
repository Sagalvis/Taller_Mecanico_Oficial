import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContainerMain } from './styled';
import Dashboard from "./Admin/indexDashboard"
import Client from "./Client/indexClientes"
import Service from "./ServiceAdvisor/indexAdvisor"
import Inventory from './InventoryControl/indexInventory';


const Main = () => {
  return ( 
    <div>
        <ContainerMain>
          <BrowserRouter>
            <Routes>
              <Route path='*' element = {<Client/>}/>
              <Route path='/admin/*' element = {<Dashboard/>}/>
              <Route path='/service/*' element = {<Service/>} />
              <Route path='/inventory/*' element = {<Inventory/>} />
            </Routes>
          </BrowserRouter>
        </ContainerMain>
    </div>
  );
}

export default Main;