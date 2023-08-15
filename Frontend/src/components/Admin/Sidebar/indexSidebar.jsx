import {
  LinkContainer,
  LinkIcon,
  LinkMenu,
  Logo,
  LogoName,
  NavLink,
  SidebarContainer,
  SidebarMenu,
  Label,
  ContainerLogoName,
  ContainerIcon,
} from "./styledSidebar";

const Sidebar = () => {
  // eslint-disable-next-line react/prop-types
  const CustomLink = ({ icon, label, to, id }) => {
    return (
      <LinkContainer key={id}>
        <NavLink to={to}>
          <LinkIcon>{icon}</LinkIcon>
          <ContainerIcon>
            <Label>{label}</Label>
          </ContainerIcon>
        </NavLink>
      </LinkContainer>
    );
  };
  return (
    <div>
      <SidebarContainer>
        <ContainerLogoName>
          <Logo href="http://localhost:5173/admin">
            <LogoName>
              <span>Cars</span>  Transformations
            </LogoName>
          </Logo>
        </ContainerLogoName>
        <SidebarMenu>
          {LinkMenu.map(({ icon, label, to, id }) => (
            <CustomLink key={id} icon={icon} label={label} to={to} />
          ))}
        </SidebarMenu>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
