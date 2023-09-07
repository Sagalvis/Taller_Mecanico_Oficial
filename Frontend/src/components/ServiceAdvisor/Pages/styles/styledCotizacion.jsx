import styled from "styled-components";

export const ContainFactura = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 10px;
`;

export const FacturaContain = styled.div`
  background-color: #ffffff9d;
  width: 40%;
  height: 90%;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;

export const ContainerInfoCliente = styled.div`
  display: flex;
`
export const InfoClient = styled.div`
  display: flex;
  text-align: center;
  width: 50%;
  height: 18%;
  margin-top: 5px;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: red; */
  margin-bottom: 5px;
`;
export const ContainInfor = styled.div`
  display:flex ;
  align-items: center;
  width: auto;
  /* background-color: #08eeee; */
  height: 20px;
  gap:10px;
`
export const InputDoc = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`

export const InforP1 = styled.p`
  margin: 0;
  font-weight: bold;
`
export const ContainProducts = styled.div`
  /* background-color: red; */
  margin-top: 5px;
  width: 100%;
  height: 59%;
`
export const ContainTittlePorductFactura = styled.div`
  width: 98.6%;
  height: 40px;
  background-color: black;
  display: flex;
  align-items: center;

`
export const TittleFacturaProduct = styled.div`
  color: white;
  border-right: 2px solid white;
  width: 30%;
  display: flex;
  align-items: center ;
  justify-content: center;
  height: 100%;

`

export const ContainProdutSuma = styled.div`
  width: 99.7%;
  height: 400px;
  overflow: auto;
  /* background-color: green; */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 4px;
  }
  `
export const ContenPorductSuma  = styled.div` 
  height: auto;

`