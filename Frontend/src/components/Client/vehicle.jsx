import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Button,
  ContainFooter,
  ContainInp,
  ContainRoute,
  Infovehiculo,
  Input,
  Label,
  TitleDocument,
  TitleH5,
} from "./styles/styledVehicle";

const Vehicle = () => {

  function acceptNum(evt) {
      const input = evt.target.value;
      evt.target.value = input.replace(/[^\d]/g, '');
  }

  return (
    <>
      <Navbar />
      <ContainRoute>
        <Infovehiculo>
          <TitleDocument>
            <TitleH5>Ingrese por favor el Número de Documento</TitleH5>
          </TitleDocument>

          <ContainInp>
            <Label htmlFor="documento">Documento:</Label>
            <Input
              type="text"
              required
              autoComplete='off'
              onInput={(evt) => acceptNum(evt)}
              minLength={4}
              maxLength={15}
              id="documento"
              name="documento"
              placeholder="Ingrese su documento"
            />
          </ContainInp>
            <Button>Buscar</Button>
        </Infovehiculo>
      </ContainRoute>

      <ContainFooter>
        <Footer
          titleCompany="About Company"
          textCompany="En Transfor CARS, somos un equipo apasionado de expertos en mecánica automotriz.Con años de experiencia en el sector, nos enorgullece ofrecer servicios de alta calidad y soluciones confiables para mantener tu vehículo en óptimas condiciones..."
          titleHelp="Help and advice"
          titleAbout="About us"
          titleContact="Contact Us"
          Copyright="Copyright &copy; 2023 Transfor CARS. All Rights"
        />
      </ContainFooter>
    </>
  );
};

export default Vehicle;
