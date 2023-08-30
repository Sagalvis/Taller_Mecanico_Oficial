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
import Axios from "axios";
const RegisterHojaV = () => {
  const [identification, setCedula] = useState("");
  const [placa, setPlaca] = useState("");
  const [estadoIngreso, setEstadoIngreso] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [motor, setMotor] = useState("");
  const [descripcionMecanico, setDescripcionMecanico] = useState("");

/*   const add = () => {
    if(identification){
        Axios.post("http://localhost:3005/datos",{
          identification: identification
      }).then((datos) => {
        console.log(datos.data)
      })
    }
    
    setPlaca(datos.matricula) 
    
  } */
/*   function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  } */

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

import { useState } from 'react';
import { ContainerRegister } from './styles/styledRegister';
import styled from 'styled-components';
import Axios from "axios";

const RegisterHojaV = () => {
  const [identification, setCedula] = useState('');
  const [placa, setPlaca] = useState('');
  const [estadoIngreso, setEstadoIngreso] = useState('');
  const [cilindraje, setCilindraje] = useState('');
  const [motor, setMotor] = useState('');
  const [descripcionMecanico, setDescripcionMecanico] = useState('');

  const add = () => {
    if(identification){
        Axios.post("http://localhost:3005/datos",{
          identification: identification
      }).then((datos) => {
        console.log(datos.data)
        setPlaca(datos.data.matricula)
      })
      
    }
    
    /* setPlaca(datos.matricula) */
    
  }




  return (
    <ContainerRegister>

    <h1>Formulario registro hoja de vida</h1>
    <form>
      <input
        type="number"
        placeholder="Cédula"
        value={identification}
        onChange={(e) => setCedula(e.target.value)}
      />
      <input
        type="text"
        placeholder="Placa"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      <Input
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
      <Input
        type="text"
        rows={10}
        cols={50}
        placeholder="Descripción mecánico"
        value={descripcionMecanico}
        onChange={(e) => setDescripcionMecanico(e.target.value)}
      />
    </form>

    <button type="submit" onClick={add}>Enviar</button>
    </ContainerRegister>
  );
};

export default RegisterHojaV;

const Input = styled.textarea`
  height: 200px;
  width: 500px;
  resize: none;