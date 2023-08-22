import styled from 'styled-components';
import {Link} from "react-router-dom"
import {colors} from "../styles/Theme.jsx"

/* SideBar Init */
export const SidebarContainer = styled.div`
  width: ${({ $isopen }) => (!$isopen ? `auto` : `350px`)};
  background: ${colors.sd};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  box-shadow: 0 0 7px 2px gray;
`;

export const SidebarButton = styled.button`
    
    position: absolute;
    top: ${({ $isopen }) => ($isopen ? `88px` : `95px`)};
    right: ${({ $isopen }) => ($isopen ? `-16px` : `-16px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${colors.ic};
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
  width: 100px;
`;
/* Final contenedor logo y nombre */

/* Inicio contenedor Search y Perfil Sidebar */
export const ContainerPerfilName = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Perfil = styled.div`
  background-color: blue;
  width: 100px;
  height: 94px;
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
export const NameP = styled.h3`
  margin: 0;
`;
export const ContainerSearch = styled.div`
  width: 90%;
  margin: 0;
`;
export const Search = styled.div`
    input {
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
  border: 1px solid black;
  width: 50px;
  padding: 0;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
/* Final contenedor Search y Perfil Sidebar */

export const DividerSidebar = styled.div`
    height: 1px;
    width: 100%;
    background: ${colors.dv};
`;

/* Inicio contenedor Navbar Sidebar */
export const LinkContainer = styled.div`
  width: 90%;
  height: 5%;
  background: ${({ $isactive }) => (!$isactive ? `transparent` : `${colors.to}`)};
  border-radius: 10px;
  display:flex;
  :hover{
    background:${({$isactive})=>($isactive?`${colors.to}`:`${colors.dv}`)};
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
`; 

export const LinkIcon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:${colors.ic};
`;

export const LinkLabel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color:${colors.text};
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
    to:"/employes/login"
  }
]
/* Final contenedor Navbar Sidebar */