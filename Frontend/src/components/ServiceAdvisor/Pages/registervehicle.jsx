import { useState } from "react";
import { ContainerRegister } from "./styles/styledRegister";


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

  const handleTipoVehiculoChange = (e) => {
    setTipoVehiculo(e.target.value);
  };

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
      tipoCarroceria
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
    <h1>Formulario registro Vehiculos</h1>
    <form onSubmit={handleSubmit}>
      <label>Tipo de vehículo:</label>
      <select
        value={tipoVehiculo}
        onChange={handleTipoVehiculoChange}
        required
      >
        <option value="">Selecciona una opción</option>
        <option value="carro">Carro</option>
        <option value="moto">Moto</option>
      </select>

      {tipoVehiculo === "carro" && (
        <>
          <input
            type="text"
            placeholder="Placa carro"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Tarjeta de propiedad carro"
            value={tarjetaPropiedad}
            onChange={(e) => setTarjetaPropiedad(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Marca carro"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Modelo carro"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Cilindraje carro"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
            required
          />
          <label>Tipo de combustible:</label>
          <select
            value={tipoCombustible}
            onChange={(e) => setTipoCombustible(e.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="diesel">Diesel</option>
            <option value="gasolina">Gasolina</option>
          </select>
        </>
      )}

      {tipoVehiculo === "moto" && (
        <>
          <input
            type="text"
            placeholder="Placa moto"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Tarjeta de propiedad moto"
            value={tarjetaPropiedad}
            onChange={(e) => setTarjetaPropiedad(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Marca moto"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Modelo moto"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Cilindraje moto"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
            required
          />
          <label>Tipo de combustible:</label>
          <select
            value={tipoCombustible}
            onChange={(e) => setTipoCombustible(e.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="gasolina">Gasolina</option>
            <option value="diesel">Diesel</option>
          </select>
        </>
      )}

      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
      />

      <label>Tipo de carrocería:</label>
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

      <button type="submit">Enviar</button>
    </form>
    </ContainerRegister>
  );
};

export default FormularioVehiculo;