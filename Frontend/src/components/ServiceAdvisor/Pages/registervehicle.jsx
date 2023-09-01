import { useEffect, useState } from "react";
import {
  Button,
  ContainH2,
  ContainTitle,
  Input,
  TitleH1,
  TitleH2,
} from "./styles/styledRegister";
import {
  ContainFormV,
  ContainLabel,
  ContainLablSelect,
  ContainSelect,
  ContainerRegisterV,
  FormV,
  Label,
} from "./styles/styledRegisterV";
import Axios from "axios";

const FormularioVehiculo = () => {
  const [tipoVehicle, setTipoVehicle] = useState([]);
  const [tipoCombustible, setTipoCombustible] = useState([]);
  const [tipoCarroceria, setTipoCarroceria] = useState([]);
  const [documentoIdentidad, setDocumentoIdentidad] = useState(0);
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [tarjetaProdiedad, setTarjetaProdiedad] = useState("");
  const [color, setColor] = useState("");
  const [modelo, setModelo] = useState(0);
  const [cilindraje, setCilindraje] = useState(0);
  const [motor, setMotor] = useState("");
  const [kilometraje, setKilometraje] = useState(0);
  const [selectedTipoVehicle, setSelectedTipoVehicle] = useState(0);
  const [selectedTipoCombustible, setSelectedTipoCombustible] = useState(0);
  const [selectedTipoCarroceria, setSelectedTipoCarroceria] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const responseVehicle = await Axios.get(
        "http://localhost:3005/selectvechicle"
      );
      setTipoVehicle(responseVehicle.data);
      const responseCombustible = await Axios.get(
        "http://localhost:3005/selectcombustible"
      );
      setTipoCombustible(responseCombustible.data);
      const responseCarroceria = await Axios.get(
        "http://localhost:3005/selectcarroceria"
      );
      setTipoCarroceria(responseCarroceria.data);
    };
    fetchData();
  }, []);

  const handleSumit = async (e) => {
    e.preventDefault();

    if (
      documentoIdentidad === 0 ||
      placa === "" ||
      color === "" ||
      marca === "" ||
      tarjetaProdiedad === 0 ||
      modelo === 0 ||
      cilindraje === 0 ||
      motor === "" || // Cambiado a string
      kilometraje === 0 ||
      selectedTipoVehicle === 0 ||
      selectedTipoCombustible === 0 ||
      selectedTipoCarroceria === 0
    ) {
      alert("No se pudo registrar, llena todos los campos");
    } else {
      await Axios.post("http://localhost:3005/crearvehicle", {
        matricula: placa,
        propierty_card: tarjetaProdiedad,
        brand: marca,
        model: modelo,
        cylinder_cm: cilindraje,
        color: color,
        num_motor: motor, // Cambiado a string
        kilometraje: kilometraje,
        identification: documentoIdentidad,
        id_carroceria: selectedTipoCarroceria,
        id_combustible: selectedTipoCombustible,
        idtype_vehicle: selectedTipoVehicle,
      }).then((Response) => {
        console.log(Response.data);
        alert("Vehiculo registrado");
      });
    }

    // Limpia los campos del formulario
    setDocumentoIdentidad(0);
    setPlaca("");
    setMarca("");
    setTarjetaProdiedad(0);
    setColor("");
    setModelo(0);
    setCilindraje(0);
    setMotor(""); // Cambiado a string
    setKilometraje(0);
    setSelectedTipoVehicle(0);
    setSelectedTipoCombustible(0);
    setSelectedTipoCarroceria(0);
  };

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  return (
    <ContainerRegisterV>
      <ContainFormV>
        <ContainTitle>
          <TitleH1>Registro de vehículos</TitleH1>
        </ContainTitle>
        <FormV>
          <ContainH2>
            <TitleH2>Datos del vehiculo</TitleH2>
          </ContainH2>
          <ContainLablSelect>
            <ContainLabel>
              <Label>Tipo de vehiculo:</Label>
            </ContainLabel>
            <ContainSelect>
              <select
                value={selectedTipoVehicle}
                onChange={(e) => setSelectedTipoVehicle(parseInt(e.target.value))}
              >
                <option value={0}>Seleccione un tipo de vehiculo</option>
                {tipoVehicle.map((item) => (
                  <option
                    key={item.idtype_vehicle}
                    value={item.idtype_vehicle}
                  >
                    {item.type_vehicle}
                  </option>
                ))}
              </select>
            </ContainSelect>
          </ContainLablSelect>
          <Input
            type="text"
            placeholder="Documento de identidad"
            value={documentoIdentidad}
            onChange={(e) => setDocumentoIdentidad(parseInt(e.target.value))}
            onInput={acceptNum}
            maxLength={15}
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
            type="text"
            placeholder="Kilometraje"
            value={kilometraje}
            onChange={(e) => setKilometraje(parseInt(e.target.value))}
            onInput={acceptNum}
            maxLength={30}
            required
          />
          <Input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
            required
          />
          <Input
            type="text"
            placeholder="Tarjeta de propiedad carro"
            value={tarjetaProdiedad}
            onChange={(e) => setTarjetaProdiedad(parseInt(e.target.value))}
            onInput={acceptNum}
            maxLength={12}
            required
          />
          <Input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(parseInt(e.target.value))}
            onInput={acceptNum}
            maxLength={4}
            required
          />
          <Input
            type="text"
            placeholder="Cilindraje"
            value={cilindraje}
            onChange={(e) => setCilindraje(parseInt(e.target.value))}
            onInput={acceptNum}
            maxLength={5}
            required
          />
          <Input
            placeholder="Número del motor"
            value={motor}
            onChange={(e) => setMotor(e.target.value)}
            maxLength={15}
            required
          />
          <ContainLablSelect>
            <ContainLabel>
              <Label>Tipo de combustible: </Label>
            </ContainLabel>
            <ContainSelect>
              <select
                value={selectedTipoCombustible}
                onChange={(e) => setSelectedTipoCombustible(parseInt(e.target.value))}
              >
                <option value={0}>Seleccione un tipo de combustible</option>
                {tipoCombustible.map((item) => (
                  <option
                    key={item.id_combustible}
                    value={item.id_combustible}
                  >
                    {item.combustible_type}
                  </option>
                ))}
              </select>
            </ContainSelect>
          </ContainLablSelect>
          <ContainLablSelect style={{ marginTop: "10px" }}>
            <ContainLabel>
              <Label>Tipo de carrocería: </Label>
            </ContainLabel>
            <ContainSelect>
              <select
                value={selectedTipoCarroceria}
                onChange={(e) => setSelectedTipoCarroceria(parseInt(e.target.value))}
              >
                <option value={0}>Seleccione un tipo de carrocería</option>
                {tipoCarroceria.map((item) => (
                  <option
                    key={item.id_carroceria}
                    value={item.id_carroceria}
                  >
                    {item.carroceria_type}
                  </option>
                ))}
              </select>
            </ContainSelect>
          </ContainLablSelect>
          <Button type="submit" onClick={handleSumit}>
            Enviar
          </Button>
        </FormV>
      </ContainFormV>
    </ContainerRegisterV>
  );
};

export default FormularioVehiculo;
