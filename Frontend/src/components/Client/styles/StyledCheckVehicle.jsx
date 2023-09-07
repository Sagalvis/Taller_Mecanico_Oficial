import styled from 'styled-components';

export const ContainerCheck = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  height: 91vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const LogoCheck = styled.div`
  display: flex;
  width: 30%;
  height: 18vh;
  justify-content: center;
  background-color: #eee;
  border-radius: 4px;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
`;

export const Logo = styled.img`
  width: 100%;
  height: 20vh;
`;

export const Check = styled.div`
  background-color: #eee;
  padding: 1%;
  width: 45%;
  height: 30vh;
  border-radius: 4px;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
  overflow-y: scroll;
`;

export const ContainH2 = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const ChkH2 = styled.h2`
`;

export const LogContainer = styled.div`
  width: 100%;
  height: 20%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  background-color: #e0e0e0;
`;

export const Tbody = styled.tbody`
  font-size:.9rem;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  a {
    text-decoration: none;
    color: red;
    font-weight: 600;
  }
`;