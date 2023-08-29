import { useState } from "react";
import {
  ContainForm,
  ContainerRegister,
  Form,
  Input,
  Button,
  TitleH1,
} from "./styles/styledRegister";

import axios from "axios";

const RegisterAdvisor = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    if (
      nombre === "" ||
      apellidos === "" ||
      correo === "" ||
      numeroDocumento === "" ||
      direccion === "" ||
      telefono === ""
    ) {
      e.preventDefault();
      alert("no se pudo registrar el cliente llena los campos");
    } else {
      await axios.post("http://localhost:3005/advisor", {
          name: nombre,
          last_name: apellidos,
          email: correo,
          identification: numeroDocumento,
          adress: direccion,
          phone: telefono,
        })
        .then((Response) => {
          console.log(Response.data);
          alert("cliente registrado");
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
    <ContainerRegister>
      <ContainForm>
        <div style={{ width: "40%", height: "30%", backgroundColor: "#000", justifyContent: 'center'}}>
          <TitleH1>Formulario registro clientes</TitleH1>
        </div>
        <div>
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
          <Button type="submit" onClick={handleSubmit}>
            Enviar
          </Button>
        </div>
      </ContainForm>
    </ContainerRegister>
  );
};

export default RegisterAdvisor;
