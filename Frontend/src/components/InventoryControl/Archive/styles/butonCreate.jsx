import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
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

const LoadingAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const LoadingBar = styled.div`
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

const ProgressBar = styled.div`
  height: 70%;
  width: 0%;
  border-radius: 50px;
  background-color: #000000;
  animation: ${LoadingAnimation} 1s linear forwards;
`;

const SuccessMessageContainer = styled.div`
  border: 2px solid black;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SuccessMessage = styled.div`
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



const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
    }, 1000);
  };

  return (
    <>
      {isSuccess ? (
        <SuccessMessageContainer>
          <SuccessMessage><h3>Creado con exito</h3></SuccessMessage>
        </SuccessMessageContainer>
      ) : (
        <>
          {isLoading ? (
            <LoadingBar>
              <ProgressBar />
            </LoadingBar>
          ) : (
            <Button onClick={handleClick}><h3>Enviar</h3></Button>
          )}
        </>
      )}
    </>
  );
};

export default MyComponent;