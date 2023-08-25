import styled from 'styled-components';


export const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f4f4; //f5f4f4
  width: 95%;
  height: 23vh;
  margin: 1.5rem .5rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, .25);
  border-radius: 4px;
  cursor: pointer;
`;

export const ServiceImg = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ServiceType = styled.p`
  font-size: .9rem;
  margin: .3rem;
  font-weight: 500;
  text-transform: uppercase;
`;