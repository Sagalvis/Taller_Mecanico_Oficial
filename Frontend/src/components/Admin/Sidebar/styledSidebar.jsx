import styled from 'styled-components';
import {Link} from "react-router-dom"


/* SideBar Init */
export const SidebarContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 20rem;
  border-radius: 0 15px 15px 0;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.479);
  display: flex;
  flex-direction: column;
`;

export const ContainerLogoName = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;

`;
export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #0066ff;
  font-weight: bold;
`;

export const LogoName = styled.div`
  font-size: 1.5rem;
  text-align: center;
  height: 50px;
  & span{
    color: #000000;
  }
`;

export const SidebarMenu = styled.ul`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
`;

export const ContainerIcon = styled.div`
  height: auto;
  width: 50%;
  display: flex;
`;


export const LinkIcon = styled.div`
  font-size: 1.3rem;
  color: black;
`;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: space-around;
  background: transparent;
  height: 50px;
  
`; 

export const Label = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  padding: 0;
  font-family: 'Outfit', sans-serif;
  font-size: 1.3rem;
  cursor: pointer;
  
`;

export const LinkMenu = [
  {
    id:"1",
    label:"Home",
    icon: <i className="fa-solid fa-house"></i>,
    to:"/"
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
]