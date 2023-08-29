import { useState } from "react";
import { ContainerRegister } from "./styles/styledRegister";
import { ContainerHeaderRegisterH, ContainerRegisterH, TextArea, TitleRegisterH } from "./styles/styledRegisterH";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [placa, setPlaca] = useState("");
  const [estadoIngreso, setEstadoIngreso] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [motor, setMotor] = useState("");
  const [descripcionMecanico, setDescripcionMecanico] = useState("");

  return (
    <ContainerRegister>
      <ContainerRegisterH>
        <ContainerHeaderRegisterH>

        <TitleRegisterH>

        <h1>Formulario registro hoja de vida</h1>
        </TitleRegisterH>
        </ContainerHeaderRegisterH>
        <form>
          <input
            type="number"
            placeholder="Cédula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
          <input
            type="text"
            placeholder="Placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
          <TextArea
            type="text"
            rows={10}
            cols={50}
            placeholder="Estado ingreso vehículo"
            value={estadoIngreso}
            onChange={(e) => setEstadoIngreso(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cilindraje"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
          />
          <input
            type="text"
            placeholder="Motor"
            value={motor}
            onChange={(e) => setMotor(e.target.value)}
          />
          <TextArea
            type="text"
            rows={10}
            cols={50}
            placeholder="Descripción mecánico"
            value={descripcionMecanico}
            onChange={(e) => setDescripcionMecanico(e.target.value)}
          />
        </form>

        <button type="submit">Enviar</button>
      </ContainerRegisterH>
    </ContainerRegister>
  );
};

export default RegisterHojaV;


