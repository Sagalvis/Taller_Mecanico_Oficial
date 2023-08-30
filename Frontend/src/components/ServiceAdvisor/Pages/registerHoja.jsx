import { useEffect, useState } from "react";
import {
  Button,
  ContainH2,
  ContainerRegister,
  Form,
  Input,
  TitleH2,
} from "./styles/styledRegister";
import {
  ContainerFormH,
  ContainerRegisterH,
  SelectEntrada,
  TextArea,
  TitleRegisterH,
} from "./styles/styledRegisterH";
import Axios from 'axios'

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [estadoIngreso, setEstadoIngreso] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [motor, setMotor] = useState("");
  const [descripcionMecanico, setDescripcionMecanico] = useState("");

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  return (
    <ContainerRegister>
      <ContainerRegisterH>
        <ContainerFormH>
          <TitleRegisterH>
            <h2>Formulario entrada de vehículos</h2>
          </TitleRegisterH>

          <Form>
            <ContainH2>
              <TitleH2>Datos de entrada</TitleH2>
            </ContainH2>
            <Input
              type="text"
              placeholder="Identificación"
              value={cedula}
              onInput={(evt) => acceptNum(evt)}
              maxLength={15}
              onChange={(e) => setCedula(e.target.value)}
            />
            <SelectInputMatricula />
            <TextArea
              type="text"
              rows={6}
              cols={50}
              placeholder="Estado ingreso vehículo"
              value={estadoIngreso}
              onChange={(e) => setEstadoIngreso(e.target.value)}
            />
            <TextArea
              type="text"
              rows={3}
              cols={50}
              placeholder="Motivo ingreso vehículo"
              value={estadoIngreso}
              onChange={(e) => setEstadoIngreso(e.target.value)}
            />
            <Input
              type="text"
              onInput={(evt) => acceptNum(evt)}
              maxLength={5}
              placeholder="Cilindraje"
              value={cilindraje}
              onChange={(e) => setCilindraje(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Motor"
              value={motor}
              onChange={(e) => setMotor(e.target.value)}
            />
            <TextArea
              type="text"
              rows={6}
              cols={50}
              placeholder="Descripción mecánico"
              value={descripcionMecanico}
              onChange={(e) => setDescripcionMecanico(e.target.value)}
            />
            <Button type="submit">Enviar</Button>
          </Form>
        </ContainerFormH>
      </ContainerRegisterH>
    </ContainerRegister>
  );
};

export default RegisterHojaV;
