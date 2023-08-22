import {
  ContainerButtonLogin,
  FormBox,
  InputBox,
  LoginButton,
  Section,
} from "./styledRegister";
import { useState } from "react";
import Axios from 'axios'

const Register = () => {
  const [name, setname] = useState('')
  const [lastname, setlastname] = useState('')
  const [phone, setphone] = useState('')
  const [rol, setrol] = useState('')
  const [mail, setmail] = useState('')
  const [password, setpassword] = useState('')
  const [numEmployed, setnumEmployed] = useState('')

  const add = (event) => {
    event.preventDefault();
    if (name && lastname && phone && rol && mail && password) {
      Axios.post("http://localhost:3005/employed", {
        num_employed: numEmployed,
        name_employed: name,
        lastname_employed: lastname,
        phone: phone,
        rol: rol,
        mail: mail,
        password: password
      });
      
    }
  };
//-----------------------------------------------//
return (
  <Section>
    <FormBox>
        <h2>REGISTER</h2>
        <InputBox>
          <i className="fa-solid fa-person"></i>
          <input type="text" required onChange={e => setname(e.target.value)} />
          <label>Name</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-person"></i>
          <input type="text" required onChange={e => setnumEmployed(e.target.value)} />
          <label>number</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-person"></i>
          <input type="text" required onChange={e => setlastname(e.target.value)} />
          <label>Last name</label>
        </InputBox>
        <InputBox>
        <i className="fa-solid fa-mobile"></i>
          <input type="phone" required onChange={e => setphone(e.target.value)} />
          <label>Phone</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-users-gear"></i>
          <input type="text" required onChange={e => setrol(e.target.value)}/>
          <label>Rol</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-envelope"></i>
          <input type="email" required onChange={e => setmail(e.target.value)} />
          <label>Email</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-lock"></i>
          <input type="password" required onChange={e => setpassword(e.target.value)} />
          <label>Password</label>
        </InputBox>
        <ContainerButtonLogin>
          <LoginButton onClick={add}>Sign Up</LoginButton>
        </ContainerButtonLogin>
      
    </FormBox>
  </Section>
);
};

export default Register;