import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 120px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

export const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    height: 42px;
    color: white;
    background-color: #2c73d2;
`;