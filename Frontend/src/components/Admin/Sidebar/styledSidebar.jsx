import styled from 'styled-components';
import {Link} from "react-router-dom"
import { v } from '../styles/Variables';


/* SideBar Init */
export const SidebarContainer = styled.div`
  width: ${v.sidebarWidth};
  background: ${({theme}) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};
  position: relative;

`;

/* Inicio contenedor logo y nombre  */
export const ContainerLogoName = styled.div`
  ba
`;

export const Logo = styled.a`

`;

export const LogoName = styled.div`

`;

/* Final contenedor logo y nombre */

/* Inicio contenedor Navbar Sidebar */
export const SidebarMenu = styled.ul`

`;

export const LinkContainer = styled.li`

`;

export const NavLink = styled(Link)`

`; 

export const Navbar1 = [
  {
    id:"1",
    label:"Home",
    icon: <i className="fa-solid fa-house"></i>,
    to:"*"
  },
  {
    id:"2",
    label:"Productos",
    icon: <i className="fa-solid fa-store"></i>,
    to:"/admin/productos"
  },
  {
    id:"3",
    label:"Clientes",
    icon: <i className="fa-solid fa-user"></i>,
    to:"/admin/clientes"
  },
  {
    id:"4",
    label:"Vehiculos",
    icon: <i className="fa-solid fa-car"></i>,
    to:"/admin/vehiculos"
  },
  {
    id:"5",
    label:"Employees",
    icon: <i className="fa-solid fa-users"></i>,
    to:"/admin/productos"
  },
  {
    id:"6",
    label:"Home",
    icon: <i className="fa-solid fa-user"></i>,
    to:"/admin/productos"
  },
  {
    id:"7",
    label:"Home",
    icon: <i className="fa-solid fa-user"></i>,
    to:"/admin/productos"
  }
];

export const Navbar2 = [
  {
    id: "1",
    label: "Logout",
    icon: <i className="fa-solid fa-right-from-bracket"></i>,
    to:"/admin/login"
  }
]
/* Final contenedor Navbar Sidebar */