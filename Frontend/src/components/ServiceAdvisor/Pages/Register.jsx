import { useState } from "react";
import { ContainerRegister } from "./styles/styledRegister";

const RegisterAdvisor = () => {

  const FormularioRegistro = () => {
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [direccion, setDireccion] = useState("");
  
    const handleTipoDocumentoChange = (e) => {
      setTipoDocumento(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes realizar las acciones necesarias con los datos del formulario
      console.log("Formulario enviado:", {
        nombre,
        apellidos,
        correo,
        tipoDocumento,
        numeroDocumento,
        direccion
      });
      // Limpia los campos del formulario
      setNombre("");
      setApellidos("");
      setCorreo("");
      setTipoDocumento("");
      setNumeroDocumento("");
      setDireccion("");
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
        <select
          value={tipoDocumento}
          onChange={handleTipoDocumentoChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="cc">Cédula de ciudadanía</option>
          <option value="ce">Cédula de extranjería</option>
        </select>
        {tipoDocumento && (
          <input
            type="number"
            placeholder="Número de documento"
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            required
          />
        )}
        
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