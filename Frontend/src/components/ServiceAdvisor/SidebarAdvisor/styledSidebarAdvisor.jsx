import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerSidebarAdvisor = styled.div`
  position: relative;
  width: ${({ $isopen }) => (!$isopen ? `160px` : `22rem`)};
  transition: width 0.5s ease;
  height: 100%;
  box-shadow: 0 0 7px 2px gray;
`;

export const SidebarButtonAdvisor = styled.button`
  position: absolute;
  top: ${({ $isopen }) => ($isopen ? `88px` : `95px`)};
  right: ${({ $isopen }) => ($isopen ? `-16px` : `-16px`)};
`;

export const LogoAdvisor = styled.div`
  height: 10%;
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

export const DividerSidebar = styled.div`
  height: 1px;
  width: 100%;
  background: #d8d5d5;
`;

export const ContainerPerfilAdvisor = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const PefiLAdvisor = styled.div`
  background-color: blue;
  height: 50%;
  width: 30%;
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

export const NavContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  background-color: aqua;
  &:hover{
    background-color: ${({$isactive}) => ($isactive ? `gray` : `gray  `)};
  }
  
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 2%;
  align-items: center;
  width: 100%;
`;

export const NavLabel = styled.div`
  width: 70%;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
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

export const NavbarAdvisor1 = [
  {
    id: "1",
    label: "Home",
    icon: <i className="fa-solid fa-house"></i>,
    to: "/admin",
  },
  {
    id: "2",
    label: "Registro clientes",
    icon: <i className="fa-solid fa-user"></i>,
    to: "/admin/client",
  },
  {
    id: "3",
    label: "Registro vehiculos",
    icon: <i className="fa-solid fa-car"></i>,
    to: "/admin/vehicles",
  },
];
