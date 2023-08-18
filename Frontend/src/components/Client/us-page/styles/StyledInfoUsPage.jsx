import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: green; */
  width: 100%;
`;


export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 6rem;
  text-align: center;
  background-color: #fafafa;
  border-radius: .3rem;
  width: 50%;
  padding: 1.5rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.155);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  display: flex;
  text-align: justify;
  /* font-size: 1.1rem; */
`;