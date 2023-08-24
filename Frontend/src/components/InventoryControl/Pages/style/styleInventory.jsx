import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  width: 97%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderContainerInv = styled.div`
  width: 100%;
  height: 5%;
`;

export const HeaderInventory = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
`;
export const ContainerVistas = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: .5%;
  justify-content: space-around;
  background-color: white;
  border-radius: 15px;
  overflow-y: scroll;
`;

export const ContainerForm = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tarjetas = styled.div`
  width: 80%;
  height: 100px;
  border-radius: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #eee;
`;

export const Containerinfo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const IdProduct = styled.div`

`;
export const NameProduct = styled.div`

`;
export const Quantity = styled.div`

`;
export const Price = styled.div`
`;

export const Icon = styled.i`
  cursor: pointer;
`


