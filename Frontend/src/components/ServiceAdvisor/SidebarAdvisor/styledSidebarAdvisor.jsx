import styled from "styled-components";
import {colors} from "../../Admin/styles/Theme"

export const ContainerSidebarAdvisor = styled.div`
  width: ${({ $isopen }) => (!$isopen ? `70px` : `325px`)};
  transition: width 0.3s;
  background: #5a8dd5;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  box-shadow: 0 0 7px 2px gray;

`;

export const LinkContainerBack = styled.div`
    width: 90%;
  height: 30%;
  border-bottom: ${({ $isactive }) => ($isactive ? `none` : `2px solid ${colors.to}`)};
  background-color: ${({$isactive}) => ($isactive ? `${colors.to}` : 'transparent')};
  border-radius: 10px;
  display: flex;
  :hover {
    background-color: ${({$isactive}) => ($isactive ? 'transparent' : `${colors.to}`)};
    border-radius: 10px;
  }
`

export const NavbarAdvisor1 = [

  {
    id: 1,
    label: "Registro clientes",
    icon: <i className="fa-solid fa-user"></i>,
    to: "/advisor"
  },
  {
    id: 2,
    label: "Registro vehiculos",
    icon: <i className="fa-solid fa-car"></i>,
    to: "/advisor/registervehicle"
  },
  {
    id: 3,
    label: "Registro entrada vehiculos ",
    icon: <i className="fa-solid fa-sheet-plastic"></i>,
    to: "/advisor/registerhojav"
  },
  {
    id: 4,
    label: "Orden del servicio ",
    icon: <i className="fa-solid fa-clipboard-list"></i>,
    to: "/advisor/orderservice"
  },
  {
    id: 5,
    label: "Cotización ",
    icon: <i className="fa-solid fa-money-check-dollar"></i>,
    to: "/advisor/cotizacion"
  },
  {
    id: 6,
    label: "Registro de salida vehiculos ",
    icon: <i className="fa-solid fa-right-from-bracket"></i>,
    to: "/advisor/registrosalida"
  },
];


export const NavbarAdvisor2 = [
  {
    id: 1,
    label: "Logout",
    icon: <i className="fa-solid fa-power-off"></i>,
    to: "/employes/login"
  }
]