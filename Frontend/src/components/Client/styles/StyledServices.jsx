import styled from 'styled-components';


export const Service = styled.div`
  display: flex;
  width: 100%;
  height: 23vh;
  background-color: #f5f4f4; //f5f4f4
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 1rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, .25);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ServiceImg = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ServiceType = styled.p`
  font-size: .9rem;
  margin: .3rem;
  font-weight: 500;
  text-transform: uppercase;
`;