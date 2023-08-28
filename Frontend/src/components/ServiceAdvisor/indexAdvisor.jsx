
import LayoutAdvisor from "./Layout/layoutAdvisor";
import RoutesAdvisor from "./Routes/index.routes";
import { ContainerAdvisor } from "./styledAdvisor";

const ServiceAdvisor = () => {
  return (
    <ContainerAdvisor>
      <LayoutAdvisor>
        <RoutesAdvisor/>
      </LayoutAdvisor>
    </ContainerAdvisor>
  );
};

export default ServiceAdvisor;
