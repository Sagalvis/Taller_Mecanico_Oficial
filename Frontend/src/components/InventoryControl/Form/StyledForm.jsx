import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    border-radius: 5px;
    background-color: white;
    flex-direction: column;
`;
export const InputContainerForm = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;
`
export const InputArea = styled.div`
    
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
    height: 40px;
    color: white;
    background-color: #2c73d2;
`;