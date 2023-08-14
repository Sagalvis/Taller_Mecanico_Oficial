import {Link} from "react-router-dom"
import { ContainerRouter, Li, Nav, Ul } from "./styledRouter";

const Layout = () => {
  return (
    <div>
      <ContainerRouter>
      <Nav>
        <Ul>
          <Li>
            <Link to="/">Home</Link>
            <Link to="/service">servicios</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/vehicle">My Vehicle</Link>
          </Li>
        </Ul>
      </Nav>
      </ContainerRouter>
    </div>
    
  );
};

export default Layout;
