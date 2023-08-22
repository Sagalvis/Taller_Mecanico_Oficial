import Layout from "./Layout/Layout";
import Router from "./Routers/router";
import { ContainerDasboard } from "./styledDashboard";

const Dashboard = () => {
  return (
    <div>
      <ContainerDasboard>
        <Layout>
          <Router />
        </Layout>
      </ContainerDasboard>
    </div>
  );
};

export default Dashboard;
