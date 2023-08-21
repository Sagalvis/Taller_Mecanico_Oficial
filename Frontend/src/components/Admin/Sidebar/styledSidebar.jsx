import styled from 'styled-components';
import {Link} from "react-router-dom"
import { btnReset, v } from '../styles/Variables';


/* SideBar Init */
export const SidebarContainer = styled.div`
  width: ${({ $isopen }) => (!$isopen ? `auto` : `350px`)};
  background: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
    background: black;
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transform: ${({ $isopen }) => (!$isopen ? `rotate(180deg)` : `initial`)};
`;

/* Inicio contenedor logo y nombre  */
export const ContainerLogoName = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Logo1 = styled.img`
  height: auto;
  width: 100%;
`;

export const Logo2 = styled.img`
  height: auto;
  width: 50px;
`;
/* Final contenedor logo y nombre */

export const ContainerSearch = styled.div`
  margin-top: 5px;
  width: 90%;

`
export const Search = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    input {
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: 1px solid black;
        color: inherit;
    }
    display: flex;
`;

export const SearchIcon = styled.button`
  width: 50px;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const DividerSidebar = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
`;


/* Inicio contenedor Navbar Sidebar */


export const LinkContainer = styled.div`
  width: 90%;
  background: ${({ theme, $isactive }) => (!$isactive ? `transparent` : theme.bg3)};
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  
  
`;


export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
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
  color: #000000;
`;

export const Navbar1 = [
  {
    id:"1",
    label:"Home",
    icon: <i className="fa-solid fa-house"></i>,
    to:"/admin"
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
    to:"/login"
  }
]
/* Final contenedor Navbar Sidebar */