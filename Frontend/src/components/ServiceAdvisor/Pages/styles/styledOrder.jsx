import styled from "styled-components";

export const ContainMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 10px;
  background-color: green;
`;

export const OrderContain = styled.div`
  background-color: #fff;
  width: 40%;
  height: 90%;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;

export const ContainInfo = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  height: 18%;
  /* background-color: yellow; */
`;

export const ThisLogo = styled.img`
  width: 230px;
  height: 200px;
`;

export const Info = styled.div`
  
`;

export const InfoH1 = styled.h1`
  
`;

export const InfoP = styled.p`
  margin: 0;
`;

export const ContainTextArea = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  margin-bottom: 3rem;
`;

export const ContainProducts = styled.div`
  background-color: #eee;
  padding: 10px;
  height: 40%;
  overflow-y: scroll;
  margin-bottom: 1rem;
`;

export const ContainH2 = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const TitleH2 = styled.h2`
  
`;

export const ContainInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 70%  ;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-family: 'Consolas';
  text-transform: uppercase;
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
    font-family: 'Consolas';
    font-size: .9rem;
  }
`;

export const ContainButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 4px;
  background-color: #222;
  color: white;
  width: 20%;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #222;
  }
  
  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const HistoryOrder = styled.div`
    background-color: #fff;
  width: 40%;
  height: 90%;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
`;
export const TextArea = styled.textarea`
  width: 90%;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #eee;
  color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  transition: box-shadow 0.3s ease;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    color: #999;
    font-family: 'consolas';
    font-size: 0.9rem;
  }
`;

