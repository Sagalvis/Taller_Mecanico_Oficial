import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  background-color:#0c2851;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Subcontainer = styled.div`
  background-color:#204748;
  height: 25%;
  width: 100%;
  display: grid;
  grid-template-columns: 35% 30% 35%;
  grid-template-rows: 25%, 25%, 25%, 25%;
`
export const ContainerTitle = styled.div`
  grid-row: 1;
  grid-column: 2;
  display:flex;
  justify-content: start;
  align-items: center;
  
`
export const FotterTitle = styled.h1`
  color: white;
  font-family: sans-serif;
  font-size: 120%;
  margin-top: 10px;
  margin-right: 20px;
  font-family: sans-serif;
`

export const ConsulQuote = styled.div`
  grid-row: 2;
  grid-column: 2 ;
  display:flex ;
  justify-content: center;
  align-items:center;
  width:80%;
`


// boton de cotizaciones
export const Quote = styled.a`
  width: 70%;
  height: 70%;
  background-color:#01dc8d;
  border-radius:5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const ConsulCall = styled.div`
  grid-row: 3;
  grid-column: 2;
  display:flex;
  justify-content: center;
  align-items:center;
  width:80%;
`
//boton de llamadas
export const Call = styled.a`
  width: 70%;
  height: 70%;
  background-color:#2f50ff;
  border-radius:5px;
  color: #fdf7ff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ConsulWhat = styled.div`
  grid-row: 4;
  grid-column: 2;
  display:flex;
  justify-content: center;
  align-items:center;
  width:80%;

`
// boton de whatsapp
export const What = styled.a`
  width: 70%;
  height: 70%;
  background-color:#113c7d;
  border-radius:5px;
  color:#f3ecee;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

`

//contenedores de servicios

export const ContainerServices = styled.div`
  width: 100%;
  height: 75%;
  background-color:#03161c;
`

export const SocialMedia = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`

export const MediaContainer = styled.div`
  width: 20%;
  height: 90%;
  margin-left: 65px;
  display:flex;
  align-items: center;
  justify-content:space-around;
  
`

export const ContainerInstagram = styled.div`
  width: 20%;
  height: 60%;
  display:flex;
  justify-content:center;
  align-items: center;
  font-size: 30px;
  color: #f1e1c8;
`

export const ContainerFacebook = styled.div`
  width: 20%;
  height: 60%;
  display:flex;
  justify-content:center;
  align-items: center;
  font-size: 30px;
  color: #f1e1c8;
`

export const ContainerTwiter = styled.div`
  width: 20%;
  height: 60%;
  display:flex;
  justify-content:center;
  align-items: center;
  font-size: 40px;
  color:#f1e1c8;
`

export const ContainerDate = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`

export const Date = styled.h1`
  margin-left: 80px;
  color: #f1e1c8;
`

export const ContainerInputs = styled.div`
  width:100%;
  height:60%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
`

export const Promotion = styled.div`
  width:100%;
  height:15%;
  background-color: #171717;
  display:flex;
  justify-content: center;
  align-items: center;
`

export const Name = styled.h1`
  color: #f1e1c8;
  font-size: 12px;
`