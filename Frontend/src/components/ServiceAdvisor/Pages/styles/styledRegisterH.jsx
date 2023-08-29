import styled from "styled-components";
export const ContainerRegisterH = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: beige; */
`;

export const ContainerFormH = styled.div`
  width: 80%;
  height: 90%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
`;


export const TitleRegisterH = styled.div`
  margin: 0;
  width: 80%;
  height: 100%;
  border-radius: 15px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
`;
export const TextArea = styled.textarea`
  width: 80%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #eee;
  color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  transition: box-shadow 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    color: #999;
    font-family: "Outfit", sans-serif;
    font-size: 0.9rem;
  }
  resize: none;
`;
