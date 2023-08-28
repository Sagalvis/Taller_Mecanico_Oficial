import styled from 'styled-components';

export const ContainService = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: row;
  justify-content: center;
  /* background-color: green; */
  align-items: center;
  width: 100%;
  height: 28vh;
  flex-wrap: wrap;
  
  .services {
    width: 16%;
    /* height: 28vh; */
    display: flex;
  }
`;

// export const ContainSer = styled.div`
//   text-align: center;
//   margin: 1rem 0 2rem 0; 
// `;

export const Containabout = styled.div`
  display: flex;
  /* background-color: green; */
  width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* margin: 1rem 8rem 2rem 8rem;  */
`;
