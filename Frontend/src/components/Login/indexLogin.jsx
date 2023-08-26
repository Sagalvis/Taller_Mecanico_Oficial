import { useState } from "react";
import {
  ContainerSignInSignUp,
  ContainerLogin,
  ContainerSignUp,
  FormSignUpIn,
  InputSignUpIn,
  TitleSignUpIn,
  ContainerSignIn,
  ButtonSignUpIn,
  ForgotSignIn,
  ContainerOverLay,
  OverLay,
  Paragraph,
  ButtonGhost,
  LeftOver,
  RightOver,
  BoxInput,
} from "./styledLogin";
import Axios from "axios";
import { BsFillPersonFill, BsFillPhoneFill } from "react-icons/bs";
import { MdPassword, MdEmail } from "react-icons/md";

const Login = () => {
  const [signIn, toggle] = useState("true");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");

  const add = (evt) => {
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
  };

  const getprofile = (evt) => {
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
          window.location.href = "http://localhost:5173/";
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error en la solicitud");
      });
  };

  return (
    <ContainerLogin>
      <ContainerSignInSignUp>
        {/* ---INICIO CONTENEDOR DE SIGN UP--- */}
        <ContainerSignUp $signinin={signIn.toString()}>
          <FormSignUpIn>
            <TitleSignUpIn>Create Account</TitleSignUpIn>

            <BoxInput>
              <InputSignUpIn
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
                required
              ></InputSignUpIn>
              <BsFillPersonFill style={{ color: "#0000003d" }} />
            </BoxInput>

            <BoxInput>
              <InputSignUpIn
                type="text"
                placeholder="Lastname"
                onChange={(e) => setLastname(e.target.value)}
                autoComplete="off"
                required
              ></InputSignUpIn>
              <BsFillPersonFill style={{ color: "#0000003d" }} />
            </BoxInput>

            <BoxInput>
              <InputSignUpIn
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></InputSignUpIn>
              <MdEmail style={{ color: "#0000003d" }} />
            </BoxInput>

            <BoxInput>
              <InputSignUpIn
                type="number"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
                required
              ></InputSignUpIn>
              <BsFillPhoneFill
                style={{ color: "#0000003d", marginBottom: "2px" }}
              />
            </BoxInput>

            <BoxInput>
              <InputSignUpIn
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></InputSignUpIn>
              <MdPassword style={{ color: "#0000003d" }} />
            </BoxInput>

            <BoxInput>
              <InputSignUpIn
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setRepassword(e.target.value)}
                required
              ></InputSignUpIn>
              <MdPassword style={{ color: "#0000003d" }} />
            </BoxInput>
            <ButtonSignUpIn type="submit" onClick={add}>
              Sign Up
            </ButtonSignUpIn>
          </FormSignUpIn>
        </ContainerSignUp>
        {/* ---FINAL CONTENEDOR DE SIGN UP--- */}

        {/* ---INICIO CONTENEDOR DE SIGN IN--- */}
        <ContainerSignIn $signinin={signIn.toString()}>
          <FormSignUpIn>
            <TitleSignUpIn>Login your account.</TitleSignUpIn>

            <BoxInput>
              <InputSignUpIn
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></InputSignUpIn>
              <MdEmail style={{ color: "#0000003d" }} />
            </BoxInput>

            <BoxInput>
              <InputSignUpIn
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></InputSignUpIn>
              <MdPassword style={{ color: "#0000003d" }} />
            </BoxInput>
            <ForgotSignIn href="#">Forgot your password?</ForgotSignIn>
            <ButtonSignUpIn onClick={getprofile}>Sign in Now</ButtonSignUpIn>
          </FormSignUpIn>
        </ContainerSignIn>
        {/* ---FINAL CONTENEDOR DE SIGN IN--- */}

        <ContainerOverLay $signinin={signIn.toString()}>
          <OverLay $signinin={signIn.toString()}>
            <LeftOver $signinin={signIn.toString()}>
              <TitleSignUpIn>Welcome Back!</TitleSignUpIn>
              <Paragraph>
                To keep connected with us please login with your presonal info
              </Paragraph>
              <ButtonGhost onClick={() => toggle(true)}>Sign In</ButtonGhost>
            </LeftOver>

            <RightOver $signinin={signIn.toString()}>
              <TitleSignUpIn>Hi, My Friends.</TitleSignUpIn>
              <Paragraph>Do not have an account?</Paragraph>
              <Paragraph>Do not worry register now</Paragraph>
              <ButtonGhost onClick={() => toggle(false)}>Sign Up</ButtonGhost>
            </RightOver>
          </OverLay>
        </ContainerOverLay>
      </ContainerSignInSignUp>
    </ContainerLogin>
  );
};

export default Login;
