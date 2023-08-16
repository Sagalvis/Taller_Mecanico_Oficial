import styled from "styled-components";

import { v } from "../styles/Variables";

export const ContainerLayout = styled.div`
    display: flex;
`;

export const ContainerMain = styled.main`
    padding: calc(${v.smSpacing} * 2);
    h1 {
        font-size: 14px;
    }
`;