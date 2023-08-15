import Sidebar from "./Sidebar/indexSidebar";
import { ContainerDasboard } from "./styledDashboard";






const Dashboard = () => {
  
  return ( 
    <div>
      <ContainerDasboard>
        <Sidebar/>
      </ContainerDasboard>
    </div>
  );
}

export default Dashboard;