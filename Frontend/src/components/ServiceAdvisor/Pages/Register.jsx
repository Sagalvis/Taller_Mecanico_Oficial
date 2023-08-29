import { useState } from "react";
import { ContainerRegister } from "./styles/styledRegister";
import axios from "axios";

const RegisterAdvisor = () => {

  const FormularioRegistro = () => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");


    const handleSubmit = async (e) => {
      if (nombre === '' || apellidos === '' || correo === '' || numeroDocumento === '' || direccion  === ''|| telefono === ''){
        e.preventDefault();
        alert('no se pudo registrar el cliente llena los campos');
      } else{
          await axios.post('http://localhost:3005/advisor',{
              name :nombre,
              last_name :apellidos,
              email :correo,
              identification  :numeroDocumento,
              adress :direccion,
              phone  :telefono
      }).then(Response =>{
        console.log(Response.data)
        alert("cliente registrado")
      });
      }
      // Limpia los campos del formulario
      setNombre("");
      setApellidos("");
      setCorreo("");
      setNumeroDocumento("");
      setDireccion("");
      setTelefono("");
    };

    return (
      <form>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
          <input
            type="number"
            placeholder="Número de documento"
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            required
          />
          <input
            type="phone"
            placeholder="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    );
  };
  return ( 
    <ContainerRegister>
      <h1>Formulario registro clientes</h1>
      <FormularioRegistro/>
    </ContainerRegister>
  );
}

export default RegisterAdvisor;