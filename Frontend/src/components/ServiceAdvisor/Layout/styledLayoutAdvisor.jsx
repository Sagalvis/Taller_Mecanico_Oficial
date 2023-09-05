import styled from "styled-components";
import fondo from '../../../assets/27650278_wangs_61.jpg'

export const ContainerLayoutAdvisor = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const ContainerPagesAdvisor = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url(${fondo});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;