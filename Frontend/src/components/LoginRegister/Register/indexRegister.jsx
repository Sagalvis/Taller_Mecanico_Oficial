import {
  ContainerButtonLogin,
  FormBox,
  InputBox,
  LoginButton,
  Section,
} from "./styledRegister";

const Register = () => {


return (
  <Section>
    <FormBox>
        <h2>REGISTER</h2>
        <InputBox>
          <i className="fa-solid fa-person"></i>
          <input type="text" required />
          <label>Name</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-person"></i>
          <input type="text" required />
          <label>Last Name</label>
        </InputBox>
        <InputBox>
        <i className="fa-solid fa-mobile"></i>
          <input type="phone" required />
          <label>Phone</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-users-gear"></i>
          <input type="text" required />
          <label>Rol</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-envelope"></i>
          <input type="email" required />
          <label>Email</label>
        </InputBox>
        <InputBox>
          <i className="fa-solid fa-lock"></i>
          <input type="password" required />
          <label>Password</label>
        </InputBox>
        <ContainerButtonLogin>
          <LoginButton>Sign Up</LoginButton>
        </ContainerButtonLogin>
      
    </FormBox>
  </Section>
);
};

export default Register;