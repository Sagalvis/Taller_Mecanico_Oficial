import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    flex-wrap: wrap;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    background-color: white;
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
    padding: 0 2%;
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    &::placeholder {
        font-size:.9rem;
        
    }
`;

export const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: none;
    height: 42px;
    color: white;
    background-color: #2c73d2;
`;