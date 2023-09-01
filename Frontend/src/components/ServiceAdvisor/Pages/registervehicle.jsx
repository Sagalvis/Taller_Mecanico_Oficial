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
  const [cedula, setCedula] = useState([]);
  const [tipoCarroceria, setTipoCarroceria] = useState([]);
  const [tipoCombustible, setTipoCombustible] = useState([]);
  const [placa, setPlaca] = useState("");
  const [tarjetaPropiedad, setTarjetaPropiedad] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [color, setColor] = useState("");
  const [kilometraje, setKilometraje] = useState("");
  const [motor, setMotor] = useState("");
  const [option1, setOption1] = useState([]);
  const [option2, setOption2] = useState([]);
  const [option3, setOption3] = useState([]);

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log("Formulario enviado:", {
      tipoVehiculo,
      cedula,
      placa,
      tarjetaPropiedad,
      marca,
      modelo,
      cilindraje,
      tipoCombustible,
      color,
      tipoCarroceria,
      motor,
      kilometraje,
      option1,
      option2,
      option3,
    });
    // Limpia los campos del formulario
    setTipoVehiculo("");
    setCedula("");
    setPlaca("");
    setTarjetaPropiedad("");
    setMarca("");
    setModelo("");
    setCilindraje("");
    setTipoCombustible("");
    setColor("");
    setTipoCarroceria("");
    setMotor("");
    setKilometraje("");
  };


  // label para el  tipo de vehiculo
  const getTypeVehicle = async () => {
    const res = await Axios.get("http://localhost:3005/selectvechicle");
    setTipoVehiculo(res.data);
  };

  const SelectInputVehicle = () => {
    const options = tipoVehiculo.map((item, i) => ({
      value: i,
      label: item.type_vehicle,   

    }));
    console.log("variable option vehicle:", options)
    return <SelectInputV options={options} />;

  };

  const SelectIdVehicle = () => {
    const options = tipoVehiculo.map((item, i) => ({
      value: i,
      label: item.idtype_vehicle,
  }))
   return setOption1(SelectIdVehicle(options))
}
  console.log(option1)
 
  
  // label para el combustible
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
  const SelectIdCombustible = () => {
    const options = tipoCombustible.map((item, i) => ({
      value: i,
      label: item.id_combustible,
  }))
   return setOption2(SelectIdCombustible(options))
 }
  // label para el carroceria
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

  const SelectIdCarroceria = () => {
    const options = tipoCombustible.map((item, i) => ({
      value: i,
      label: item.id_combustible,
  }))
   return setOption3(SelectIdCarroceria(options))
 }
 console.log(option3);

  useEffect(() => {
    getTypeVehicle();
    getTypeCombustible();
    getTypeCarroceria();
  }, [setTipoVehiculo, setTipoCombustible, setTipoCarroceria]);

  const add = async (evt) => {
    evt.preventDefault();
  
    if (
      tipoVehiculo === "" ||
      cedula === "" ||
      placa === "" ||
      tarjetaPropiedad === "" ||
      marca === "" ||
      modelo === "" ||
      cilindraje === "" ||
      tipoCombustible === "" ||
      color === "" ||
      tipoCarroceria === "" ||
      motor === "" ||
      kilometraje === ""
    ) {
      alert("Todos los campos son obligatorios");
      return; // Sale de la función si los campos están vacíos
    } else {
      try {
        const response = await Axios.post(
          "http://localhost:3005/registervehicle/register",
          {
            identification: cedula,
            idtype_vehicle: option1,
            matricula: placa,
            propierty_card: tarjetaPropiedad,
            brand: marca,
            model: modelo,
            cylinder_cm: cilindraje,
            id_combustible: option2,
            color: color,
            id_carroceria: option3,
            num_motor: motor,
            kilometraje: kilometraje,
          }
          
        );
        console.log(response.data);
        alert("Automóvil registrado exitosamente");
        window.location.reload();
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("No se pudo enviar el formulario");
      }
    }
  };

  return (
    <ContainerRegisterV>
      <ContainFormV>
        <ContainTitle>
          <TitleH1>Registro de vehículos</TitleH1>
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
            placeholder="Documento de identidad"
            onChange={(e) => setCedula(e.target.value)}
            required
            onInput={(evt) => acceptNum(evt)}
            maxLength={15}
          />

          <Input
            type="text"
            placeholder="Placa"
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Tarjeta de propiedad carro"
            onChange={(e) => setTarjetaPropiedad(e.target.value)}
            required
            onInput={(evt) => acceptNum(evt)}
            maxLength={12}
          />
          <Input
            type="text"
            placeholder="Marca"
            onChange={(e) => setMarca(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            onInput={(evt) => acceptNum(evt)}
            maxLength={4}
            required
          />
          <Input
            type="text"
            placeholder="Cilindraje"
            onChange={(e) => setCilindraje(e.target.value)}
            onInput={(evt) => acceptNum(evt)}
            maxLength={5}
            required
          />
          <Input
            type="text"
            placeholder="Color"
            onChange={(e) => setColor(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="numero del motor"
            onChange={(e) => setMotor(e.target.value)}
            maxLength={15}
            required
          />  
          <Input
            type="text"
            placeholder="kilometraje"
            onChange={(e) => setKilometraje(e.target.value)}
            onInput={(evt) => acceptNum(evt)}
            maxLength={30}
            required
          />  
          <ContainLablSelect>
            <ContainLabel>
              <Label>Tipo de combustible: </Label>
            </ContainLabel>
            <ContainSelect>
              <SelectInputCombustible />
            </ContainSelect>
          </ContainLablSelect>
          <ContainLablSelect style={{ marginTop: "10px" }}>
            <ContainLabel>
              <Label>Tipo de carrocería: </Label>
            </ContainLabel>
            <ContainSelect>
              <SelectInputCarroceria  />
            </ContainSelect>
          </ContainLablSelect>

          <Button type="submit" onClick={add}>Enviar</Button>
        </FormV>
      </ContainFormV>
    </ContainerRegisterV>
  );
};

export default FormularioVehiculo;
