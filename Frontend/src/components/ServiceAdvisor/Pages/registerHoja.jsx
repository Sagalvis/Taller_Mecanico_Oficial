import { useState, useEffect } from "react";
import Axios from "axios";
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
  ContainH2Auto,
  ContainCC,
  InputCC,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  Thead
} from "./styles/styledRegisterH";
import {
  ContainLabel,
  ContainLablSelect,
  ContainSelect,
  Label,
  SelectInputV,
} from "./styles/styledRegisterV";
import { OptionsSelectBike } from '../Pages/archive/OptionsSelect'
import { OptionsSelectCar } from '../Pages/archive/OptionsSelect'


const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [placa, setPlaca] = useState([]);
  const [cilindraje, setCilindraje] = useState("");


  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  const add1 = async () => {
    if (cedula) {
      const res = await Axios.post("http://localhost:3005/datos", {
        identification: cedula,
      });
      console.log(res.data);
      setPlaca(res.data);
    }
  };

  const getPlaca = async () => {
    const res = await Axios.get("http://localhost:3005/route");
    console.log(res)
  };

  const SelectInputPlaca = () => {
    if (placa.length < 0){
      console.log("error")
    }else{
      const options = placa.map((item, i) => ({
        value: i,
        label: item.matriculas
      }));
      console.log("resultado de la variable options:",options)
      return <SelectInputV options={options} />;
    }
    
    
  };


  useEffect(() => {
    getPlaca();
  }, []);


  return (
    <ContainerEntrada>
      <ContainForm>
        <Form>
          <ContainH2>
            <TitleH2>Datos del vehículo</TitleH2>
          </ContainH2>
          <ContainCC>
            <InputCC
              type="text"
              placeholder="Cedula"
              value={cedula}
              onInput={acceptNum}
              maxLength={15}
              onChange={(e) => setCedula(e.target.value)}
              required
            />
            <Button onClick={add1}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </ContainCC>
          <ContainLablSelect>
            <ContainLabel>
              <Label>Placa del vehículo:</Label>
            </ContainLabel>
            <ContainSelect>
              <SelectInputPlaca />
            </ContainSelect>
          </ContainLablSelect>
          <Input
            type="date"
            placeholder="Entrada"
            /* value={estadoIngreso} */
            /* onChange={(e) => setEstadoIngreso(e.target.value)} */
            required
          />
          <Input
            type="text"
            placeholder="Motivo de ingreso"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
            required
          />
          <Button type="submit">Enviar</Button>
        </Form>
        <ContainInventarioBike>
          <ContainH2Bike>
            <TitleH2>Inventario de MOTO</TitleH2>
          </ContainH2Bike>
          <Table>
            <Thead>
              <Tr>
                <Th>Check</Th>
                <Th>Estado</Th>
              </Tr>
            </Thead>
            <Tbody>
              {OptionsSelectBike.map((item, index) =>(
              <Tr key={index}>
                <Td>{item.nombre}</Td>
                <Td>{item.estado}</Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </ContainInventarioBike>
        <ContainInventarioAuto>
          <ContainH2Auto>
            <TitleH2Auto>Inventario de AUTO</TitleH2Auto>
          </ContainH2Auto>
          <Table>
            <Thead>
              <Tr>
                <Th>Check</Th>
                <Th>Estado</Th>
              </Tr>
            </Thead>
            <Tbody>
              {OptionsSelectCar.map((item, index) =>(
              <Tr key={index}>
                <Td>{item.nombre}</Td>
                <Td>{item.estado}</Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
        </ContainInventarioAuto>
      </ContainForm>
    </ContainerEntrada>
  );
};

export default RegisterHojaV;
