import styled from 'styled-components';
import imagen from "../../../Img/fondobody.avif"

export const ContainerLogin = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${imagen});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerSignInSignUp = styled.div`
  background-color: #EFF3F5;
  position: relative;
  border: 1px solid #000;
  border-radius: 5px;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
  height: 500px;
  &:hover{
    box-shadow:  0 0 5px rgb(255, 255, 255);
    transition: 0.3s ;
  }
  @media (max-width: 760px){
    max-width: 80%;
    height: auto;
    min-height: 450px;
    
  }
`;

/* ---INICIO CONTENEDOR DE SIGN UP--- */

export const ContainerSignUp = styled.div`
  position: absolute;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 2;
  ${props => props.$signinin !== "true" ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 10;
  `
  : null}
  @media (max-width: 760px){
    position:static;
    width:100%;
    opacity:1;
    transform:none;
    z-index:10;
  }

`;



export const TitleSignUpIn = styled.h1`
  font-weight: bold;
  margin: 0;

`;

export const FormSignUpIn = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 50px ;
  height: 100%;
  text-align: center;
`;
export const BoxInput = styled.div`
  width: 250px;
  border-bottom: 1px solid #0000008b;
  display: flex;
  font-size: 20px;
`;

export const InputSignUpIn = styled.input`
  background: transparent;
  border: none;
  outline: none ;
  width: 100%;
`;

export const ButtonSignUpIn = styled.button`
  border-radius: 20px;
  border: 1px solid #000000;
  background-color: transparent;
  color: #000000; 
  font-size: 13px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active{
    transform: scale(0.95);
  }
  &:focus{
    outline: none;
  }
  &:hover{
    cursor: pointer;
  }
  @media (max-width: 760px) {
    padding: 10px 30px;
    font-size: 12px;
  }
`;


/* ---FINAL CONTENEDOR DE SIGN UP--- */


/* ---INICIO CONTENEDOR DE SIGN IN--- */
export const ContainerSignIn = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 1;
  z-index: 2;
  ${props => (props.$signinin !== "true" ?
    `transform: translateX(100%);
    opacity: 0;
    z-index: 0;
    ` : null )}

    @media (max-width: 760px) {
    position: static;
    width: 100%;
    opacity: 1;
    transform: none;
    z-index: 0;
  }
`;
export const ForgotSignIn = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0 ;
`; 

/* ---FINAL CONTENEDOR DE SIGN IN--- */


export const ContainerOverLay = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => props.$signinin !== "true" ?`transform: translateX(-100%);` : null }

  @media (max-width: 760px) {
    position: static;
    width: 100%;
    height: auto;
    transform: none;
  }
`;

export const OverLay = styled.div`
  background: -webkit-linear-gradient(to right, #1e7abb, #192229);
  background: linear-gradient(to right, #1e7abb, #192229);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.$signinin !== "true" ? `transform: translateX(50%);` : null)}

  @media (max-width: 760px) {
    position:static;
    overflow:hidden;
    width: 100%;
    height: auto;
    transform: none;
    
  }
`;




export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  @media (max-width: 760px) {
    position: static;
    width: 100%;
    height: auto;
    transform: none;
  }
`
export const ButtonGhost = styled(ButtonSignUpIn)`
  background-color: transparent;
  border-color: #ffffff;
  font-weight: bold;
  color: #000000;
  &:hover{
    background-color: #50697f;
    color: #d0d9df;
    font-weight: 600px;
  }

  @media (max-width: 760px) {
    padding: 8px 25px;
    font-size: 11px;
  }
  
`;

export const LeftOver = styled(OverlayPanel)`
  left: -40px;
  transform: translateX(-50%);
  ${props => props.$signinin !== "true" ? `transform: translateX(0);` : null}

  @media (max-width: 760px) {
    position: static;
    width: 100%;
    height: auto;
    transform: none;
  }
`;

export const RightOver = styled(OverlayPanel)`
  right: -30px;
  transform: translateX(0);
  ${props => props.$signinin !== "true" ? `transform: translateX(20%);` : null}

  @media (max-width: 760px) {
    position: static;
    width: 100%;
    height: auto;
    transform: none;
  }
`;
