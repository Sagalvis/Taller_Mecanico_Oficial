import styled from 'styled-components';

export const Aquih1 = styled.h1`
  font-size: 2.7rem;
  letter-spacing: 1px;
`;

export const Segundocontenedor = styled.div`
  margin: 4rem 2rem;
  display: flex;
  justify-content: space-around;
`;

export const Contenedortext = styled.div`
  width: 40%;
  text-align: start;
  font-size: 1.1rem;
`;

export const Aquih2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding-bottom: 1rem;
`;

export const Aqui2p = styled.p`
`;

export const AquiPAbout = styled.p`
  width: 70%;
  padding: 0 5rem;
  font-size: 1.3rem;
  font-weight: 300;
`;

export const Contenedorimg = styled.div`
  position: relative;
  /* background-color: red; */
  width: 50%;
  display: flex;
  justify-content: space-between;
  /* z-index: 1; */
`;

export const Aquimg = styled.img`
  width: 49%;
  height: 300px;
  /* object-fit: cover; */
  border-radius: 6px;
  box-shadow: -1px 1px 62px -18px rgba(0, 0, 0, 0.19);
  &:nth-child(2) {
    position: absolute;
    top: -10%;
    right: 0;
  }
`;