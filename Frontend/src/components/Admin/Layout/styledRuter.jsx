import styled from "styled-components";
import { colors } from "../styles/Theme";

export const ContainerLayout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: ${colors.primary};
`;
export const Dividier = styled.div`
    width: 70px;
`
export const ContainerPages = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;