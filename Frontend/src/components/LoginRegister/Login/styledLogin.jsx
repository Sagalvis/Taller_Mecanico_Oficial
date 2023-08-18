import styled from 'styled-components';
import FondoLogin from "../../../Img/fondologin.jpg"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: url(${FondoLogin});
  background-position: center;
  background-size: cover;
`;

export const FormBox = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgb(255, 255, 255);
  }
  h2 {
    font-size: 2em;
    color: white;
    text-align: center;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 310px;
  border-bottom: 2px solid white;

  label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: white;
    font-size: 1em;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }

  input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: white;
  }

  .fa-solid{
    position: absolute;
    right: 8px;
    color: white;
    font-size: 1.2em;
    top: 20px;
  }
`;

export const ContainerButtonLogin = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  height: auto;
  & :hover{
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: white;
  height: 50px;
  border-radius: 20px;
  border: none;
  font-size: 23px;
  font-weight: 600;
  cursor: pointer;

`;








