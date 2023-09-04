import styled from 'styled-components';
import Select from 'react-select'

export const ContainerEntrada = styled.div`
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
  background-color: #fff;
  gap: .4rem;
  padding: 1rem;
  width: 80%;
  height: 90%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;

export const ContainH2 = styled.div`
  background-color: #222;
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
  background-color: #222;
  color: white;
  width: 25%;
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
  .fa-magnifying-glass {
    font-size: 14px;
  }
`;

//ESTILOS DEL INVENTARIO DE LOS VEHICULOS
// INVENTARIO DE MOTOS
export const ContainInventarioBike = styled.div`
  width: 31%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  background-color: #dcdcdc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);

`;

export const ContainH2Bike = styled.div`
  background-color: #222;
  color: #fff;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;

export const TitleH2Bike = styled.h2`
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
`;

export const Thead = styled.thead`
`;

export const Tr = styled.tr`
  
`;

export const Th = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  border-radius: 4px;
`;

export const Tbody = styled.tbody`
  font-size:.8rem;
`;

export const Td = styled.td`
  padding: 5.4px;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid #ddd;
  
`;


// INVENTARIO DE AUTOS
export const ContainInventarioAuto = styled.div`
  width: 31%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  background-color: #dcdcdc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);

`;

export const ContainH2Auto = styled.div`
  background-color: #222;
  color: #fff;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;

export const TitleH2Auto = styled.h2`
  display: flex;
  justify-content: center;
`;

export const SelectEstado = styled(Select)`
  width: 100%;
  height: 20%;
`;