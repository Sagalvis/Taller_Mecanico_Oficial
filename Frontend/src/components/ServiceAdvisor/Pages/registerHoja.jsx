import { useState } from "react";
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
  Thead,
} from "./styles/styledRegisterH";
import {
  ContainLabel,
  ContainLablSelect,
  ContainSelect,
  Label
} from "./styles/styledRegisterV";
import { OptionsSelectBike } from "../Pages/archive/OptionsSelect";
import { OptionsSelectCar } from "../Pages/archive/OptionsSelect";
import { TextArea } from "./styles/styledOrder";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");
  const [placa, setPlaca] = useState([]);
  const [selectPlaca, setSelectPlaca] = useState(null)

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  const getInfoByCedula = async () => {
    try {
      const res = await Axios.post("http://localhost:3005/datos", {
        identification: cedula,
      });
      console.log(res.data);
      setPlaca(res.data.matriculas);
    } catch (error) {
      console.log("Error al obtener la información por cédula:", error);
    }
  };

  const postFormulario = async () => {
    const res = await Axios.post("http://localhost:3005/send",{
      fecha_entrada: fecha,
      motivo: motivo,
      identification: cedula,
      matricula: selectPlaca
    });
    console.log(res.data)
  };
  
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
            <Button onClick={getInfoByCedula}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </ContainCC>
          <ContainLablSelect>
            <ContainLabel>
              <Label>Placa del vehículo:</Label>
            </ContainLabel>
            <ContainSelect>
              <select onChange={(e) => setSelectPlaca(e.target.value)}>
                {placa.map((item, i) => (
                  <option key={i} value={item}>{item}</option>
                ))}
              </select>
            </ContainSelect>
          </ContainLablSelect>
          <label htmlFor="">espejos</label>
          <Input
            type="date"
            placeholder="Entrada"
            /* value={estadoIngreso} */
            onChange={(e) => setFecha(e.target.value)}
            required
          />
          <TextArea
            rows={6}
            cols={50}
            placeholder="Motivo de ingreso"
            onChange={(e) => setMotivo(e.target.value)}
            required
          />
          <Button type="submit" onClick={postFormulario}>Enviar</Button>
        </Form>
        <ContainInventarioBike>
          <ContainH2Bike>
            <TitleH2>Inventario de MOTO</TitleH2>
          </ContainH2Bike>
          <Table>
            <Thead>
              <Tr>
                <Th>Check</Th>
                <Th>Estado (OK - R - M)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {OptionsSelectBike.map((item, index) => (
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
              {OptionsSelectCar.map((item, index) => (
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