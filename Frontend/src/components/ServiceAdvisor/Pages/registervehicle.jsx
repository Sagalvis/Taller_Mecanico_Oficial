import { useState } from "react";
import {
  Button,
  ContainForm,
  ContainTitle,
  ContainerRegister,
  Form,
  Input,
  TitleH1,
} from "./styles/styledRegister";
import {
  ContainLablSelect,
  ContainSelect,
  Label,
} from "./styles/styledRegisterV";
/* import axios from "axios"; */

const FormularioVehiculo = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [tarjetaPropiedad, setTarjetaPropiedad] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [cilindraje, setCilindraje] = useState("");
  const [tipoCombustible, setTipoCombustible] = useState("");
  const [color, setColor] = useState("");
  const [tipoCarroceria, setTipoCarroceria] = useState("");

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

  return (
    <ContainerRegister>
      <ContainForm>
        <ContainTitle>
          <TitleH1>Formulario registro Vehiculos</TitleH1>
        </ContainTitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Tipo de vehiculo"
            value={tipoVehiculo}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Placa carro"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Tarjeta de propiedad carro"
            value={tarjetaPropiedad}
            onChange={(e) => setTarjetaPropiedad(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Marca carro"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Modelo carro"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Cilindraje carro"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
          <ContainSelect>
            <ContainLablSelect>
              <Label>Tipo de combustible:</Label>

              <select
                value={tipoCombustible}
                onChange={(e) => setTipoCombustible(e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="diesel">Diesel</option>
                <option value="gasolina">Gasolina</option>
              </select>
            </ContainLablSelect>
            <ContainLablSelect>
              <Label>Tipo de carrocería:</Label>
              <select
                value={tipoCarroceria}
                onChange={(e) => setTipoCarroceria(e.target.value)}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="sedan">Sedan</option>
                <option value="coupe">Coupe</option>
                <option value="sin_carroceria">Sin carrocería</option>
              </select>
            </ContainLablSelect>
          </ContainSelect>

          <Button type="submit">Enviar</Button>
        </Form>
      </ContainForm>
    </ContainerRegister>
  );
};

export default FormularioVehiculo;
