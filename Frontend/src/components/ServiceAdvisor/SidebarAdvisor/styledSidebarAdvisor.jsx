import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerSidebarAdvisor = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${({ $isopen }) => (!$isopen ? `160px` : `22rem`)};
  transition: width 0.5s ease;
  height: 100%;
  box-shadow: 0 0 7px 2px gray;
`;

export const SidebarButtonAdvisor = styled.button`
  position: absolute;
  top: ${({ $isopen }) => ($isopen ? `80px` : `80px`)};
  right: ${({ $isopen }) => ($isopen ? `-16px` : `-16px`)};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none ;
  background-color: black;
  color: white;
  font-size: 20px;
  transform: ${({$isopen}) => (!$isopen ? `rotate(180deg)` : `initial`)};
`;


export const ContainerLogo = styled.div`
  height: 10%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #d8d5d5;
`;
export const LogoAdvisor = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const LogoAdvisor1 = styled.img`
  height: 100%;
  width: 100%;
`;

export const LogoAdvisor2 = styled.img`
  height: 100%;
  width: 100%;
  animation: acelerate 1s forwards;
  @keyframes acelerate {
    from {
      transform: translateX(-500px);
    }
    to {
      transform: translateX(2px);
    }
  }
`;

export const ContainerPerfilNavbar = styled.div`
  height: 78%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const ContainerPerfilAdvisor = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const PefiLAdvisor = styled.div`
  background-color: blue;
  height: 100px;
  width: ${({ $isopen }) => ($isopen ? `100px` : `100px`)};
  border-radius: 50%;
`;

export const PerfilImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const PerfilName = styled.h3`
  margin: 0;
`;

export const ContainerNav = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const NavContainer = styled.div`
  width: 95%;
  height: 13%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ $isasctive }) => (!$isasctive ? `transparent` : `#b9b8b8 `)};
  border-radius: 15px;
  &:hover {
    background-color: ${({ $isasctive }) =>
      $isasctive ? `#b9b8b8 ` : `#b9b8b8  `};
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 2%;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavLabel = styled.div`
  width: 70%;
  color: black;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: black;
`;

export const ContainerNav2 = styled.div`
  height: 10%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: transparent;
  }
  border-top: 1px solid #d8d5d5;
`;

export const NavbarAdvisor1 = [
  {
    id: 1,
    label: "Home",
    icon: <i className="fa-solid fa-house"></i>,
    to: "",
  },
  {
    id: 2,
    label: "Registro clientes",
    icon: <i className="fa-solid fa-user"></i>,
    to: "/advisor/registerclient",
  },
  {
    id: 3,
    label: "Registro vehiculos",
    icon: <i className="fa-solid fa-car"></i>,
    to: "/advisor/registervehicle",
  },
  {
    id: 4,
    label: "Registro entrada vehiculos ",
    icon: <i className="fa-solid fa-sheet-plastic"></i>,
    to: "/advisor/registerhojav",
  },
  {
    id: 5,
    label: "Orden del servicio ",
    icon: <i className="fa-solid fa-clipboard-list"></i>,
    to: "/advisor/orderservice",
  },
  {
    id: 6,
    label: "Registro de salida vehiculos ",
    icon: <i className="fa-solid fa-clipboard-list"></i>,
    to: "/advisor/registrosalida",
  },
  {
    id: 10,
    label: "Logout",
    icon: <i className="fa-solid fa-right-from-bracket"></i>,
    to: "/employes/login",
  },
];
