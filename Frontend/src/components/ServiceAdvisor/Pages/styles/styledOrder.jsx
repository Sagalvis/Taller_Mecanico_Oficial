import styled from "styled-components";

export const ContainMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 10px;
`;

export const OrderContain = styled.div`
  background-color: #ffffff9d;
  width: 40%;
  height: 95%;
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

export const Info = styled.div``;

export const InfoH1 = styled.h1``;

export const InfoP = styled.p`
  margin: 0;
`;

export const DividierOrderFactura = styled.div`
  height: 1px;
  width: 100%;
  background: #000000;
`;

export const TittleInfo = styled.h2`
  text-align: center;
  padding: 1.5rem 0;
  margin: 0;
`;
export const ContainTextArea = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  margin-bottom: 0.5rem;
`;



export const ContainInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50%;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 70%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-family: "Consolas";
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
    font-family: "Consolas";
    font-size: 0.9rem;
    text-transform: lowercase;
  }
`;

export const ContainButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 5px;
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
    font-family: "consolas";
    font-size: 0.9rem;
  }
`;

export const ContainProducts = styled.div`
  /* background-color: #eee; */
  height: 40%;
  width: 100%;
`;

export const ContainH2 = styled.div`
  width: 98.6%;
  height: 40px;
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleProduct = styled.div`
  color: #000000;
  width: 30%;
  display: flex;
  align-items: center ;
  justify-content: center;
  height: 100%;
  font-size: 22px;
  font-weight: bold;
`;
export const ContainerInputProduct = styled.div`
  width: 99.7%;
  height: 260px;
  background-color: #eee;
  color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  transition: box-shadow 0.3s ease;
  border-radius: 4px;
  overflow: auto;
  /* background-color: green; */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 4px;
  }
`;

export const ContenInput = styled.div`
  height: auto;
`
