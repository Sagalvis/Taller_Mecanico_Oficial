import { LinkContainer, LinkIcon, LinkMenu, Logo, LogoName, NavLink, Sidebar, SidebarMenu } from "./styledDashboard"
import {RxDashboard} from "react-icons/rx"



const Dashboard = () => {
  const CustomLink = ({icon, label, to, id}) => {
    return(
      <LinkContainer key={id}>
        <NavLink to={to}>
          <LinkIcon>{icon}</LinkIcon>
          <span>{label}</span>
        </NavLink>  
      </LinkContainer>
    )
  }
  return ( 
    <div>
      {/* Sidebar */}
    <Sidebar>
      <Logo to="/" >
        <RxDashboard/>
        <LogoName><span>Cars</span>Transformations</LogoName>
      </Logo>
      <SidebarMenu>
        {LinkMenu.map(({icon, label, to, id}) =>(
          <CustomLink
            key={id}
            icon={icon}
            label={label}
            to={to}
          />
        ))}
      </SidebarMenu>
    </Sidebar>
    </div>
  );
}

export default Dashboard;