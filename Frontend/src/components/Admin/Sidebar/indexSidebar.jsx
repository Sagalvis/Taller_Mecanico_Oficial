import { ContainerLogoName, ContainerSearch, DividerSidebar, Search, SearchIcon, SidebarContainer } from "./styledSidebar";

const Sidebard = () => {
  return ( 
    <SidebarContainer>
        <ContainerLogoName>
          <h1>
            aqui va el logo
          </h1>
        </ContainerLogoName>
        <ContainerSearch>
          <Search>
            <SearchIcon>
            </SearchIcon>
            <input placeholder="Aqui va el buscador">
              
            </input>
          </Search>
        </ContainerSearch>
        <DividerSidebar/>
{/*         {Navbar1.map(({id, label, icon, to})=>(

        ))} */}
    </SidebarContainer>
  );
}

export default Sidebard;
