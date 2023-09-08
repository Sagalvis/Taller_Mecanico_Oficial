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
  ContainCC,
  InputCC,
  ContainRepair,
  H2,
  TitleContain,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  InfoModal,
  ContainTable,
} from "./styles/styledRegisterH";
import {
  ContainLabel,
  ContainLablSelect,
  ContainSelect,
  Label,
} from "./styles/styledRegisterV";
import { TextArea } from "./styles/styledOrder";
import ThisModal from "./archive/ThisModal";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivo, setMotivo] = useState("");
  const [placa, setPlaca] = useState([]);
  const [selectPlaca, setSelectPlaca] = useState(null);
  const [modalStatus, setModalStatus] = useState(false);
  // VARIABLES DE ESTADO PARA LA TABLA ORDEN DE REPARACÍON...
  const [getStatus, setGetStatus] = useState([]);
  const [getDate, setGetDate] = useState([]);
  const [getOrder, setGetOrder] = useState("");
  const [getCustomer, setGetCustomer] = useState("");
  const [getVehicle, setGetVehicle] = useState("");
  const [getReason, setGetReason] = useState("");

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

  const postFormulario = async (e) => {
    // e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:3005/send", {
        date_entry: fecha,
        reason: motivo,
        identification: cedula,
        matricula: selectPlaca,
        id_status_order: 1,
      });
      console.log(res.data);
      console.log(selectPlaca);
      if (selectPlaca !== "") {
        const sendPacks = await Axios.get("http://localhost:3005/getstatus", {
          params: {
            matricula: selectPlaca,
          },
        });
        console.log("name", sendPacks.data);
      } else {
        console.log("llega vacio");
      }
      //setGetStatus(sendPacks.data.order_status);
      // Aquí puedes agregar lógica adicional si deseas manejar la respuesta de la API
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
      // Aquí puedes agregar lógica adicional para manejar el error de manera adecuada
    }
  };

  const orderService = async () => {
    try {
      const sendPacks = await Axios.post("http://localhost:3005/getstatus", {
        matricula: selectPlaca,
      });
      console.log(sendPacks.data);
      setGetStatus(sendPacks.data[0].order_status);
      setGetDate(sendPacks.data[0].date_entry);
      setGetOrder(sendPacks.data[0].id_form_entry);
      setGetCustomer(sendPacks.data[0].name);
      setGetVehicle(sendPacks.data[0].matricula);
      setGetReason(sendPacks.data[0].reason);
    } catch (error) {
      console.log("Error al obtener el estado:", error);
    }
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
              {placa.length > 0 ? (
                <select
                  //style={{ textTransform: "uppercase" }}
                  onChange={(e) => setSelectPlaca(e.target.value)}
                >
                  <option>placas</option>
                  {placa.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              ) : (
                <p style={{ color: "red", marginLeft: "10px" }}>
                  No hay datos disponibles
                </p>
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
          <Button type="submit" onClick={() => {
            orderService();
            postFormulario();
          }}>
            Enviar
          </Button>
        </Form>

        <ContainRepair>
          <TitleContain>
            <H2>Orden de reparación</H2>
          </TitleContain>

          <></>
          <ContainTable>
            <Table>
              <Thead>
                <Tr>
                  <Th>Estado</Th>
                  <Th>Fecha</Th>
                  <Th>Orden</Th>
                  <Th>Cliente</Th>
                  <Th>Vehículo</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{getStatus}</Td>
                  <Td>{getDate}</Td>
                  <Td>{getOrder}</Td>
                  <Td>{getCustomer}</Td>
                  <Td>
                    <button onClick={() => setModalStatus(!modalStatus)}>
                      {getVehicle}
                    </button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </ContainTable>
        </ContainRepair>
      </ContainForm>
      <ThisModal
        status={modalStatus}
        changeStatus={setModalStatus}
        title="Motivo de ingreso"
      >
        <InfoModal>
          <p>{getReason}</p>
        </InfoModal>
      </ThisModal>
    </ContainerEntrada>
  );
};

export default RegisterHojaV;
