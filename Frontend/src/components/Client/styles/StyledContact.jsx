import styled from 'styled-components';

export const ContainerContact = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  height: 91vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* background-color: green; */
`;

export const Contacts = styled.div`
  display: flex;
  gap: .5rem;
  background-color: #eee;
  box-shadow: 9px 17px 22px -24px rgba(0,0,0,0.79);
  padding: .5rem;
  border-radius: 4px;
  width: 70%;
  height: 80vh;
  overflow: hidden;
`;

export const ContainForm = styled.div`
  /* background-color: orange; */
  width: 50%;
  height: 100%;
`;

export const Title = styled.div`
  margin: 0 0 4rem 0;
`;

export const TitleH2 = styled.h2`
  font-size: 1.9rem;
`;

export const TitleP = styled.p`
  margin: 0;
  font-size: .9rem;
  color: red;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 90%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #fff;
  color: #222;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.301);
  transition: box-shadow 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  }
  &::placeholder {
    color: #999;
    font-family: 'Outfit', sans-serif;
    font-size: .9rem;
  }
  `;

export const TextArea = styled.textarea`
  width: 90%;
  width: 90%;
  padding: 12px;
  margin: 0 0 1.5rem 0;
  border: none;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  border-radius: 4px;
  background-color: #fff;
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
    font-family: 'Outfit', sans-serif;
    font-size: .9rem;
}
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 9px;
  background-color: #222;
  color: white;
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

//Estilos de la segunda parte de contacto.

export const InfoContact = styled.div`
  /* background-color: salmon; */
  display: flex;
  width: 50%;
  height: 100%;
  position: relative;
`;

export const WallContact = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wall = styled.img`
  width: 100%;
  border-radius: 4px;
  height: 100%;
  opacity: 0.5;
  object-fit: cover;
`;

export const ContainInfo = styled.div`
  position: absolute;
  font-size: 2rem;
  left: 50%;
  translate: -50%;
`;

export const Icon = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const TextTitle = styled.h5`
  display: flex;
  justify-content: center;
  font-family: 'Outfit', sans-serif;
  `;

export const ContainText = styled.div`
  display: flex;
  justify-content: center;
`;

export const Parraf = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;

