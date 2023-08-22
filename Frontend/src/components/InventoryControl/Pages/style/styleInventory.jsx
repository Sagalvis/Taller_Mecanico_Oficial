import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  width: 98%;
  height: 100vh;
`;

export const ContainerVistas = styled.div`
  width: 50%;
  height: 95vh;
  border: solid black 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const Tarjetas = styled.div`
  width: 80%;
  height: 100%;
  border: solid black 1px;
  overflow-x: hidden;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
`;

export const Tbody = styled.tbody`

`;

export const Td = styled.td`
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: gray;
`;