import styled, {keyframes} from "styled-components";

export const FormContainer = styled.form`
    width: 700px;
    min-height: 200px;
    position: relative;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    border-radius: 5px;
    background-color: white;
    flex-direction: column;
`;
export const InputContainerForm = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;
`
export const InputArea = styled.div`
    
`;

export const Input = styled.input`
    width: 120px;
    border: 2px solid #0a0a0a;
    border-radius: 5px;
    height: 40px;
    padding: 0 5%;
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    &::placeholder {
        font-size:.9rem;
        
    }
`;


export const Button = styled.button`
  height: 50px;
  border: 2px solid black;
  width: 200px;
  border-radius: 50px;
  color: #050505;
  font-size: 20px;
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  &:hover{
    color: white;
    background-color: black;
    transition: all .2s ease;
  }
`;

export const LoadingAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const LoadingBar = styled.div`
  width: 30%;
  height: 15px;
  border-radius: 50px;
  border: 2px solid black;
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ProgressBar = styled.div`
  height: 70%;
  width: 0%;
  border-radius: 50px;
  background-color: #000000;
  animation: ${LoadingAnimation} 1s linear forwards;
`;

export const SuccessMessageContainer = styled.div`
  border: 2px solid black;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SuccessMessage = styled.div`
  height: 85%;
  border: 2px solid black;
  width: 96%;
  border-radius: 50px;
  color: #ffffff;
  font-size: 15px;
  padding: 0;
  margin: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;