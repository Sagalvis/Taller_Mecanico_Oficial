import styled from 'styled-components';

export const ContainerEntrada = styled.div`
  width: 97%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



export const TitleH1 = styled.h1`
  margin-bottom: 2rem;
  /* text-align: center; */
  color: #fff;
`;

export const ContainForm = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffffb7;
  gap: .4rem;
  padding: 1rem;
  width: 65%;
  height: 90%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  
`;

export const ContainH2 = styled.div`
background: #005AA7;  
background: -webkit-linear-gradient(to right, #FFFDE4, #005AA7);  
background: linear-gradient(to right,  #005AA7, #79a1df); 
  color: #fff;
  width: 50%;
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
  justify-content: center;
  width: 38%;
  flex-direction: column;
  gap: 1rem;
  /* background-color: salmon; */
`;

export const ContainCC = styled.div`
  display: flex;
`;

export const InputCC = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
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
    font-family: 'consolas';
    font-size: .9rem;
  }
`;

export const Input = styled.input`
  width: 80%  ;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
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
    font-family: 'Outfit', sans-serif;
    font-size: .9rem;
  }
`;

export const TextArea = styled.textarea`
  
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #79a1df;
  border: 2px solid #005AA7;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  font-size: 13px;

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
  .fa-magnifying-glass {
    font-size: 14px;
  }
`;


// ESTILOS ORDEN DE REPARACION

// export const ContainRepair = styled.div`
//   background-color: green;
//   padding: 10px;
//   width: 70%;
//   height: 100%;
// `;

// export const H2 = styled.h2`
  
// `;