import styled from "styled-components";

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
  flex-wrap: wrap;
  gap: 10px;
  padding: 0.5%;
  overflow-y: scroll;
  background-color: white;
  border-radius: 15px;
`;

export const ContainerForm = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
`;

export const ContainerInventory2 = styled.div`
  width: 100%;
  height: 8%;
`;

export const HeaderInventory2 = styled.div`
    width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  margin: 0%;
  align-items: center;
`;

export const TitleHeader = styled.div`
  font-family: 'Outfit', sans-serif;
  font-size: 50px;
  font-weight: bold;
`;

export const ButtonForm = styled.button`
  width: 15%;
  height: 40%;
  border-radius: 15px;
  border: 1px solid black;
  outline: none;
  cursor: pointer;
  background-color: black;
  color: white;
  transition: all .3s ease;
  font-weight: bold;
  &:hover{
    background-color: #ffffff;
    color: #000000;
  }

`;

export const SelectOption = styled.select`
    width: 15%;
  height: 40%;
  outline: none;
  border-radius: 15px;
  padding: .4%;
`
export const Option = styled.option`
  
`

export const SearchContainer = styled.div`
  width: 30%;
  height: 40%;
  border: 1px solid black;
  border-radius: 15px;
`;

export const SearchInventory = styled.input`

`
export const Tarjetas = styled.div`
  width: 100%;
  height: 5%;
  border-radius: 15px;
  display: flex;
  border-bottom: 1px solid #b6b6b6;
  border-top: 1px solid #b6b6b6;
  margin-top: 10px;
`;

export const ContainerTarjetas = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: s;
`;

export const TitleInfo = styled.div`
  width: 100%;
  height: 5%;
  background-color: #000000;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleIdProduct = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #b6b6b6;
`;

export const TitleNameProduct = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #b6b6b6;
`;
export const TitleQuantity = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitlePrice = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #b6b6b6;
`;
export const TitleAction = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #b6b6b6;
`;
export const IdProduct = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #b6b6b6;
`;

export const NameProduct = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #b6b6b6;
`;

export const Quantity = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Price = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #b6b6b6;
`;

export const IconAction = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #b6b6b6; 
`;

export const Icon = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;
