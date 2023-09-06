import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../styles/Theme.jsx";

/* SideBar Init */
export const SidebarContainer = styled.div`
  width: ${({ $isopen }) => (!$isopen ? `70px` : `325px`)};
  transition: width 0.3s;
  background: #041737;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  box-shadow: 0 0 7px 2px gray;
`;

export const ContainerButton = styled.div`
  height: 7%;
  /* background-color: red; */
  width: ${({ $isopen }) => (!$isopen ? `70px` : `320px`)};
  transition: width 0.3s;
  display: flex;
  justify-content: ${({ $isopen }) => (!$isopen ? `center` : `flex-end`)};
  align-items: center;
`;
export const SidebarButton = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export const Icon1 = styled.div`
  color: #ffffff;
`;

/* Inicio contenedor Search y Perfil Sidebar */
export const ContainerPerfilName = styled.div`
  width: ${({ $isopen }) => (!$isopen ? `70px` : `325px`)};
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainNameP = styled.div`
  width: ${({ $isopen }) => (!$isopen ? `70px` : `250px`)};
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Perfil = styled.div`
  background-color: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgP = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const NameP = styled.div`
  font-weight: 500;
  margin: 0;
  color: white;
`;
/* Final contenedor Search y Perfil Sidebar */

export const DividerSidebar = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.dv};
`;

/* Inicio contenedor Navbar Sidebar */
export const ContainNav = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  :hover {
    color: black;
  }
`;

export const LinkContainer = styled.div`
  width: 90%;
  height: 5%;
  border-bottom: ${({ $isactive }) =>
    $isactive ? `none` : `2px solid ${colors.to}`};
  background-color: ${({ $isactive }) =>
    $isactive ? `${colors.to}` : "transparent"};
  border-radius: 10px;
  display: flex;
  :hover {
    background-color: ${({ $isactive }) =>
      $isactive ? "transparent" : `${colors.to}`};
    border-radius: 10px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  font-size: 16px;
  color: black;
`;

export const LinkIcon = styled.h4`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkLabel = styled.h4`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

export const Navbar1 = [
  {
    id: "1",
    label: "Home",
    icon: <i className="fa-solid fa-house"></i>,
    to: "/admin",
  },
  {
    id: "2",
    label: "Productos",
    icon: <i className="fa-solid fa-store"></i>,
    to: "/admin/productos",
  },
  {
    id: "3",
    label: "Clientes",
    icon: <i className="fa-solid fa-user"></i>,
    to: "/admin/client",
  },
  {
    id: "4",
    label: "Vehiculos",
    icon: <i className="fa-solid fa-car"></i>,
    to: "/admin/vehicles",
  },
  {
    id: "5",
    label: "Employees",
    icon: <i className="fa-solid fa-users"></i>,
    to: "/admin/employees",
  },
  {
    id: "6",
    label: "Service",
    icon: <i className="fa-solid fa-briefcase"></i>,
    to: "/admin/service",
  },
  {
    id: "7",
    label: "Undefine",
    icon: <i className="fa-solid fa-user"></i>,
    to: "/admin/undefine",
  },
];

export const Navbar2 = [
  {
    id: "1",
    label: "Logout",
    icon: <i className="fa-solid fa-power-off"></i>,
    to: "/employes/login",
  },
];
/* Final contenedor Navbar Sidebar */
