import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blue = '#333ddd';
const white = '#fff';

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: ${blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-weight: 700;
  padding-top: 50vh;
`;

const Button = styled.button`
  outline: 0;

  &.active {
    outline: 0;
  }
`;

const loaderAnimation = keyframes`
  0% {
    width: calc(0% - 4px);
  }
  100% {
    width: calc(100% - 4px);
  }
`;

const doneAnimation = keyframes`
  0% {
    transform: translateY(300%) scale(0);
  }
`;

const SendButton = styled(Button)`
  border: 2px solid ${white};
  color: white;
  border-radius: 50px;
  padding: 15px 80px;
  background: transparent;
  position: relative;
  overflow: hidden;
  transform: translateY(-50%);

  .text {
    &.active {
      transform: translateY(-350%) scale(0);
      transition: 0.35s cubic-bezier(0.34, -0.61, 1, 0.64);
    }
  }

  &.active {
    padding: 0px 80px;
    transition: 0.4s cubic-bezier(0.35, -0.77, 0.67, 1.88);
  }

  .loader {
    position: absolute;
    width: calc(0% - 4px);
    height: calc(100% - 4px);
    background-color: ${white};
    left: 2px;
    top: 2px;
    border-radius: 50px;
    animation: ${loaderAnimation} 1.3s ease-in-out 0.5s;

    &.active {
      width: calc(100% - 4px);
      transition: 1.3s ease-in-out;
      transition-delay: 0.5s;
    }
  }

  .done {
    color: ${blue};
    margin-top: -20px;
    transform: translateY(300%) scale(0);
    animation: ${doneAnimation} 0.4s cubic-bezier(0.34, -0.61, 1, 0.64);
    &.active {
      transform: translateY(0%) scale(1);
      transition: 0.4s cubic-bezier(0.34, -0.61, 1, 0.64);
    }
  }

  &.finished {
    padding: 15px 80px;
    transition: 0.4s cubic-bezier(0.35, -0.77, 0.67, 1.88);
  }
`;

const SendButtonComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const animationState = localStorage.getItem('animationState');
    if (animationState === 'active') {
      setIsActive(true);
      setTimeout(() => {
        setIsFinished(true);
      }, 1700);
    }
  }, []);

  const handleClick = () => {
    setIsActive(true);
    setIsFinished(false);
    localStorage.setItem('animationState', 'active');
    setTimeout(() => {
      setIsFinished(true);
      localStorage.removeItem('animationState');
    }, 1700);
  };

  return (
    <Container>
      <SendButton
        className={`send ${isActive ? 'active' : ''} ${isFinished ? 'finished' : ''}`}
        onClick={handleClick}
      >
        <span className={`text ${isActive ? 'active' : ''}`}>SEND</span>
        <span className={`loader ${isActive ? 'active' : ''}`} />
        <span className={`done ${isFinished ? 'active' : ''}`}>SUCCESS</span>
      </SendButton>
    </Container>
  );
};

export default SendButtonComponent;