import styled from "styled-components";

export const ContainMainOrder = styled.div`
  width: 98%;
  height: 100vh;
  /* background-color: #c92828; */
  display: flex;
  align-items: center;
`;

export const ContainOrder = styled.div`
  width: 50%;
  height: 100vh;
  /* background-color: #4e4e4e; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderMain = styled.div`
  width: 90%;
  height: 95%;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  background-color: #ffffff;
`;

export const TittleOrder = styled.div`
  /* background-color: blue; */
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #b4b4b4;
`;
export const TittleOrderNameParagraf = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* background-color: #006280; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TittleOrderName = styled.div`
  margin: 0;
  padding: 0;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TittleOrderParagraf = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: rebeccapurple; */
  p {
    margin: 0;
  }
`;
export const TitleOrderContainLogo = styled.div`
  height: 100%;
  /* background-color: green; */
  display: flex;
  align-items: center;
  img {
    width: 15rem;
    height: 5rem;
  }
`;
export const OrderConte = styled.div`
  
  height: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
`;
export const TextArea = styled.textarea`
  width: 90%;
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
    font-family: "Outfit", sans-serif;
    font-size: 0.9rem;
  }
`;

export const Productos = styled.div`
  width: 90%;
  padding: 12px;
  height: 19rem;
  border-radius: 4px;
  font-size: 1.5rem;
  background-color: #eee;
  color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
`;
export const ConteProductos = styled.div`
  height: 94%;
  padding: 12px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  overflow-y: scroll;
`;

export const InputMeca = styled.div`
  width: 90%;
  height: 20%;
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
    font-family: "Outfit", sans-serif;
    font-size: 0.9rem;
  }
`
export const OrderFirma = styled.div`
  background-color: #2182d6;
  border-radius: 15px;
  height: 12%;
`;
export const ContainHistorial = styled.div`
  width: 50%;
  height: 90vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HistorialMain = styled.div`
  width: 90%;
  height: 90%;
  background-color: #706f6f;
`;
