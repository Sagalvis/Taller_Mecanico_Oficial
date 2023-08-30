import { useState, useEffect } from "react";
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
  SelectEstado
  // TitleRegisterH,
} from "./styles/styledRegisterH";
import {
  ContainLabel,
  ContainLablSelect,
  ContainSelect,
  Label,
  SelectInputV,
} from "./styles/styledRegisterV";
import Axios from "axios";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [placa, setPlaca] = useState([]);
  const [estadoIngreso, setEstadoIngreso] = useState([]);
  const [cilindraje, setCilindraje] = useState("");

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  const getPlaca = async () => {
    const res = await Axios.get("http://localhost:3005/route");
  };

  const getEstadoIngreso = async () => {
    const res = await Axios.get("http://localhost:3005/selectestadoingreso");
    setEstadoIngreso(res.data)
  };

  const SelectInputPlaca = () => {
    const options = placa.map((item, i) => ({
      value: i,
      label: item.matricula,
    }));
    return <SelectInputV options={options} />;
  };

  const SelectInputEstado = () => {
    const options = estadoIngreso.map((item, i) => ({
      value: i,
      label: item.estado,
    }));
    return <SelectEstado options={options} />;
  };

  useEffect(() => {
    getPlaca();
    getEstadoIngreso();
  }, [setPlaca, setEstadoIngreso]);



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

          <ContainCC>
            <InputCC
              type="text"
              placeholder="Cedula"
              value={cedula}
              onInput={(evt) => acceptNum(evt)}
              maxLength={15}
              onChange={(e) => setCedula(e.target.value)}
              required
            />
            <Button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </ContainCC>

          <ContainLablSelect>
            <ContainLabel>
              <Label>Placa del vehículo:</Label>
            </ContainLabel>
            <ContainSelect>{/* <SelectInputPlaca /> */}</ContainSelect>
          </ContainLablSelect>

          <Input
            type="date"
            placeholder="Entrada"
            value={estadoIngreso}
            onChange={(e) => setEstadoIngreso(e.target.value)}
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
              <Tr>
                <Td>Espejos X4</Td>
                <Td>
                  <SelectInputEstado />
                </Td>
              </Tr>
              <Tr>
                <Td>Espejos X4</Td>
                <Td>
                  <></>
                </Td>
              </Tr>
              <Tr>
                <Td>Espejos X4</Td>
                <Td>
                  <></>
                </Td>
              </Tr>
              <Tr>
                <Td>Espejos X4</Td>
                <Td>
                  <></>
                </Td>
              </Tr>
              <Tr>
                <Td>Espejos X4</Td>
                <Td>
                  <></>
                </Td>
              </Tr>
              <Tr>
                <Td>Espejos X4</Td>
                <Td>
                  <></>
                </Td>
              </Tr>
              <Tr>
                <Td>Espejos X4</Td>
                <Td>
                  <></>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </ContainInventarioBike>

        <ContainInventarioAuto>
          <ContainH2Auto>
            <TitleH2Auto>Inventario de AUTO</TitleH2Auto>
          </ContainH2Auto>
          <></>
        </ContainInventarioAuto>
      </ContainForm>
    </ContainerEntrada>
  );
};

export default RegisterHojaV;
