import styled from 'styled-components';

export const ContainerRegister = styled.div`
  width: 97%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
  width: 350px;
  height: 100%;
  border-radius: 8px;
`;

export const TitleH1 = styled.h1`
  margin-bottom: 2rem;
  /* text-align: center; */
  color: #fff;
`;

export const ContainForm = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  width: 60%;
  height: 60%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;

export const ContainH2 = styled.div`
  background-color: #000;
  color: #fff;
  width: 84%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;

export const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 80%  ;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: 'Consolas';
  background-color: #eee;
  color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  transition: box-shadow 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  }
  &::placeholder {
    color: #999;
    font-family: 'Consolas';
    text-transform: lowercase;
    font-size: .9rem;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #222;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #222;
  }
  
  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(1px);
  }
`;