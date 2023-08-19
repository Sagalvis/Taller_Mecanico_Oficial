import { useState } from "react"; 
import {
  ContainerButtonLogin,
  FormBox,
  InputBox,
  LoginButton,
  Section,
} from "./styledLogin";
import Axios from "axios"; 

const Login = () => {
  /* const [signIn, toggle] = useState("true");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState(""); */

  /*   const add = (evt) => {
    if (password !== repassword) {
      alert("Las contraseñas no coinciden");
      evt.preventDefault();
    } else if (name && lastname && email && password && repassword && phone) {
      Axios.post("http://localhost:3005/profile", {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        repassword: repassword,
        phone: phone,
      });
    }
  }; */

  /*   const getprofile = (evt) => {
    evt.preventDefault();
    Axios.post("http://localhost:3005/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data == "") {
          alert("el usuario no existe");
        } else {
          window.location.href = "http://localhost:5173/admin";
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error en la solicitud");
      });
  }; */

  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Log = async(evt) =>{
    evt.preventDefault()
    if (mail && password) {
      Axios.post("http://localhost:5173/login", {
        mail: mail,
        password: password,
      })
      .then((response) => {
          console.log(response.data);
          if (response.data == "") {
            alert("el usuario no existe");
          } else {
            window.location.href = "http://localhost:5173/admin";
          }
        })
      .catch((error) => {
          console.error(error);
          alert("Error en la solicitud");
        });
    }
  }

  return (
    <Section>
      <FormBox>
          <h2>LOGIN</h2>
          <InputBox>
            <i className="fa-solid fa-envelope"></i>
            <input type="email" onChange={e =>setEmail(e.target.value)} required />
            <label>Email</label>
          </InputBox>
          <InputBox>
            <i className="fa-solid fa-lock"></i>
            <input type="password" onChange={e =>setPassword(e.target.value)} required />
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
