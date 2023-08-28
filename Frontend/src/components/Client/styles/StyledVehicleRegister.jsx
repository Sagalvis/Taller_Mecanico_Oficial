import styled from 'styled-components';

export const ContainerVReg = styled.div`
  display: flex; 
  background-color: green;
  flex-direction: column;
  width: 100%;
  height: 91vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ContainRegisters = styled.div`
  background-color: #eee;
  text-align: center;
  padding: 1%;
  width: 50%;
  height: 80vh;
  border-radius: 4px;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
  overflow-y: scroll;
`;