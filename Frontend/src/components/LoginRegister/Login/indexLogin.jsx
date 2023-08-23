import { useState } from "react";
import {
  ContainerButtonLogin,
  FormBox,
  InputBox,
  LoginButton,
  Section,
  Message,
} from "./styledLogin";
import Axios from "axios";

const Login = () => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const Log = async (evt) => {
    evt.preventDefault();
    setError(null);
    if (mail && password) {
      try {
        const response = await Axios.post(
          "http://localhost:3005/employed/login",
          {
            mail: mail,
            password: password,
          }
        ).then((response) => {
          const user = response.data;
          console.log(user);
          if (!user) {
            alert("El usuario no existe");
          } else {
            const { rol } = user;
            switch (rol) {
              case "caja":
                window.location.href = "http://localhost:5173/advisor";
                break;
              case "administrador":
                window.location.href = "http://localhost:5173/admin";
                break;
              case "logistica":
                window.location.href = "http://localhost:5173/inventory";
                break;
              default:
                alert("Rol no reconocido");
            }
          }
        });
      } catch (error) {
        console.error(error);
        alert("Usuario y/o contraseña no validos");
      }
    } else {
      setError(
        "Usuario y/o contraseña no ingresados, por favor ingrese los campos requeridos"
      );
    }
  };
  return (
    <Section>
      <FormBox>
        <h2>LOGIN</h2>
        <Message className="message">{error}</Message>
        <InputBox>
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-lock"></i>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </InputBox>
        <ContainerButtonLogin>
          <LoginButton onClick={Log}>Sign In</LoginButton>
        </ContainerButtonLogin>
      </FormBox>
    </Section>
  );
};

export default Login;
