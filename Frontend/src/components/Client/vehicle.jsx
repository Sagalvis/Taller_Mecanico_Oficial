import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Container1,
  ContainerMaiV,
  ContainerVehicle,
} from "./styles/styledVehicle";

const Vehicle = () => {
  return (
    <>
    <ContainerMaiV>
      <Navbar />
      <ContainerVehicle>
        <></>
      </ContainerVehicle>
    </ContainerMaiV>

    <Container1>
      <Footer />
    </Container1>
    </>
  );
};

export default Vehicle;
