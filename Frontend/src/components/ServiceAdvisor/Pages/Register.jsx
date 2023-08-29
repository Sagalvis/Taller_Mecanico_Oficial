import { useState } from "react";
import { ContainForm, ContainerRegister, Form, Input, Button, TitleH1 } from "./styles/styledRegister";

const RegisterAdvisor = () => {
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
        telefono,
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
    <ContainerRegister>

      <ContainForm>
        <div style={{width: '40%', height: '30%', backgroundColor: '#000'}}>
      <TitleH1>Formulario registro clientes</TitleH1>
      </div>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Número de documento"
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            required
          />
          <Input
            type="phone"
            placeholder="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />

          <Button type="submit">Enviar</Button>
        </Form>
      </ContainForm>
    </ContainerRegister>
  );
};

export default RegisterAdvisor;
