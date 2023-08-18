import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContainerVistas = styled.div`
  width: 50%;
  height: 50%;
  border: solid black 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const Tarjetas = styled.div`
  width: 80%;
  height: 20%;
  border: solid black 1px;
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

export const Tbody = styled.tbody``;
export const Td = styled.td`
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props)=> (props.width ? props.width : "auto")};
`;