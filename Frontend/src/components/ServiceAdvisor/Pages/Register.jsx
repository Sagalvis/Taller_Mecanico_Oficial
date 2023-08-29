import { useState } from "react";
import { ContainerRegister } from "./styles/styledRegister";

const RegisterAdvisor = () => {

  const FormularioRegistro = () => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes realizar las acciones necesarias con los datos del formulario
      console.log("Formulario enviado:", {
        nombre,
        apellidos,
        correo,
        numeroDocumento,
        direccion,
        telefono
      });
      // Limpia los campos del formulario
      setNombre("");
      setApellidos("");
      setCorreo("");
      setNumeroDocumento("");
      setDireccion("");
      setTelefono("");
    };

    return (
      <form onSubmit={handleSubmit}>
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
        
        <button type="submit">Enviar</button>
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