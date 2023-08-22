import styled from 'styled-components';

export const ContainerHome = styled.div`
  margin: 0;
  width: 81.8rem;
  height: 100vh ;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardsHeader = styled.div`
  width: 99%;
  height: 70px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsMain = styled.div`
  width: 99%;
  height: auto;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;

`;

export const CustomerCards = styled.div`
  width: 300px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const CustomerName = styled.div`
  margin: 0;
  border-radius: 20px;
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 400;
`;

export const CustomerNumber = styled.div`
  height: 70%;
  border-radius: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
`;
