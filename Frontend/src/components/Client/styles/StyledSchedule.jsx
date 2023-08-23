import styled from 'styled-components';

export const InfoForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #eee;
  width: 25%;
  height: 45vh;
  padding: .5rem;
  border-radius: 5px;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
`;

export const AgendaTitle = styled.h1`
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2222222b;
    box-shadow: 0 0 5px #2222222b;
  }
  &::placeholder {
    font-size: .9rem;
    font-family: 'Outfit', sans-serif;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 9px;
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