import styled from "styled-components";
import { colors } from "../styles/Theme";

export const ContainerLayout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const ContainerPages = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${colors.primary};
`;