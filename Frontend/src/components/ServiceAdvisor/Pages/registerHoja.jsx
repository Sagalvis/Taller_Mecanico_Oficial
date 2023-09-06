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
  Thead,
  ContainInventario,
  NameInventario,
  ContainerNameSelect,
  SelectInpuHoja,
  ContainSelectHoja,
} from "./styles/styledRegisterH";
import {
  ContainLabel,
  ContainLablSelect,
  ContainSelect,
  Label,
} from "./styles/styledRegisterV";
import { TextArea } from "./styles/styledOrder";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");
  const [placa, setPlaca] = useState([]);
  const [selectPlaca, setSelectPlaca] = useState(null);
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
    try {
      const res = await Axios.post("http://localhost:3005/send", {
        date_entry: fecha,
        reason: motivo,
        identification: cedula,
        matricula: selectPlaca,
      });
      console.log(res.data);
      // Aquí puedes agregar lógica adicional si deseas manejar la respuesta de la API
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
      // Aquí puedes agregar lógica adicional para manejar el error de manera adecuada
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getStatus = await Axios.get("http://localhost:3005/selectstatus");
        setTypeStatus(getStatus.data);
        const getCheckBike = await Axios.get(
          "http://localhost:3005/selectcheckbike"
        );
        setTypeBike(getCheckBike.data.map((item) => ({ ...item, status: 0 })));
        console.log("esto tiene la variable getcheckbike: ", getCheckBike.data);
        const getCheckCar = await Axios.get(
          "http://localhost:3005/selectcheckcar"
        );
        setTypeCar(getCheckCar.data);
      } catch (error) {
        console.log("Error al obtener el inventario:", error);
      }
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
              {placa.length > 0 ? (
                <select
                  style={{ textTransform: "uppercase" }}
                  onChange={(e) => setSelectPlaca(e.target.value)}
                >
                  {placa.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              ) : (
                <p style={{ color: "red" }}>No hay datos disponibles</p>
              )}
            </ContainSelect>
          </ContainLablSelect>
          <Input
            type="date"
            placeholder="Entrada"
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
          </Table>
          <ContainInventario>
            {typeBike.map((item) => (
              <ContainerNameSelect key={item.id_check_bike}>
                <NameInventario
                  style={{ textTransform: "uppercase", fontFamily: "consolas" }}
                >
                  {item.part_bike}
                </NameInventario>
                <ContainSelectHoja>
                  <SelectInpuHoja
                    style={{ fontFamily: "consolas", fontSize: "14px" }}
                    value={item.status}
                    onChange={(e) => {
                      const updatedTypeBike = typeBike.map((bike) => {
                        if (bike.id_check_bike === item.id_check_bike) {
                          return { ...bike, status: parseInt(e.target.value) };
                        }
                        return bike;
                      });
                      setTypeBike(updatedTypeBike);
                    }}
                  >
                    <option value={0}>Seleccione el estado</option>
                    {typeStatus.map((statusItem) => (
                      <option
                        key={statusItem.id_status_entry}
                        value={statusItem.id_status_entry}
                      >
                        {statusItem.status}
                      </option>
                    ))}
                  </SelectInpuHoja>
                </ContainSelectHoja>
              </ContainerNameSelect>
            ))}
          </ContainInventario>
        </ContainInventarioBike>
        <ContainInventarioAuto>
          <ContainH2Auto>
            <TitleH2Auto>Inventario de AUTO</TitleH2Auto>
          </ContainH2Auto>
          <Table>
            <Thead>
              <Tr>
                <Th>Check</Th>
                <Th>Estado (OK - R - M)</Th>
              </Tr>
            </Thead>
          </Table>
          <ContainInventario>
            {typeCar.map((item) => (
              <ContainerNameSelect key={item.id_check_car}>
                <NameInventario
                  style={{ textTransform: "uppercase", fontFamily: "consolas" }}
                >
                  {item.part_car}
                </NameInventario>
                <ContainSelectHoja>
                  <SelectInpuHoja
                    style={{ fontFamily: "consolas", fontSize: "14px" }}
                    value={item.status}
                    onChange={(e) => {
                      const updateTypeCar = typeCar.map((car) => {
                        if (car.id_check_car == item.id_check_car) {
                          return { ...car, status: parseInt(e.target.value) };
                        }
                        return car;
                      });
                      setTypeCar(updateTypeCar);
                    }}
                  >
                    <option value={0}>Seleccione el estado</option>
                    {typeStatus.map((statusItem) => (
                      <option
                        key={statusItem.id_status_entry}
                        value={statusItem.id_status_entry}
                      >
                        {statusItem.status}
                      </option>
                    ))}
                  </SelectInpuHoja>
                </ContainSelectHoja>
              </ContainerNameSelect>
            ))}
          </ContainInventario>
        </ContainInventarioAuto>
      </ContainForm>
    </ContainerEntrada>
  );
};

export default RegisterHojaV;
