import styled from 'styled-components';

export const ContainerVReg = styled.div`
  display: flex; 
  /* background-color: green; */
  flex-direction: column;
  width: 100%;
  height: 91vh;
  justify-content: center;
  align-items: center;
`;

export const ContainRegisters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dcdcdc;
  padding: 1%;
  width: 50%;
  height: 80vh;
  border-radius: 4px;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Registers = styled.div`
  width: 85%;
  height: 30%; //18%
  margin-top: 1.2rem;
  padding: .7rem;
  background-color: #fff;
  border-radius: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
`;

export const InfoStatus = styled.div`
  /* background-color: #fff; */
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  font-weight: 500;
  
`;

export const Statustext = styled.p`
  margin: 0;
`;

export const InfoVehicle = styled.div`
  display: flex;
  flex-direction: column;
  .info {
    display: flex;
    margin-bottom: 1rem;
  }
`;

export const ContainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .5rem;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 500;
  margin: 0 6.4rem 0 0;
`;

export const InfoText = styled.p`
  margin: 0;
`;
