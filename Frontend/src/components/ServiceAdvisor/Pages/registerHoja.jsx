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
  Thead,
} from "./styles/styledRegisterH";
import {
  ContainLabel,
  ContainLablSelect,
  ContainSelect,
  Label,
  SelectInputV,
} from "./styles/styledRegisterV";
import { TextArea } from "./styles/styledOrder";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");
  const [placa, setPlaca] = useState([]);
  const [selectPlaca, setSelectPlaca] = useState(null);
  // VARIABLES DE ESTADO PARA INVENTARIO DE VEHICULO
  const [status, setStatus] = useState(0);
  const [bike, setBike] = useState(0);
  const [car, setCar] = useState(0);
  // VARIABLES DE ESTADO PARA INVENTARIO DE VEHICULO EN MODO ARRAY
  const [typeStatus, setTypeStatus] = useState([]);
  const [typeBike, setTypeBike] = useState([]);
  const [typeCar, setTypeCar] = useState([]);

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
    const res = await Axios.post("http://localhost:3005/send", {
      fecha_entrada: fecha,
      motivo: motivo,
      identification: cedula,
      matricula: selectPlaca,
    });
    console.log(res.data);
  };

  //  GET PARA INVENTARIO DE MOTOS Y AUTOS
  useEffect(() => {
    const fetchData = async () => {
      const getStatus = await Axios.get("http://localhost:3005/selectstatus");
      setTypeStatus(getStatus.data);
      const getCheckBike = await Axios.get(
        "http://localhost:3005/selectcheckbike"
      );
      setTypeBike(getCheckBike.data);
      const getCheckCar = await Axios.get(
        "http://localhost:3005/selectcheckcar"
      );
      setTypeCar(getCheckCar.data);
    };
    fetchData();
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
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </ContainSelect>
          </ContainLablSelect>
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
          <Button type="submit" onClick={postFormulario}>
            Enviar
          </Button>
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
              {typeBike.map((item) => (
                <p key={item.id_check_bike} style={{textTransform: 'uppercase'}}>
                  {item.part_bike}

                  <SelectInputV
                    name=""
                    id=""
                    value={status}
                    onChange={(e) => setStatus(parseInt(e.target.value))}
                  >
                    <option value={0}>...</option>
                    {typeStatus.map((item) => (
                      <option
                        key={item.id_status_entry}
                        value={item.id_status_entry}
                      >
                        {item.status}
                      </option>
                    ))}
                  </SelectInputV>
                </p>
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
              <></>
            </Tbody>
          </Table>
        </ContainInventarioAuto>
      </ContainForm>
    </ContainerEntrada>
  );
};

export default RegisterHojaV;
