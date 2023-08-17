import { Route, Routes } from 'react-router-dom';
import { ContainerMain } from './styled';
import Dashboard from "./Admin/indexDashboard"
import Client from "./Client/indexClientes"
import Advisor from "./ServiceAdvisor/indexAdvisor"
import Inventory from './InventoryControl/indexInventory';


const Main = () => {
  return ( 
    <div>
        <ContainerMain>
          
            <Routes>
              <Route path='*' element = {<Client/>}/>
              <Route path='/admin/*' element = {<Dashboard/>}/>
              <Route path='/advisor/*' element = {<Advisor/>} />
              <Route path='/inventory/*' element = {<Inventory/>} />
            </Routes>
          
        </ContainerMain>
    </div>
  );
}

export default Main;