import { useEffect, useState } from "react";
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

import { SelectOption } from "../../InventoryControl/Pages/style/styleInventory";
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
    return <SelectOption options={options} />;
  };
  
  useEffect(() => {
    getTypeVehicle();
    getTypeCombustible();
    getTypeCarroceria();
  }, [setTipoVehiculo,setTipoCombustible, setTipoCarroceria]);

  const getTypeCombustible = async () => {
    const res = await Axios.get("http://localhost:3005/selectcombustible");
    setTipoCombustible(res.data);
  };
  
  const SelectInputCombustible = () => {
    const options = tipoCombustible.map((item, i) => ({
      value: i,
      label: item.combustible_type,
    }));
    return <SelectOption options={options} />;
  };
  const getTypeCarroceria = async () => {
    const res = await Axios.get("http://localhost:3005/selectcombustible");
    setTipoCarroceria(res.data);
  };
  
  const SelectInputCarroceria = () => {
    const options = tipoCarroceria.map((item, i) => ({
      value: i,
      label: item.combustible_type,
    }));
    return <SelectOption options={options} />;
  };


  return (
    <ContainerRegister>
      <ContainForm>
        <ContainTitle>
          <TitleH1>Formulario registro Vehiculos</TitleH1>
        </ContainTitle>
        <Form onSubmit={handleSubmit}>
          <SelectInputVehicle/>
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
                <SelectInputCombustible/>
              
            </ContainLablSelect>
            <ContainLablSelect>
              <Label>Tipo de carrocería:</Label>
              <SelectInputCarroceria/>
            </ContainLablSelect>
          </ContainSelect>

          <Button type="submit">Enviar</Button>
        </Form>
      </ContainForm>
    </ContainerRegister>
  );
};

export default FormularioVehiculo;
