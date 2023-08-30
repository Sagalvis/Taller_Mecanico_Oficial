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
  SelectInputV,
} from "./styles/styledRegisterV";
/* import axios from "axios"; */

import Axios from "axios";

const FormularioVehiculo = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState([]);
  const [tipoCarroceria, setTipoCarroceria] = useState([]);
  const [tipoCombustible, setTipoCombustible] = useState([]);
  const [placa, setPlaca] = useState("");
  const [tarjetaPropiedad, setTarjetaPropiedad] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [color, setColor] = useState("");

  /*   const add = async (evt) => {
    if(tipoVehiculo === ''|| placa ==='' || tarjetaPropiedad === '' || marca === '' || modelo === '' || cilindraje === '' || tipoCombustible === '' || color === '' || tipoCarroceria === ''){
    alert('Todos los campos son obligatorios');
    
    evt.preventDefault();
    }
    else {
      try {      
      await axios.post('http://localhost:3005//registervehicle/register'),{
        vehicle_type: tipoVehiculo,
        matricula: placa,
        tarjetaPropiedad: tarjetaPropiedad,
        marca: marca,
        modelo: modelo,
        cilindraje: cilindraje,
        id_combustible: tipoCombustible,
        color: color,
        id_carroceria: tipoCarroceria
      }.then((response) =>{
        console.log(response.data)
        alert("automovil registrado exitosamente");
        window.location.reload('http://localhost:5173/registerv');
        
      })
    } catch (error) {
        alert('no se puedo enviar el package json')
    }
    }
  } */

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log("Formulario enviado:", {
      tipoVehiculo,
      placa,
      tarjetaPropiedad,
      marca,
      modelo,
      cilindraje,
      tipoCombustible,
      color,
      tipoCarroceria,
    });
    // Limpia los campos del formulario
    setTipoVehiculo("");
    setPlaca("");
    setTarjetaPropiedad("");
    setMarca("");
    setModelo("");
    setCilindraje("");
    setTipoCombustible("");
    setColor("");
    setTipoCarroceria("");
  };

  const getTypeVehicle = async () => {
    const res = await Axios.get("http://localhost:3005/selectvechicle");
    setTipoVehiculo(res.data);
  };

  const SelectInputVehicle = () => {
    const options = tipoVehiculo.map((item, i) => ({
      value: i,
      label: item.type_vehicle,
    }));
    return <SelectInputV options={options} />;
  };

  useEffect(() => {
    getTypeVehicle();
    getTypeCombustible();
    getTypeCarroceria();
  }, [setTipoVehiculo, setTipoCombustible, setTipoCarroceria]);

  const getTypeCombustible = async () => {
    const res = await Axios.get("http://localhost:3005/selectcombustible");
    setTipoCombustible(res.data);
  };

  const SelectInputCombustible = () => {
    const options = tipoCombustible.map((item, i) => ({
      value: i,
      label: item.combustible_type,
    }));
    return <SelectInputV options={options} />;
  };
  const getTypeCarroceria = async () => {
    const res = await Axios.get("http://localhost:3005/selectcarroceria");
    setTipoCarroceria(res.data);
  };

  const SelectInputCarroceria = () => {
    const options = tipoCarroceria.map((item, i) => ({
      value: i,
      label: item.carroceria_type,
    }));
    return <SelectInputV options={options} />;
  };

  return (
    <ContainerRegisterV>
      <ContainFormV>
        <ContainTitle>
          <TitleH1>Formulario registro Vehiculos</TitleH1>
        </ContainTitle>
        <FormV onSubmit={handleSubmit}>
          <ContainH2>
            <TitleH2>Datos del vehiculo</TitleH2>
          </ContainH2>

          <ContainLablSelect>
            <ContainLabel>
              <Label>Tipo de vehiculo:</Label>
            </ContainLabel>
            <ContainSelect>
              <SelectInputVehicle />
            </ContainSelect>
          </ContainLablSelect>

          <Input
            type="text"
            placeholder="Placa carro"
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Tarjeta de propiedad carro"
            onChange={(e) => setTarjetaPropiedad(e.target.value)}
            required
            onInput={(evt) => acceptNum(evt)}
            maxLength={15}
          />
          <Input
            type="text"
            placeholder="Marca carro"
            onChange={(e) => setMarca(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Modelo carro"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            onInput={(evt) => acceptNum(evt)}
            maxLength={10}
            required
          />
          <Input
            type="text"
            placeholder="Cilindraje carro"
            onChange={(e) => setCilindraje(e.target.value)}
            onInput={(evt) => acceptNum(evt)}
            maxLength={15}
            required
          />
          <Input
            type="text"
            placeholder="Color"
            onChange={(e) => setColor(e.target.value)}
            required
          />

          <ContainLablSelect>
            <ContainLabel>
              <Label>Tipo de combustible:</Label>
            </ContainLabel>
            <ContainSelect>
              <SelectInputCombustible />
            </ContainSelect>
          </ContainLablSelect>
          <ContainLablSelect style={{ marginTop: "10px" }}>
            <ContainLabel>
              <Label>Tipo de carrocería:</Label>
            </ContainLabel>
            <ContainSelect>
              <SelectInputCarroceria />
            </ContainSelect>
          </ContainLablSelect>

          <Button type="submit">Enviar</Button>
        </FormV>
      </ContainFormV>
    </ContainerRegisterV>
  );
};

export default FormularioVehiculo;
