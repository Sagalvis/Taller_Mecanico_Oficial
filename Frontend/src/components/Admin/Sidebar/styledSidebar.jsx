import styled from 'styled-components';
import {Link} from "react-router-dom"
import { btnReset, v } from '../styles/Variables';


/* SideBar Init */
export const SidebarContainer = styled.div`
  width: ${({ $isopen }) => (!$isopen ? `auto` : v.sidebarWidth)};
  background: ${({theme}) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};
  position: relative;

`;

export const SidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ $isopen }) => ($isopen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: ${({ $isopen }) => (!$isopen ? `rotate(180deg)` : `initial`)};
`;

/* Inicio contenedor logo y nombre  */
export const ContainerLogoName = styled.div`
  background-color: #b6dfdf;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.a`

`;

export const LogoName = styled.div`

`;

export const ContainerSearch = styled.div`
  background-color: #ff0000;
  margin-top: 5px;
  width: 100%;

`
export const Search = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    input {
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
    }
    display: flex;
`;

export const SearchIcon = styled.button`
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;

`;

export const DividerSidebar = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;
/* Final contenedor logo y nombre */

/* Inicio contenedor Navbar Sidebar */


export const LinkContainer = styled.div`
  background: ${({ theme, $isactive }) => (!$isactive ? `transparent` : theme.bg3)};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;


export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`; 

export const LinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
`;

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const Navbar1 = [
  {
    id:"1",
    label:"Home",
    icon: <i className="fa-solid fa-house"></i>,
    to:"/admin/home"
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
    to:"/admin/client"
  },
  {
    id:"4",
    label:"Vehiculos",
    icon: <i className="fa-solid fa-car"></i>,
    to:"/admin/vehicles"
  },
  {
    id:"5",
    label:"Employees",
    icon: <i className="fa-solid fa-users"></i>,
    to:"/admin/employees"
  },
  {
    id:"6",
    label:"Service",
    icon: <i className="fa-solid fa-briefcase"></i>,
    to:"/admin/service"
  },
  {
    id:"7",
    label:"Undefine",
    icon: <i className="fa-solid fa-user"></i>,
    to:"/admin/undefine"
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