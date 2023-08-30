import { useState } from "react";
import {
  Button,
  ContainH2,
  ContainerEntrada,
  Form,
  Input,
  TitleH2,
  ContainForm,
  ContainInventarioBike,
  ContainInventarioAuto,
  ContainH2Bike,
  TitleH2Auto,
  ContainH2Auto
  // TitleRegisterH,
} from "./styles/styledRegisterH";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [placa, setPlaca] = useState("");
  const [estadoIngreso, setEstadoIngreso] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [motor, setMotor] = useState("");
  const [descripcionMecanico, setDescripcionMecanico] = useState("");

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  return (
    <ContainerEntrada>
      <ContainForm>
        {/* <ContainTitle>
          <TitleH1>Registra nuevo cliente</TitleH1>
        </ContainTitle> */}

        <Form>
          <ContainH2>
          <TitleH2>Datos del vehículo</TitleH2>
          </ContainH2>
          <Input
            type="text"
            placeholder="Cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Estado de ingreso"
            value={estadoIngreso}
            onChange={(e) => setEstadoIngreso(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Cilindraje"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Motor"
            value={motor}
            onChange={(e) => setMotor(e.target.value)}
            required
          />
          <Input
            type="phone"
            placeholder="Descripcion de mecanico"
            value={descripcionMecanico}
            onChange={(e) => setDescripcionMecanico(e.target.value)}
            required
          />
          <Button type="submit">
            Enviar
          </Button>
        </Form>

      <ContainInventarioBike>
        <ContainH2Bike>
          <TitleH2>Inventario de MOTO</TitleH2>
        </ContainH2Bike>

        <h1>Bike</h1>
      </ContainInventarioBike>

      <ContainInventarioAuto>
      <ContainH2Auto>
          <TitleH2Auto>Inventario de AUTO</TitleH2Auto>
        </ContainH2Auto>
      <h1>Auto</h1>
      </ContainInventarioAuto>


      </ContainForm>
    </ContainerEntrada>
  );
};

export default RegisterHojaV;
